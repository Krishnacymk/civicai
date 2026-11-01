import type { Scheme } from '../types/scheme';
import { SCHEMES } from '../data/schemes';
import { GOVERNMENTS } from '../data/governments';
import type { LanguageCode } from '../i18n/types';

export interface AssistantMessage {
  id: string;
  sender: 'user' | 'assistant';
  timestamp: string;
  text: string;
  isDemonstrationMode?: boolean;
  matchedSchemes?: Scheme[];
  missingEvidenceNotes?: string[];
  suggestedFollowUps?: string[];
  citations?: {
    name: string;
    url: string;
    lastVerifiedDate: string;
  }[];
}

export interface AssistantConversation {
  id: string;
  messages: AssistantMessage[];
}

export async function sendQueryToAssistant(
  query: string,
  _history: AssistantMessage[] = [],
  language: LanguageCode = 'en',
  targetGovernment: string = 'all'
): Promise<AssistantMessage> {
  // Attempt backend API if accessible
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // quick check

    const response = await fetch('/api/assistant/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, language, government: targetGovernment }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      return {
        id: `msg-${Date.now()}`,
        sender: 'assistant',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: data.text || data.response,
        matchedSchemes: data.matchedSchemes || [],
        missingEvidenceNotes: data.missingEvidenceNotes || [],
        suggestedFollowUps: data.suggestedFollowUps || [],
        citations: data.citations || []
      };
    }
  } catch {
    // Backend API offline or unreachable, fall back gracefully to local demonstration engine
  }

  // Local Demonstration Fallback Engine
  return generateLocalDemonstrationResponse(query, language, targetGovernment);
}

function findScheme(id: string): Scheme | undefined {
  return SCHEMES.find(s => s.id === id);
}

function generateLocalDemonstrationResponse(
  query: string, 
  language: LanguageCode = 'en',
  targetGovernment: string = 'all'
): AssistantMessage {
  const q = query.toLowerCase();
  const matchedSchemes: Scheme[] = [];
  let answerText = '';
  const missingEvidence: string[] = [];
  const followUps: string[] = [];

  // Regional & Government Intent Detection
  const isTelangana = targetGovernment === 'telangana' || 
    q.includes('telangana') || q.includes('hyderabad') || q.includes('aasara') || q.includes('cheyutha') || 
    q.includes('mahalakshmi') || q.includes('gruha jyothi') || q.includes('తెలంగాణ') || q.includes('ఆసరా') || 
    q.includes('చేయూత') || q.includes('మహాలక్ష్మి') || q.includes('గృహ జ్యోతి') || q.includes('தெலுங்கானா');

  const isTamilNadu = targetGovernment === 'tamil-nadu' || 
    q.includes('tamil nadu') || q.includes('tamilnadu') || q.includes('chennai') || q.includes('kmut') || 
    q.includes('magalir') || q.includes('pudhumai') || q.includes('cmchis') || q.includes('naan mudhalvan') || 
    q.includes('தமிழ்நாடு') || q.includes('கலைஞர்') || q.includes('மகளிர்') || q.includes('புதுமை') || 
    q.includes('முதலமைச்சர்') || q.includes('நான் முதல்வன்') || q.includes('తమిళనాడు');

  const isAndhra = targetGovernment === 'andhra-pradesh' || 
    q.includes('andhra') || q.includes('amaravati') || q.includes('ntr bharosa') || 
    q.includes('thalliki') || q.includes('sukhibhava') || q.includes('aarogyasri') || q.includes('ఆంధ్రప్రదేశ్') || 
    q.includes('ఆంధ్ర') || q.includes('భరోసా') || q.includes('తల్లికి వందనం') || q.includes('అన్నదాత సుఖీభవ') || 
    q.includes('ఆరోగ్యశ్రీ') || q.includes('ஆந்திர');

  // Any other Indian State or Union Territory from all 37 jurisdictions
  const otherGov = GOVERNMENTS.find(g => {
    if (g.level === 'central') return false;
    if (g.id === 'andhra-pradesh' || g.id === 'telangana' || g.id === 'tamil-nadu') return false;
    if (targetGovernment === g.slug || targetGovernment === g.id) return true;
    const gName = g.name.toLowerCase();
    if (q.includes(gName)) return true;
    if (g.stateCode && new RegExp(`\\b${g.stateCode.toLowerCase()}\\b`).test(q)) return true;
    if (g.capitalCity && q.includes(g.capitalCity.toLowerCase())) return true;
    if (g.hindiName && q.includes(g.hindiName)) return true;
    if (g.teluguName && q.includes(g.teluguName)) return true;
    if (g.tamilName && q.includes(g.tamilName)) return true;
    return false;
  });

  // Categorical intent detection across English, Hindi, Telugu, and Tamil
  const isDisability = q.includes('disab') || q.includes('pwd') || q.includes('handicap') || q.includes('sadarem') || 
    q.includes('udid') || q.includes('divyang') || q.includes('blind') || q.includes('locomotor') || q.includes('deaf') || 
    q.includes('dialysis') || q.includes('दिव्यांग') || q.includes('विकलांग') || q.includes('దివ్యాంగుల') || 
    q.includes('దివ్యాంగ') || q.includes('సదరం') || q.includes('డయాలసిస్') || q.includes('ஊனமுற்றோர்') || q.includes('மாற்றுத்திறனாளி');

  const isAgri = q.includes('farmer') || q.includes('kisan') || q.includes('agriculture') || q.includes('crop') || 
    q.includes('cultivat') || q.includes('rythu') || q.includes('fasal') || q.includes('किसान') || q.includes('రైతు') || 
    q.includes('వ్యవసాయం') || q.includes('పంట') || q.includes('వివసాయం') || q.includes('விவசாயி') || q.includes('பயிர்');

  const isStudent = q.includes('student') || q.includes('scholarship') || q.includes('college') || q.includes('education') || 
    q.includes('school') || q.includes('fee') || q.includes('nmmss') || q.includes('usp') || q.includes('छात्र') || 
    q.includes('विद्यार्थी') || q.includes('విద్యార్థి') || q.includes('స్కాలర్‌షిప్') || q.includes('చదువు') || 
    q.includes('மாணவர்') || q.includes('கல்வி');

  const isWorker = q.includes('eshram') || q.includes('worker') || q.includes('labour') || q.includes('unorganised') || 
    q.includes('daily wage') || q.includes('shram') || q.includes('मजदूर') || q.includes('श्रमिक') || q.includes('ई-श्रम') || 
    q.includes('కార్మికుడు') || q.includes('శ్రామికుడు') || q.includes('కూలీ') || q.includes('ఈ-శ్రమ్') || 
    q.includes('தொழிலாளி') || q.includes('கூலி');

  const isSolar = q.includes('solar') || q.includes('surya') || q.includes('rooftop') || q.includes('electricity') || 
    q.includes('power') || q.includes('सौर') || q.includes('बिजली') || q.includes('సౌర') || q.includes('విద్యుత్') || 
    q.includes('సోలార్') || q.includes('சூரிய ஒளி') || q.includes('மின்சாரம்');

  const isHealth = q.includes('health') || q.includes('hospital') || q.includes('medical') || q.includes('ayushman') || 
    q.includes('treatment') || q.includes('illness') || q.includes('doctor') || q.includes('aarogya') || q.includes('स्वास्थ्य') || 
    q.includes('इलाज') || q.includes('ఆరోగ్య') || q.includes('వైద్య') || q.includes('చికిత్స') || q.includes('மருத்துவ') || q.includes('சிகிச்சை');

  // Handle Intent Branches

  // 1. TELANGANA STATE GOVERNMENT BRANCH
  if (isTelangana) {
    const tgRythu = findScheme('tg-rythu-bharosa');
    const tgAasara = findScheme('tg-aasara-cheyutha-pension');
    const tgAarogya = findScheme('tg-rajiv-aarogyasri');
    const tgMaha = findScheme('tg-mahalakshmi-scheme');
    const tgGruha = findScheme('tg-gruha-jyothi');

    if (tgRythu) matchedSchemes.push(tgRythu);
    if (tgAasara) matchedSchemes.push(tgAasara);
    if (tgAarogya) matchedSchemes.push(tgAarogya);
    if (tgMaha) matchedSchemes.push(tgMaha);
    if (tgGruha) matchedSchemes.push(tgGruha);

    if (language === 'te') {
      answerText = `తెలంగాణ రాష్ట్ర ప్రభుత్వం అమలు చేస్తున్న 5 ప్రధాన ప్రజా సంక్షేమ పథకాలు:\n\n1. **రైతు భరోసా / రైతు బంధు**: పట్టాదారు పాస్‌బుక్ ఉన్న రైతులకు ఎకరానికి ఏడాదికి **₹10,000 నుండి ₹15,000** వరకు పంట పెట్టుబడి సాయం (ఖరీఫ్, రబీ విడతలలో).\n\n2. **ఆసరా / చేయూత సామాజిక పింఛన్లు**: వృద్ధులు మరియు వితంతువులకు **నెలకు ₹2,016**; దివ్యాంగులకు **నెలకు ₹4,016** పింఛను.\n\n3. **రాజీవ్ ఆరోగ్యశ్రీ తెలంగాణ**: తెల్ల రేషన్ కార్డు కలిగిన కుటుంబాలకు ఏడాదికి **₹10,00,000 (₹10 లక్షలు)** వరకు ఉచిత నగదు రహిత ఆసుపత్రి చికిత్స.\n\n4. **మహాలక్ష్మి పథకం**: తెలంగాణ మహిళలు మరియు బాలికలకు టిజిఎస్‌ఆర్‌టిసి పల్లె వెలుగు, ఎక్స్‌ప్రెస్ బస్సులలో **100% ఉచిత ప్రయాణం** మరియు **₹500 కే గ్యాస్ సిలిండర్**.\n\n5. **గృహ జ్యోతి పథకం**: తెల్ల రేషన్ కార్డు గల గృహ వినియోగదారులకు నెలకు **200 యూనిట్ల వరకు ఉచిత విద్యుత్** (సున్నా బిల్లు).`;
      missingEvidence.push('మీ వద్ద తెలంగాణ ప్రభుత్వం జారీ చేసిన ఆహార భద్రతా కార్డు (Food Security Card / White Ration Card) ఉందా?');
      missingEvidence.push('రైతు పథకాలకు ధరణి (Dharani) పోర్టల్ ద్వారా జారీ చేసిన డిజిటల్ పట్టాదారు పాస్‌బుక్ ఉందా?');
      followUps.push('తెలంగాణ రైతు భరోసా కోసం దరఖాస్తు విధానం ఏమిటి?');
      followUps.push('ఆసరా దివ్యాంగుల పింఛనుకు సదరం (SADAREM) పత్రం అవసరమా?');
      followUps.push('గృహ జ్యోతి 200 యూనిట్ల ఉచిత విద్యుత్ మీటర్ లింకింగ్ ఎలా చేయాలి?');
    } else if (language === 'hi') {
      answerText = `तेलंगाना राज्य सरकार की 5 प्रमुख कल्याणकारी योजनाएं:\n\n1. **रैतु भरोसा (Rythu Bharosa)**: भूमिधारक किसानों को **₹10,000 से ₹15,000 प्रति एकड़ प्रति वर्ष** की सीधी मौसमी निवेश सहायता।\n\n2. **आसरा / चेयुता पेंशन**: बुजुर्गों और विधवाओं को **₹2,016/माह** तथा दिव्यांगजनों को **₹4,016/माह** की सामाजिक सुरक्षा पेंशन।\n\n3. **राजीव आरोग्यश्री तेलंगाना**: बीपीएल परिवारों को प्रति वर्ष **₹10 लाख तक** का निशुल्क कैशलेस अस्पताल इलाज।\n\n4. **महालक्ष्मी योजना**: महिलाओं और छात्राओं को टीजीएसआरटीसी बसों में **100% मुफ्त यात्रा** और **₹500 में घरेलू गैस सिलेंडर**।\n\n5. **गृह ज्योति योजना**: फूड सिक्योरिटी कार्ड धारक परिवारों को प्रति माह **200 यूनिट तक मुफ्त बिजली**।`;
      missingEvidence.push('क्या आपके पास तेलंगाना राज्य का वैध फूड सिक्योरिटी कार्ड (सफेद राशन कार्ड) है?');
      followUps.push('तेलंगाना किसान निवेश सहायता (रैतु भरोसा) के नियम क्या हैं?');
      followUps.push('महालक्ष्मी योजना के तहत ₹500 का गैस सिलेंडर कैसे प्राप्त करें?');
    } else if (language === 'ta') {
      answerText = `தெலுங்கானா மாநில அரசின் 5 முக்கிய நலத்திட்டங்கள்:\n\n1. **ரைத்து பரோசா**: விவசாயிகளுக்கு ஆண்டுக்கு ஏக்கருக்கு **₹10,000 முதல் ₹15,000 வரை** நேரடி முதலீட்டு உதவி.\n2. **ஆசரா ஓய்வூதியம்**: முதியோர்/விதவைகளுக்கு **மாதம் ₹2,016**, மாற்றுத்திறனாளிகளுக்கு **மாதம் ₹4,016** ஓய்வூதியம்.\n3. **ராஜீவ் ஆரோக்கியஸ்ரீ**: குடும்பத்திற்கு ஆண்டுக்கு **₹10 லட்சம் வரை** கட்டணமில்லா மருத்துவச் சிகிச்சை.\n4. **மகாலட்சுமி திட்டம்**: பெண்களுக்கு **இலவச அரசு பேருந்து பயணம்** மற்றும் **₹500 மானிய விலையில் காஸ் சிலிண்டர்**.\n5. **கிருக ஜோதி திட்டம்**: மாதம் **200 யூனிட் வரை இலவச வீட்டு மின்சாரம்**.`;
      missingEvidence.push('தெலுங்கானா உணவுப் பாதுகாப்பு அட்டை (White Card) உள்ளதா?');
      followUps.push('தெலுங்கானா ஓய்வூதியத் திட்டத்திற்கான ஆவணங்கள் என்ன?');
    } else {
      answerText = `Key flagship welfare guarantees administered by the **Government of Telangana**:\n\n1. **Rythu Bharosa / Rythu Bandhu**: Direct seasonal input assistance of **₹10,000 to ₹15,000 per acre per year** (₹5,000–₹7,500/acre per season via DBT) for landholding farmers registered on the Dharani portal.\n\n2. **Telangana Aasara / Cheyutha Pension**: Monthly dignified living pensions of **₹2,016/month** for elderly (57+) and widows, and **₹4,016/month** for Persons with Disabilities (PwD) with SADAREM certificate.\n\n3. **Rajiv Aarogyasri Telangana**: Enhanced health cover providing up to **₹10,00,000 (₹10 Lakhs)** per family per year in cashless hospitalization across 1,672 listed treatments.\n\n4. **Mahalakshmi Scheme**: **100% zero-fare bus travel** for women, girl students, and transgender residents on TGSRTC Palle Velugu & Express buses, plus **₹500 subsidized LPG cylinder** refills.\n\n5. **Gruha Jyothi Scheme**: Up to **200 units of free residential electricity** per month (zero bill) for domestic consumers holding Food Security Cards.`;
      missingEvidence.push('Do you possess a verified Telangana Food Security Card (White Ration Card)?');
      missingEvidence.push('For agricultural support, is your land title registered on the Dharani land records portal?');
      followUps.push('How to register for Telangana Rythu Bharosa input assistance?');
      followUps.push('What are the SADAREM requirements for Telangana Aasara PwD pension?');
      followUps.push('How to map consumer number for Gruha Jyothi 200 units free electricity?');
    }
  }

  // 2. TAMIL NADU STATE GOVERNMENT BRANCH
  else if (isTamilNadu) {
    const tnKmut = findScheme('tn-kmut-women-basic-income');
    const tnPudhumai = findScheme('tn-pudhumai-penn');
    const tnCmchis = findScheme('tn-cmchis-health');
    const tnDis = findScheme('tn-differently-abled-pension');
    const tnNaan = findScheme('tn-naan-mudhalvan');

    if (tnKmut) matchedSchemes.push(tnKmut);
    if (tnPudhumai) matchedSchemes.push(tnPudhumai);
    if (tnCmchis) matchedSchemes.push(tnCmchis);
    if (tnDis) matchedSchemes.push(tnDis);
    if (tnNaan) matchedSchemes.push(tnNaan);

    if (language === 'ta') {
      answerText = `தமிழ்நாடு அரசு செயல்படுத்தும் 5 முக்கிய மக்கள் நலத்திட்டங்கள்:\n\n1. **கலைஞர் மகளிர் உரிமைத் திட்டம் (KMUT)**: தகுதியான குடும்பத் தலைவிகளுக்கு மாதம் **₹1,000 (ஆண்டுக்கு ₹12,000)** நேரடி வங்கிக் கணக்கில் வரவு வைக்கப்படும் அடிப்படை உரிமைத் தொகை.\n\n2. **புதுமைப் பெண் திட்டம்**: அரசுப் பள்ளிகளில் 6 முதல் 12-ம் வகுப்பு வரை படித்து கல்லூரி/டிப்ளமோ சேரும் மாணவிகளுக்கு பட்டப்படிப்பு முடியும் வரை மாதம் **₹1,000** உதவித்தொகை.\n\n3. **முதலமைச்சரின் விரிவான மருத்துவக் காப்பீட்டுத் திட்டம் (CMCHIS)**: குடும்பத்திற்கு ஆண்டுக்கு **₹5,00,000 வரை** 1,090-க்கும் மேற்பட்ட சிகிச்சைகளுக்கு கட்டணமில்லா மருத்துவக் காப்பீடு.\n\n4. **மாற்றுத்திறனாளிகள் பராமரிப்பு உதவித்தொகை**: 60% அல்லது அதற்கு மேற்பட்ட குறைபாடுடைய மாற்றுத்திறனாளிகளுக்கு மாதம் **₹2,000** பராமரிப்பு ஓய்வூதியம்.\n\n5. **நான் முதல்வன் திட்டம்**: கல்லூரி மாணவர்களுக்கு அதிநவீன தொழில்நுட்பங்கள் (AI, Robotics, Cloud) சார்ந்த **100% இலவச திறன் பயிற்சிகள் மற்றும் வேலைவாய்ப்பு முகாம்கள்**.`;
      missingEvidence.push('தமிழ்நாடு அரசின் ஸ்மார்ட் குடும்ப அட்டை (Smart Ration Card) உள்ளதா?');
      missingEvidence.push('KMUT திட்டத்திற்கு குடும்ப ஆண்டு வருமானம் ₹2.5 லட்சத்திற்குள் உள்ளதா?');
      followUps.push('கலைஞர் மகளிர் உரிமைத் திட்டத்திற்கு எவ்வாறு விண்ணப்பிப்பது?');
      followUps.push('புதுமைப் பெண் திட்டத்திற்கான EMIS எண் சரிபார்ப்பு எப்படி?');
      followUps.push('முதலமைச்சர் மருத்துவக் காப்பீட்டு அட்டை பெறுவது எப்படி?');
    } else if (language === 'te') {
      answerText = `తమిళనాడు రాష్ట్ర ప్రభుత్వం అమలు చేస్తున్న 5 ముఖ్య సంక్షేమ పథకాలు:\n\n1. **కలైంజర్ మహిళా హక్కు పథకం (KMUT)**: అర్హులైన మహిళా కుటుంబ పెద్దలకు నెలకు **₹1,000 (ఏడాదికి ₹12,000)** నేరుగా బ్యాంక్ ఖాతాలో జమ అయ్యే ప్రాథమిక ఆదాయం.\n\n2. **పుదుమై పెణ్ పథకం**: ప్రభుత్వ పాఠశాలల్లో 6 నుండి 12వ తరగతి వరకు చదివి ఉన్నత విద్యను అభ్యసిస్తున్న బాలికలకు డిగ్రీ పూర్తయ్యే వరకు నెలకు **₹1,000** ఆర్థిక సాయం.\n\n3. **ముఖ్యమంత్రి సమగ్ర ఆరోగ్య బీమా (CMCHIS)**: కుటుంబానికి ఏడాదికి **₹5,00,000 వరకు** ఉచిత నగదు రహిత ఆసుపత్రి చికిత్స.\n\n4. **దివ్యాంగుల నిర్వహణ భత్యం**: 60%+ తీవ్ర వైకల్యం ఉన్నవారికి నెలకు **₹2,000** ప్రత్యేక పింఛను.\n\n5. **నాన్ ముదల్వన్ పథకం**: కాలేజీ విద్యార్థుల కోసం ఉచిత అంతర్జాతీయ సాంకేతిక నైపుణ్య శిక్షణ మరియు క్యాంపస్ ప్లేస్‌మెంట్లు.`;
      missingEvidence.push('మీ వద్ద తమిళనాడు స్మార్ట్ రేషన్ కార్డు ఉందా?');
      followUps.push('తమిళనాడు పుదుమై పెణ్ పథకం వివరాలు ఏమిటి?');
      followUps.push('తమిళనాడు మహిళల ₹1,000 బేసిక్ ఇన్‌కమ్ నిబంధనలు ఏమిటి?');
    } else if (language === 'hi') {
      answerText = `तमिलनाडु राज्य सरकार की 5 प्रमुख कल्याणकारी योजनाएं:\n\n1. **कलैग्नार महिला अधिकार योजना (KMUT)**: पात्र महिला मुखियाओं को **₹1,000 प्रतिमाह (₹12,000/वर्ष)** की सीधी मूल आय सहायता डीबीटी द्वारा।\n\n2. **पुदुमई पेन योजना**: सरकारी स्कूलों से 6-12वीं उत्तीर्ण छात्राओं को कॉलेज स्नातक तक **₹1,000 प्रतिमाह** की उच्च शिक्षा प्रोत्साहन राशि।\n\n3. **मुख्यमंत्री समग्र स्वास्थ्य बीमा (CMCHIS)**: प्रति परिवार प्रति वर्ष **₹5 लाख तक** का कैशलेस अस्पताल इलाज।\n\n4. **दिव्यांगजन भरण-पोषण भत्ता**: 60%+ गंभीर दिव्यांग नागरिकों को **₹2,000 प्रतिमाह** की पेंशन।\n\n5. **नान मुधलवन योजना**: कॉलेज छात्रों के लिए एआई और आधुनिक तकनीकों में निशुल्क कौशल प्रशिक्षण व कैंपस प्लेसमेंट।`;
      missingEvidence.push('क्या आपके पास तमिलनाडु का स्मार्ट फैमिली कार्ड (राशन कार्ड) है?');
      followUps.push('तमिलनाडु पुदुमई पेन योजना के लिए आवेदन कैसे करें?');
      followUps.push('कलैग्नार महिला अधिकार योजना की पात्रता शर्तें क्या हैं?');
    } else {
      answerText = `Key flagship welfare initiatives administered by the **Government of Tamil Nadu**:\n\n1. **Kalaignar Magalir Urimai Thittam (KMUT)**: Direct monthly basic income assistance of **₹1,000 per month (₹12,000/year)** transferred via DBT directly into the bank accounts of over 1.15 crore eligible women heads of low-income families.\n\n2. **Moovalur Ramamirtham Ammaiyar Higher Education Assurance (Pudhumai Penn)**: Financial stipend of **₹1,000 per month** throughout undergraduate degree or diploma studies for girl students who studied Classes 6 to 12 in Tamil Nadu government schools.\n\n3. **Chief Minister\\'s Comprehensive Health Insurance Scheme (CMCHIS)**: Cashless hospitalization coverage up to **₹5,00,000 (₹5 Lakhs)** per family per year across 1,090+ procedures in 1,600+ network hospitals.\n\n4. **Tamil Nadu Differently Abled Welfare Maintenance Allowance**: Monthly assistance of **₹2,000 per month** for severely differently-abled persons (disability ≥60% or intellectual disability) with verified UDID.\n\n5. **Naan Mudhalvan Skill Development Scheme**: Free industry-standard technical training, AI/tech certifications, and structured campus recruitment drives for college students.`;
      missingEvidence.push('Do you hold an active Tamil Nadu Smart Family Card (Ration Card)?');
      missingEvidence.push('For KMUT, is your annual family income within ₹2.50 Lakh with electricity consumption <3,600 units/year?');
      followUps.push('How to apply for Kalaignar Magalir Urimai Thittam (KMUT)?');
      followUps.push('What are the school study verification steps for Pudhumai Penn?');
      followUps.push('How to enroll for CMCHIS smart health card?');
    }
  }

  // 3. ANDHRA PRADESH STATE GOVERNMENT BRANCH
  else if (isAndhra) {
    const apDis = findScheme('ap-ntr-bharosa-disability');
    const apFarm = findScheme('ap-annadata-sukhibhava');
    const apSchool = findScheme('ap-thalliki-vandanam');
    const apHealth = findScheme('ap-ntr-aarogyasri');
    const apDwcra = findScheme('ap-dwcra-cheyutha');
    if (apDis) matchedSchemes.push(apDis);
    if (apFarm) matchedSchemes.push(apFarm);
    if (apSchool) matchedSchemes.push(apSchool);
    if (apHealth) matchedSchemes.push(apHealth);
    if (apDwcra) matchedSchemes.push(apDwcra);

    if (language === 'hi') {
      answerText = `आंध्र प्रदेश सरकार की पांच प्रमुख कल्याणकारी योजनाएं:\n\n1. **एनटीआर भरोसा सामाजिक सुरक्षा पेंशन**: वृद्धों/विधवाओं को ₹4,000/माह, दिव्यांगों को ₹6,000 से ₹15,000/माह।\n2. **तल्लिकी वंदनम**: कक्षा 1 से 12 तक पढ़ने वाले प्रत्येक बच्चे की माँ को **₹15,000 प्रति वर्ष** की सीधी सहायता।\n3. **अन्नदाता सुखीभव**: किसानों और पट्टेदार किसानों (CCRC) को **₹20,000 प्रति वर्ष** (₹14,000 राज्य + ₹6,000 पीएम-किसान)।\n4. **डॉ. एनटीआर आरोग्यश्री**: पात्र परिवारों को **₹25,00,000 प्रति वर्ष** तक का कैशलेस इलाज।\n5. **वाईएसआर / एपी चेयुता (DWCRA)**: 45-60 वर्ष की महिलाओं को आजीविका हेतु **₹18,750 प्रति वर्ष** (कुल ₹75,000)।`;
      missingEvidence.push('क्या आपके पास आंध्र प्रदेश का सफेद राशन कार्ड या चावल कार्ड (Rice Card) है?');
      missingEvidence.push('क्या आपका परिवार आंध्र प्रदेश ग्राम या वार्ड सचिवालय में पंजीकृत है?');
      followUps.push('ग्राम सचिवालय में तल्लिकी वंदनम की स्थिति कैसे जांचें?');
      followUps.push('अन्नदाता सुखीभव के लिए पट्टेदार किसान (CCRC) कार्ड कैसे बनवाएं?');
      followUps.push('डॉ. एनटीआर आरोग्यश्री से संबद्ध अस्पतालों की सूची');
    } else if (language === 'te') {
      answerText = `ఆంధ్రప్రదేశ్ రాష్ట్ర ప్రభుత్వం అమలు చేస్తున్న 5 ప్రముఖ సంక్షేమ పథకాలు:\n\n1. **ఎన్టీఆర్ భరోసా సామాజిక పింఛన్లు**: వృద్ధులు, వితంతువులకు **₹4,000/నెల**; దివ్యాంగులకు **₹6,000 నుండి ₹15,000/నెల**.\n2. **తల్లికి వందనం**: 1 నుండి 12వ తరగతి వరకు చదువుతున్న ప్రతి బిడ్డకు తల్లి ఖాతాలో ఏడాదికి **₹15,000**.\n3. **అన్నదాత సుఖీభవ**: అర్హులైన రైతులకు మరియు కౌలు రైతులకు (CCRC) ఏడాదికి **₹20,000** పెట్టుబడి సాయం (రాష్ట్రం ₹14,000 + పీఎం-కిసాన్ ₹6,000).\n4. **డా. ఎన్టీఆర్ ఆరోగ్యశ్రీ**: తెల్ల రేషన్ కార్డు ఉన్న కుటుంబాలకు ఏడాదికి **₹25 లక్షల వరకు ఉచిత నగదు రహిత చికిత్స**.\n5. **వైఎస్సార్ / ఏపీ చేయూత (DWCRA)**: 45-60 ఏళ్ల మహిళలకు జీవనోపాధి కోసం ఏడాదికి **₹18,750 (4 ఏళ్లలో ₹75,000)**.`;
      missingEvidence.push('నిర్ధారణ అవసరం: మీ కుటుంబానికి ఆంధ్రప్రదేశ్ ప్రభుత్వం జారీ చేసిన రైస్ కార్డ్ (White Ration Card) ఉందా?');
      missingEvidence.push('మీరు సమీప గ్రామ లేదా వార్డు సచివాలయాన్ని సంప్రదించారా?');
      followUps.push('గ్రామ సచివాలయంలో తల్లికి వందనం లబ్ధిదారుల జాబితా ఎలా చూడాలి?');
      followUps.push('కౌలు రైతులకు అన్నదాత సుఖీభవ వర్తిస్తుందా?');
      followUps.push('డా. ఎన్టీఆర్ ఆరోగ్యశ్రీ కింద ఏయే చికిత్సలు ఉచితం?');
    } else if (language === 'ta') {
      answerText = `ஆந்திரப் பிரதேச மாநிலத்தின் 5 முக்கிய நலத்திட்டங்கள்:\n\n1. **என்டிஆர் பரோசா ஓய்வூதியம்**: முதியோர்/விதவைகளுக்கு ₹4,00/மாதம், மாற்றுத்திறனாளிகளுக்கு ₹6,000 - ₹15,000/மாதம்.\n2. **தல்லிகி வந்தனம்**: பள்ளி செல்லும் குழந்தையின் தாய்க்கு ஆண்டுக்கு **₹15,000** நிதியுதவி.\n3. **அன்னதாதா சுகீபவா**: விவசாயிகளுக்கு ஆண்டுக்கு **₹20,000** முதலீட்டு உதவி.\n4. **டாக்டர் என்டிஆர் ஆரோக்கியஸ்ரீ**: குடும்பத்திற்கு ஆண்டுக்கு **₹25 லட்சம் வரை** கட்டணமில்லா மருத்துவச் சிகிச்சை.\n5. **ஆந்திரா செய்யூதா**: பெண்களுக்கு ஆண்டுக்கு **₹18,750** வாழ்வாதார நிதியுதவி.`;
      missingEvidence.push('ஆந்திராவின் அரிசி அட்டை (Rice Card) உள்ளதா?');
      followUps.push('கிராம செயலகத்தில் எவ்வாறு பதிவு செய்வது?');
    } else {
      answerText = `Key flagship government schemes of **Andhra Pradesh**:\n\n1. **NTR Bharosa Social Security Pension**: ₹4,000/month for Old Age & Widows; ₹6,000 to ₹15,000/month for Persons with Disabilities depending on severity.\n\n2. **Thalliki Vandanam**: Direct transfer of **₹15,000 per year per school-going child** (Class 1–12) into the verified mother\\'s bank account, subject to 75% school attendance.\n\n3. **Annadata Sukhibhava**: Total farmer investment support of **₹20,000 per year** (combining ₹14,000 AP State Assistance + ₹6,000 PM-KISAN), inclusive of certified tenant farmers holding CCRC.\n\n4. **Dr. NTR Aarogyasri**: Comprehensive cashless hospitalization up to **₹25 Lakhs per family per year** across 3,257 listed secondary and tertiary procedures for BPL Rice Card holders.\n\n5. **YSR / AP Cheyutha (DWCRA Women Livelihoods)**: Direct assistance of **₹18,750 per year** (total ₹75,000 across 4 years) for women aged 45–60 from SC, ST, BC, and minority communities for sustainable livelihood ventures.`;
      missingEvidence.push('Do you possess an active Andhra Pradesh Rice Card / BPL Food Security Card?');
      missingEvidence.push('Is your household mapped to your local Village/Ward Secretariat (Grama/Ward Sachivalayam)?');
      followUps.push('How to apply for Thalliki Vandanam at Grama Sachivalayam?');
      followUps.push('How can tenant farmers register with CCRC for Annadata Sukhibhava?');
      followUps.push('Check Dr. NTR Aarogyasri hospital network and coverage');
    }
  }

  // 4. ANY OTHER INDIAN STATE OR UNION TERRITORY BRANCH (28 States & 8 UTs)
  else if (otherGov) {
    const govSchemes = SCHEMES.filter(s => s.stateCode === otherGov.stateCode);
    govSchemes.forEach(s => matchedSchemes.push(s));

    const isUT = otherGov.jurisdictionType === 'union-territory';
    const govTypeLabel = isUT ? 'Union Territory' : 'State';

    answerText = `Key flagship welfare programs administered by the **${otherGov.name}** (${govTypeLabel} Portal, Capital: ${otherGov.capitalCity}):\n\n` +
      govSchemes.map((s, idx) => 
        `${idx + 1}. **${s.name}**\n   • **Official Statutory Benefit**: **${s.financialBenefit}**\n   • **Target Beneficiaries**: ${s.beneficiaries.join(', ')}\n   • **Essential Documents**: ${s.requiredDocuments.slice(0, 3).join(', ')}\n   • **Summary**: ${s.shortSummary}`
      ).join('\n\n') +
      `\n\nOfficial Portal: [${otherGov.officialPortalName}](${otherGov.officialPortalUrl}) • Citizen Helpline: **${otherGov.helpline}**`;

    missingEvidence.push(`Do you hold permanent residency or domicile proof for ${otherGov.name}?`);
    missingEvidence.push(`Do you have an active state ration card or income certificate issued in ${otherGov.name}?`);
    followUps.push(`What are the documents needed for ${govSchemes[0]?.name || otherGov.name}?`);
    followUps.push(`Visit official portal for ${otherGov.name}`);
    followUps.push(`Show Central Government schemes also available in ${otherGov.name}`);
  }

  // 4. DISABILITY / PwD INTENT
  else if (isDisability) {
    const apDis = findScheme('ap-ntr-bharosa-disability');
    const tgAasara = findScheme('tg-aasara-cheyutha-pension');
    const tnDis = findScheme('tn-differently-abled-pension');
    const adip = findScheme('adip-scheme');
    const igndps = findScheme('igndps-disability-pension');

    if (apDis) matchedSchemes.push(apDis);
    if (tgAasara) matchedSchemes.push(tgAasara);
    if (tnDis) matchedSchemes.push(tnDis);
    if (adip) matchedSchemes.push(adip);
    if (igndps) matchedSchemes.push(igndps);

    if (language === 'te') {
      answerText = `దివ్యాంగుల (PwD) కోసం కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ పథకాలు:\n\n• **ఆంధ్రప్రదేశ్ ఎన్టీఆర్ భరోసా**: 40-79% వారికి **₹6,000/నెల**, తీవ్ర వైకల్యం ఉన్నవారికి **₹15,000/నెల**, డయాలసిస్ వారికి **₹10,000/నెల**.\n• **తెలంగాణ ఆసరా / చేయూత**: 40%+ వైకల్యం ఉన్నవారికి **₹4,016/నెల**.\n• **తమిళనాడు నిర్వహణ భత్యం**: 60%+ వైకల్యం ఉన్నవారికి **₹2,000/నెల**.\n• **కేంద్ర ప్రభుత్వ ఏడీఐపీ (ADIP)**: ఉచిత మోటరైజ్డ్ ట్రైసైకిల్స్, వీల్‌చైర్లు, కృత్రిమ అవయవాలు.\n• **ఇందిరా గాంధీ జాతీయ పెన్షన్ (IGNDPS)**: 80%+ తీవ్ర వైకల్యం గల బీపీఎల్ పౌరులకు కేంద్ర పింఛను.`;
      missingEvidence.push('మీ వద్ద సదరం (SADAREM) లేదా యూడీఐడీ (UDID) ద్వారా జారీ చేసిన కనీసం 40% వైకల్య ధృవీకరణ పత్రం ఉందా?');
      followUps.push('సదరం (SADAREM) స్లాట్ ఎలా బుక్ చేసుకోవాలి?');
      followUps.push('ఏడీఐపీ పథకం కింద ఉచిత ట్రైసైకిల్ ఎలా పొందాలి?');
    } else if (language === 'ta') {
      answerText = `மாற்றுத்திறனாளிகளுக்கான (PwD) அரசு திட்டங்கள்:\n\n• **தமிழ்நாடு அரசு**: 60%+ குறைபாடுள்ளவர்களுக்கு **மாதம் ₹2,000** பராமரிப்பு உதவித்தொகை.\n• **தெலுங்கானா ஆசரா**: 40%+ குறைபாடுள்ளவர்களுக்கு **மாதம் ₹4,016** ஓய்வூதியம்.\n• **ஆந்திரா என்டிஆர் பரோசா**: **மாதம் ₹6,000 முதல் ₹15,000 வரை** ஓய்வூதியம்.\n• **மத்திய அரசு ஏடிஐபி (ADIP)**: இலவச சக்கர நாற்காலி, மோட்டார் பொருத்தப்பட்ட மூன்று சக்கர வண்டி மற்றும் உபகரணங்கள்.`;
      missingEvidence.push('உங்களிடம் 40% அல்லது அதற்கு மேற்பட்ட UDID மாற்றுத்திறனாளி அட்டை உள்ளதா?');
      followUps.push('UDID அட்டைக்கு எவ்வாறு விண்ணப்பிப்பது?');
    } else {
      answerText = `Statutory welfare provisions for Persons with Disabilities (PwD) across governments:\n\n• **Central ADIP Scheme**: 100% grant for motorized tricycles, wheelchairs, and prosthetics for income ≤₹22,500/month.\n• **Andhra Pradesh NTR Bharosa**: **₹6,000/month** for 40-79% disability; **₹15,000/month** for severe/bedridden 80%+; **₹10,000/month** for dialysis.\n• **Telangana Aasara / Cheyutha**: **₹4,016/month** for certified PwD with SADAREM ≥40%.\n• **Tamil Nadu Maintenance Allowance**: **₹2,000/month** for severe disability (≥60%) via DBT.\n• **Central IGNDPS**: Monthly central pension for BPL citizens aged 18–79 with severe disability.`;
      missingEvidence.push('Do you possess a verified UDID Smart Card or state disability certificate (SADAREM) showing ≥40% disability?');
      followUps.push('How to book a SADAREM / UDID medical board assessment?');
      followUps.push('What are the documents needed for state disability pensions?');
    }
  }

  // 5. SOLAR & CLEAN ENERGY INTENT
  else if (isSolar) {
    const solar = findScheme('pm-surya-ghar');
    const tgGruha = findScheme('tg-gruha-jyothi');
    if (solar) matchedSchemes.push(solar);
    if (tgGruha) matchedSchemes.push(tgGruha);

    answerText = `Clean energy and electricity support initiatives:\n\n1. **PM Surya Ghar: Muft Bijli Yojana (Central)**: Up to **₹78,000 direct central subsidy** for 3 kW+ rooftop solar systems and 300 units of free power monthly.\n\n2. **Telangana Gruha Jyothi Scheme (Telangana)**: **Zero electricity bill** for domestic consumption up to 200 units/month for Food Security Card holders.`;
    missingEvidence.push('Do you have an active residential electricity connection in your own name?');
    followUps.push('How to apply on pmsuryaghar.gov.in?');
    followUps.push('How to link FSC for Telangana Gruha Jyothi?');
  }

  // 6. AGRICULTURE & FARMING INTENT
  else if (isAgri) {
    const pmkisan = findScheme('pm-kisan');
    const apFarm = findScheme('ap-annadata-sukhibhava');
    const tgFarm = findScheme('tg-rythu-bharosa');
    const pmfby = findScheme('pmfby-crop-insurance');

    if (pmkisan) matchedSchemes.push(pmkisan);
    if (apFarm) matchedSchemes.push(apFarm);
    if (tgFarm) matchedSchemes.push(tgFarm);
    if (pmfby) matchedSchemes.push(pmfby);

    answerText = `Agricultural support programs across Central and State Governments:\n\n1. **PM-KISAN (Central)**: **₹6,000 per year** in three 4-monthly installments of ₹2,000 via DBT across India.\n\n2. **AP Annadata Sukhibhava (Andhra Pradesh)**: **₹20,000 per year** (₹14,000 AP State + ₹6,000 PM-KISAN) for landowners and CCRC tenant farmers.\n\n3. **Telangana Rythu Bharosa (Telangana)**: **₹10,000 to ₹15,000 per acre per year** (₹5,000–₹7,500/acre/season) direct investment assistance.\n\n4. **PMFBY (Central & States)**: Comprehensive crop insurance at nominal premiums (1.5% Rabi, 2% Kharif).`;
    missingEvidence.push('Do you possess a computerised land record (RoR / Dharani Passbook / 1B)?');
    followUps.push('What are the documents needed for PM-KISAN?');
    followUps.push('How to register tenant farmers for Annadata Sukhibhava?');
    followUps.push('How is Rythu Bharosa calculated per acre in Telangana?');
  }

  // 7. EDUCATION & SCHOLARSHIPS INTENT
  else if (isStudent) {
    const postMatric = findScheme('nsp-post-matric');
    const tnPudhumai = findScheme('tn-pudhumai-penn');
    const apThalliki = findScheme('ap-thalliki-vandanam');
    const nmmss = findScheme('nmmss-scholarship');
    const tnNaan = findScheme('tn-naan-mudhalvan');

    if (postMatric) matchedSchemes.push(postMatric);
    if (tnPudhumai) matchedSchemes.push(tnPudhumai);
    if (apThalliki) matchedSchemes.push(apThalliki);
    if (nmmss) matchedSchemes.push(nmmss);
    if (tnNaan) matchedSchemes.push(tnNaan);

    answerText = `Higher education and scholarship programs:\n\n1. **Post-Matric Scholarship (Central/State)**: **100% tuition fee reimbursement** plus maintenance allowance for SC/ST/OBC students.\n\n2. **Tamil Nadu Pudhumai Penn (Tamil Nadu)**: **₹1,000 per month** throughout college/diploma for government school girl students.\n\n3. **AP Thalliki Vandanam (Andhra Pradesh)**: **₹15,000 per year** to mothers of school students (Classes 1–12).\n\n4. **Naan Mudhalvan (Tamil Nadu)**: Free technical certifications in AI/data and campus placements for college students.\n\n5. **NMMSS Scholarship (Central)**: **₹12,000 per year** (Classes 9–12) for meritorious government school students.`;
    missingEvidence.push('What is your current course and social category (SC, ST, OBC, or General)?');
    missingEvidence.push('Do you have an active income certificate issued within the past 12 months?');
    followUps.push('How to apply on National Scholarship Portal (NSP)?');
    followUps.push('What are the eligibility criteria for Tamil Nadu Pudhumai Penn?');
  }

  // 8. HEALTHCARE & WELLNESS INTENT
  else if (isHealth) {
    const pmjay = findScheme('pm-jay');
    const apAarogya = findScheme('ap-ntr-aarogyasri');
    const tgAarogya = findScheme('tg-rajiv-aarogyasri');
    const tnCmchis = findScheme('tn-cmchis-health');
    const pmjaySr = findScheme('pmjay-senior-70');

    if (pmjay) matchedSchemes.push(pmjay);
    if (apAarogya) matchedSchemes.push(apAarogya);
    if (tgAarogya) matchedSchemes.push(tgAarogya);
    if (tnCmchis) matchedSchemes.push(tnCmchis);
    if (pmjaySr) matchedSchemes.push(pmjaySr);

    answerText = `Comprehensive public healthcare coverage across governments:\n\n1. **Ayushman Bharat PM-JAY (Central)**: **₹5,00,000 per family per year** cashless cover across 28,000+ hospitals (with universal ₹5L for all seniors aged 70+).\n\n2. **AP Dr. NTR Aarogyasri (Andhra Pradesh)**: **₹25,00,000 per family per year** cashless treatment across 3,257 secondary and tertiary procedures.\n\n3. **Rajiv Aarogyasri Telangana (Telangana)**: **₹10,00,000 per family per year** cashless hospital care for BPL White Card holders.\n\n4. **Tamil Nadu CMCHIS (Tamil Nadu)**: **₹5,00,000 per family per year** cashless cover across 1,090+ procedures.`;
    missingEvidence.push('Do you possess an active state Food Security Card, Rice Card, or PM-JAY Ayushman Card?');
    followUps.push('Which hospitals accept Dr. NTR Aarogyasri or Rajiv Aarogyasri?');
    followUps.push('How do seniors aged 70+ get universal Ayushman cards?');
  }

  // 9. UNORGANISED WORKERS & PENSIONS
  else if (isWorker) {
    const eshram = findScheme('eshram-worker-card');
    const pmsym = findScheme('pmsym-worker-pension');
    if (eshram) matchedSchemes.push(eshram);
    if (pmsym) matchedSchemes.push(pmsym);

    answerText = `Social security frameworks for unorganised workers:\n\n1. **e-Shram Card (Central)**: 12-digit Universal Account Number (UAN), ₹2 Lakh accidental insurance, and welfare portal portability.\n\n2. **PM-SYM Pension (Central)**: Guaranteed lifelong pension of **₹3,000 per month** upon age 60 for unorganised workers earning ≤₹15,000/month.`;
    missingEvidence.push('Are you un-enrolled in EPFO or ESIC formal frameworks?');
    followUps.push('How to register for e-Shram card?');
    followUps.push('What are the contribution slabs for PM-SYM?');
  }

  // 10. DEFAULT / GENERAL DISCOVERY (All 37 Jurisdictions & 205 Schemes)
  else {
    const sampleCentral = findScheme('pm-jay');
    const sampleAP = findScheme('ap-ntr-bharosa-disability');
    const sampleTG = findScheme('tg-rythu-bharosa');
    const sampleTN = findScheme('tn-kmut-women-basic-income');
    const sampleMH = findScheme('mh-mukhyamantri-majhi-ladki-bahin');
    const sampleDL = findScheme('dl-delhi-ladli-scheme');

    if (sampleCentral) matchedSchemes.push(sampleCentral);
    if (sampleAP) matchedSchemes.push(sampleAP);
    if (sampleTG) matchedSchemes.push(sampleTG);
    if (sampleTN) matchedSchemes.push(sampleTN);
    if (sampleMH) matchedSchemes.push(sampleMH);
    if (sampleDL) matchedSchemes.push(sampleDL);

    answerText = `CivicAI helps you discover and navigate India\\'s **${SCHEMES.length} verified public welfare schemes** across all 37 government jurisdictions:\n\n• **Central Government (Government of India)**: 25 Flagship national schemes (PM-KISAN, Ayushman Bharat, PM-MUDRA, PM Surya Ghar, etc.)\n• **28 State Governments**: 140 State-administered welfare programs (5 verified schemes each across Andhra Pradesh, Telangana, Tamil Nadu, Maharashtra, Uttar Pradesh, Bihar, Karnataka, West Bengal, and all 28 states)\n• **8 Union Territories**: 40 Union Territory welfare programs (5 verified schemes each across Delhi, Jammu & Kashmir, Ladakh, Puducherry, Chandigarh, Andaman & Nicobar, Dadra & Nagar Haveli and Daman & Diu, and Lakshadweep)\n\nWhich government portal, state, or welfare category would you like to explore?`;

    missingEvidence.push('Your target government or state/UT residence (e.g. Central, Andhra Pradesh, Telangana, Tamil Nadu, Delhi, Maharashtra, Bihar, etc.)');
    missingEvidence.push('Your primary citizen category (Student, Farmer, Woman, PwD, Worker, Senior Citizen, Artisan)');
    followUps.push('Tell me about schemes in Delhi');
    followUps.push('What schemes are available in Maharashtra?');
    followUps.push('Show me Telangana Rythu Bharosa and Aasara pensions');
    followUps.push('How does Central PM Surya Ghar rooftop solar subsidy work?');
  }

  const citations = matchedSchemes.map(s => ({
    name: `${s.administeringGovernment} • ${s.officialSource.name}`,
    url: s.officialSource.url,
    lastVerifiedDate: s.officialSource.lastVerifiedDate
  }));

  return {
    id: `msg-${Date.now()}`,
    sender: 'assistant',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    text: answerText,
    isDemonstrationMode: true,
    matchedSchemes,
    missingEvidenceNotes: missingEvidence,
    suggestedFollowUps: followUps,
    citations
  };
}

import type { Scheme } from '../types/scheme';
import { SCHEMES } from '../data/schemes';
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
  language: LanguageCode = 'en'
): Promise<AssistantMessage> {
  // Attempt backend API if accessible
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // quick check

    const response = await fetch('/api/assistant/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, language }),
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
  return generateLocalDemonstrationResponse(query, language);
}

function findScheme(id: string): Scheme | undefined {
  return SCHEMES.find(s => s.id === id);
}

function generateLocalDemonstrationResponse(query: string, language: LanguageCode = 'en'): AssistantMessage {
  const q = query.toLowerCase();
  const matchedSchemes: Scheme[] = [];
  let answerText = '';
  const missingEvidence: string[] = [];
  const followUps: string[] = [];

  // Categorical intent detection across English, Hindi, Telugu, and Tamil
  const isDisability = q.includes('disab') || q.includes('pwd') || q.includes('handicap') || q.includes('sadarem') || 
    q.includes('udid') || q.includes('divyang') || q.includes('blind') || q.includes('locomotor') || q.includes('deaf') || 
    q.includes('dialysis') || q.includes('दिव्यांग') || q.includes('विकलांग') || q.includes('దివ్యాంగుల') || 
    q.includes('దివ్యాంగ') || q.includes('సదరం') || q.includes('డయాలసిస్') || q.includes('ஊனமுற்றோர்') || q.includes('மாற்றுத்திறனாளி');

  const isAndhra = q.includes('andhra') || q.includes('amaravati') || q.includes('ntr bharosa') || 
    q.includes('thalliki') || q.includes('sukhibhava') || q.includes('aarogyasri') || q.includes('ఆంధ్రప్రదేశ్') || 
    q.includes('ఆంధ్ర') || q.includes('భరోసా') || q.includes('తల్లికి వందనం') || q.includes('అన్నదాత సుఖీభవ') || 
    q.includes('ఆరోగ్యశ్రీ') || q.includes('ஆந்திர');

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

  const isUnemployed = q.includes('unemploy') || q.includes('job') || q.includes('skill') || q.includes('training') || 
    q.includes('pmkvy') || q.includes('ncs') || q.includes('rozgar') || q.includes('रोजगार') || q.includes('कौशल') || 
    q.includes('శిక్షణ') || q.includes('ఉద్యోగం') || q.includes('నిరుద్యోగి') || q.includes('வேலைவாய்ப்பு') || q.includes('பயிற்சி');

  const isSolar = q.includes('solar') || q.includes('surya') || q.includes('rooftop') || q.includes('electricity') || 
    q.includes('power') || q.includes('सौर') || q.includes('बिजली') || q.includes('సౌర') || q.includes('విద్యుత్') || 
    q.includes('సోలార్') || q.includes('சூரிய ஒளி') || q.includes('மின்சாரம்');

  const isNutrition = q.includes('poshan') || q.includes('anganwadi') || q.includes('ration') || q.includes('foodgrain') || 
    q.includes('vatsalya') || q.includes('nutrition') || q.includes('पोषण') || q.includes('आंगनवाड़ी') || q.includes('అంగన్‌వాడీ') || 
    q.includes('పోషణ') || q.includes('రేషన్') || q.includes('அங்கன்வாடி') || q.includes('ஊட்டச்சத்து');

  const isHealth = q.includes('health') || q.includes('hospital') || q.includes('medical') || q.includes('ayushman') || 
    q.includes('treatment') || q.includes('illness') || q.includes('doctor') || q.includes('aarogya') || q.includes('स्वास्थ्य') || 
    q.includes('इलाज') || q.includes('ఆరోగ్య') || q.includes('వైద్య') || q.includes('చికిత్స') || q.includes('மருத்துவ') || q.includes('சிகிச்சை');

  const isMaternity = q.includes('pregnant') || q.includes('mother') || q.includes('maternity') || q.includes('baby') || 
    q.includes('child') || q.includes('delivery') || q.includes('sukanya') || q.includes('गर्भवती') || q.includes('मातृ') || 
    q.includes('గర్భిణీ') || q.includes('తల్లి') || q.includes('బాలింత') || q.includes('கர்ப்பிணி') || q.includes('மகப்பேறு');

  const isArtisan = q.includes('artisan') || q.includes('carpenter') || q.includes('blacksmith') || q.includes('potter') || 
    q.includes('craft') || q.includes('tailor') || q.includes('vishwakarma') || q.includes('कारीगर') || q.includes('विश्वकर्मा') || 
    q.includes('చేతివృత్తి') || q.includes('విశ్వకర్మ') || q.includes('கைவினைஞர்') || q.includes('விஸ்வகர்மா');

  const isBusiness = q.includes('business') || q.includes('loan') || q.includes('shop') || q.includes('startup') || 
    q.includes('money') || q.includes('entrepreneur') || q.includes('vendor') || q.includes('mudra') || q.includes('svanidhi') || 
    q.includes('व्यापार') || q.includes('ऋण') || q.includes('दुकान') || q.includes('రుణం') || q.includes('వ్యాపార') || 
    q.includes('வணிக') || q.includes('கடன்');

  const isPension = q.includes('pension') || q.includes('senior') || q.includes('elder') || q.includes('old age') || 
    q.includes('retire') || q.includes('पेंशन') || q.includes('बुजुर्ग') || q.includes('పింఛను') || q.includes('వృద్ధ') || 
    q.includes('పెన్షన్') || q.includes('ஓய்வூதியம்') || q.includes('முதியோர்');

  const isHousing = q.includes('house') || q.includes('housing') || q.includes('awas') || q.includes('home') || 
    q.includes('shelter') || q.includes('आवास') || q.includes('मकान') || q.includes('ఇల్లు') || q.includes('గృహ') || 
    q.includes('వీடு') || q.includes('குடியிருப்பு');

  // Handle Intent Branches

  if (isDisability) {
    const apDis = findScheme('ap-ntr-bharosa-disability');
    const adip = findScheme('adip-scheme');
    const igndps = findScheme('igndps-disability-pension');
    if (apDis) matchedSchemes.push(apDis);
    if (adip) matchedSchemes.push(adip);
    if (igndps) matchedSchemes.push(igndps);

    if (language === 'hi') {
      answerText = `दिव्यांगजनों (PwD) के लिए केंद्र और राज्य सरकार की ओर से महत्वपूर्ण योजनाएं उपलब्ध हैं:\n\n1. **एडीआईपी योजना (ADIP Scheme)**: ₹22,500/माह तक की आय वाले दिव्यांगजनों को मोटराइज्ड ट्राइसाइकिल, हियरिंग एड, कृत्रिम अंग और सहायक उपकरण 100% निशुल्क प्रदान किए जाते हैं।\n\n2. **आंध्र प्रदेश एनटीआर भरोसा दिव्यांग पेंशन**: 40% से 79% दिव्यांगता पर **₹6,000/माह**, 80%+ गंभीर/बिस्तरग्रस्त दिव्यांगता पर **₹15,000/माह**, और डायलिसिस मरीजों को **₹10,000/माह** की सीधी पेंशन।\n\n3. **इंदिरा गांधी राष्ट्रीय दिव्यांग पेंशन (IGNDPS)**: बीपीएल परिवारों के 80%+ गंभीर दिव्यांग नागरिकों (18-79 वर्ष) के लिए केंद्रीय पेंशन सहायता।`;
      missingEvidence.push('पुष्टि करें: क्या आपके पास न्यूनतम 40% दिव्यांगता का मान्य यूडीआईडी (UDID) या सदारम (SADAREM) प्रमाण पत्र है?');
      missingEvidence.push('क्या परिवार के पास बीपीएल राशन कार्ड और आधार से जुड़ा बैंक खाता है?');
      followUps.push('यूडीआईडी (UDID) कार्ड के लिए ऑनलाइन आवेदन कैसे करें?');
      followUps.push('एनटीआर भरोसा दिव्यांग पेंशन के नियम और शर्तें क्या हैं?');
      followUps.push('एडीआईपी योजना के तहत निशुल्क ट्राइसाइकिल कैसे प्राप्त करें?');
    } else if (language === 'te') {
      answerText = `దివ్యాంగుల (PwD) కోసం అందుబాటులో ఉన్న ప్రధాన సంక్షేమ పథకాలు:\n\n1. **ఆంధ్రప్రదేశ్ ఎన్టీఆర్ భరోసా దివ్యాంగుల పింఛను (G.O.Ms.No.43)**:\n• 40% నుండి 79% వైకల్యం ఉన్నవారికి: **నెలకు ₹6,000**\n• 80%+ తీవ్ర వైకల్యం/మంచానికే పరిమితమైన వారికి: **నెలకు ₹15,000**\n• దీర్ఘకాలిక మూత్రపిండ వ్యాధితో డయాలసిస్ చేయించుకునే వారికి: **నెలకు ₹10,000**\n\n2. **కేంద్ర ప్రభుత్వ ఏడీఐపీ పథకం (ADIP Scheme)**: ₹22,500 లోపు నెలవారీ ఆదాయం ఉన్నవారికి ఉచిత ట్రైసైకిల్స్, వీల్‌చైర్లు, వినికిడి యంత్రాలు మరియు కృత్రిమ అవయవాలు అందిస్తుంది.\n\n3. **ఇందిరా గాంధీ జాతీయ దివ్యాంగుల పింఛను (IGNDPS)**: బీపీఎల్ కుటుంబాలలోని 80%+ తీవ్ర వైకల్యం ఉన్నవారికి కేంద్ర ఆర్థిక సాయం.`;
      missingEvidence.push('నిర్ధారణ అవసరం: మీ వద్ద సదరం (SADAREM) లేదా యూడీఐడీ (UDID) ద్వారా జారీ చేసిన 40% లేదా అంతకంటే ఎక్కువ వైకల్య ధృవీకరణ పత్రం ఉందా?');
      missingEvidence.push('గ్రామ/వార్డు సచివాలయంలో మీ ఆధార్ మరియు రేషన్ కార్డు అనుసంధానమై ఉన్నాయా?');
      followUps.push('సదరం (SADAREM) క్యాంప్ స్లాట్ ఎలా బుక్ చేసుకోవాలి?');
      followUps.push('ఎన్టీఆర్ భరోసా పింఛనుకు గ్రామ సచివాలయంలో దరఖాస్తు ప్రక్రియ ఏమిటి?');
      followUps.push('ఉచిత మోటరైజ్డ్ ట్రైసైకిల్ ఎలా పొందాలి?');
    } else if (language === 'ta') {
      answerText = `மாற்றுத்திறனாளிகளுக்கான (PwD) முக்கிய திட்டங்கள்:\n\n1. **ஏடிஐபி திட்டம் (ADIP Scheme)**: மாத வருமானம் ₹22,500-க்குள் உள்ள மாற்றுத்திறனாளிகளுக்கு இலவச மோட்டார் பொருத்தப்பட்ட மூன்று சக்கர வண்டி, செயற்கை கால்கள் மற்றும் செவித்திறன் கருவிகள் வழங்கப்படுகின்றன.\n\n2. **ஆந்திரா என்டிஆர் பரோசா மாற்றுத்திறனாளி ஓய்வூதியம்**: 40-79% குறைபாடு உள்ளவர்களுக்கு **மாதம் ₹6,000**, 80%+ தீவிர குறைபாடு உள்ளவர்களுக்கு **மாதம் ₹15,000**, மற்றும் டயாலிசிஸ் நோயாளிகளுக்கு **மாதம் ₹10,000** வழங்கப்படுகிறது.\n\n3. **இந்திரா காந்தி தேசிய மாற்றுத்திறனாளி ஓய்வூதியம் (IGNDPS)**: வறுமைக் கோட்டிற்கு கீழ் உள்ள 80%+ தீவிர குறைபாடுள்ள நபர்களுக்கு மாதாந்திர ஓய்வூதியம்.`;
      missingEvidence.push('உங்களிடம் 40% அல்லது அதற்கு மேற்பட்ட UDID மாற்றுத்திறனாளி அட்டை உள்ளதா?');
      missingEvidence.push('ஆதாருடன் இணைக்கப்பட்ட வங்கி கணக்கு உள்ளதா?');
      followUps.push('UDID அட்டைக்கு எவ்வாறு விண்ணப்பிப்பது?');
      followUps.push('இலவச உதவி உபகரணங்கள் பெறுவது எப்படி?');
    } else {
      answerText = `For Persons with Disabilities (PwD), key statutory and welfare provisions include:\n\n1. **Andhra Pradesh NTR Bharosa Disability Pension (G.O.Ms.No.43)**:\n• 40% to 79% certified disability: **₹6,000 per month**\n• 80%+ severe/bedridden disability: **₹15,000 per month**\n• Chronic kidney disease patients on continuous dialysis: **₹10,000 per month**\n\n2. **ADIP Scheme (Assistance to Disabled Persons)**: 100% grant for motorized tricycles, wheelchairs, braille kits, and prosthetics for beneficiaries with family income up to ₹22,500/month.\n\n3. **Indira Gandhi National Disability Pension Scheme (IGNDPS)**: Monthly central pension for BPL citizens aged 18–79 with severe disability (80%+).`;
      missingEvidence.push('Do you possess a verified UDID Card or state disability certificate (SADAREM) showing ≥40% disability?');
      missingEvidence.push('Is the beneficiary bank account Aadhaar-seeded for direct benefit transfer (DBT)?');
      followUps.push('How to book a SADAREM / UDID medical board assessment?');
      followUps.push('What are the documents needed for AP NTR Bharosa Disability Pension?');
      followUps.push('How to apply for motorized tricycle under ADIP scheme?');
    }
  } else if (isAndhra) {
    const apDis = findScheme('ap-ntr-bharosa-disability');
    const apFarm = findScheme('ap-annadata-sukhibhava');
    const apSchool = findScheme('ap-thalliki-vandanam');
    const apHealth = findScheme('ap-ntr-aarogyasri');
    if (apDis) matchedSchemes.push(apDis);
    if (apFarm) matchedSchemes.push(apFarm);
    if (apSchool) matchedSchemes.push(apSchool);
    if (apHealth) matchedSchemes.push(apHealth);

    if (language === 'hi') {
      answerText = `आंध्र प्रदेश सरकार की चार प्रमुख कल्याणकारी योजनाएं:\n\n1. **एनटीआर भरोसा सामाजिक सुरक्षा पेंशन**: वृद्धों/विधवाओं को ₹4,000/माह, दिव्यांगों को ₹6,000 से ₹15,000/माह।\n2. **तल्लिकी वंदनम**: कक्षा 1 से 12 तक पढ़ने वाले प्रत्येक बच्चे की माँ को **₹15,000 प्रति वर्ष** की सीधी सहायता (75% उपस्थिति अनिवार्य)।\n3. **अन्नदाता सुखीभव**: किसानों और पट्टेदार किसानों (CCRC) को **₹20,000 प्रति वर्ष** (₹14,000 राज्य + ₹6,000 पीएम-किसान)।\n4. **डॉ. एनटीआर आरोग्यश्री**: पात्र परिवारों को **₹25,00,000 प्रति वर्ष** तक का कैशलेस इलाज 3,257 प्रक्रियाओं में।`;
      missingEvidence.push('क्या आपके पास आंध्र प्रदेश का सफेद राशन कार्ड या चावल कार्ड (Rice Card) है?');
      missingEvidence.push('क्या आपका परिवार आंध्र प्रदेश ग्राम या वार्ड सचिवालय में पंजीकृत है?');
      followUps.push('ग्राम सचिवालय में तल्लिकी वंदनम की स्थिति कैसे जांचें?');
      followUps.push('अन्नदाता सुखीभव के लिए पट्टेदार किसान (CCRC) कार्ड कैसे बनवाएं?');
      followUps.push('डॉ. एनटीआर आरोग्यश्री से संबद्ध अस्पतालों की सूची');
    } else if (language === 'te') {
      answerText = `ఆంధ్రప్రదేశ్ రాష్ట్ర ప్రభుత్వం అమలు చేస్తున్న ప్రముఖ సంక్షేమ పథకాలు:\n\n1. **ఎన్టీఆర్ భరోసా సామాజిక పింఛన్లు**: వృద్ధులు, వితంతువులు, చేనేత, గీత కార్మికులకు **₹4,000/నెల**; దివ్యాంగులకు **₹6,000 నుండి ₹15,000/నెల**.\n\n2. **తల్లికి వందనం**: 1 నుండి 12వ తరగతి వరకు చదువుతున్న ప్రతి బిడ్డకు తల్లి ఖాతాలో ఏడాదికి **₹15,000** (పాఠశాలలో 75% హాజరు తప్పనిసరి).\n\n3. **అన్నదాత సుఖీభవ**: అర్హులైన రైతులకు మరియు కౌలు రైతులకు (CCRC) ఏడాదికి **₹20,000** పెట్టుబడి సాయం (రాష్ట్ర ప్రభుత్వం ₹14,000 + పీఎం-కిసాన్ ₹6,000).\n\n4. **డా. ఎన్టీఆర్ ఆరోగ్యశ్రీ**: తెల్ల రేషన్ కార్డు ఉన్న కుటుంబాలకు 3,257 వైద్య ప్రక్రియలకు ఏడాదికి **₹25 లక్షల వరకు ఉచిత నగదు రహిత చికిత్స**.`;
      missingEvidence.push('నిర్ధారణ అవసరం: మీ కుటుంబానికి ఆంధ్రప్రదేశ్ ప్రభుత్వం జారీ చేసిన రైస్ కార్డ్ (White Ration Card) ఉందా?');
      missingEvidence.push('మీరు సమీప గ్రామ లేదా వార్డు సచివాలయాన్ని సంప్రదించారా?');
      followUps.push('గ్రామ సచివాలయంలో తల్లికి వందనం లబ్ధిదారుల జాబితా ఎలా చూడాలి?');
      followUps.push('కౌలు రైతులకు అన్నదాత సుఖీభవ వర్తిస్తుందా?');
      followUps.push('డా. ఎన్టీఆర్ ఆరోగ్యశ్రీ కింద ఏయే చికిత్సలు ఉచితం?');
    } else if (language === 'ta') {
      answerText = `ஆந்திரப் பிரதேச மாநிலத்தின் முக்கிய நலத்திட்டங்கள்:\n\n1. **என்டிஆர் பரோசா ஓய்வூதியம்**: முதியோர்/விதவைகளுக்கு ₹4,000/மாதம், மாற்றுத்திறனாளிகளுக்கு ₹6,000 - ₹15,000/மாதம்.\n2. **தல்லிகி வந்தனம்**: 1 முதல் 12-ம் வகுப்பு வரை படிக்கும் குழந்தையின் தாய்க்கு ஆண்டுக்கு **₹15,000** நிதியுதவி.\n3. **அன்னதாதா சுகீபவா**: விவசாயிகளுக்கு ஆண்டுக்கு **₹20,000** முதலீட்டு உதவி (மாநில அரசு ₹14,000 + பிஎம்-கிசான் ₹6,000).\n4. **டாக்டர் என்டிஆர் ஆரோக்கியஸ்ரீ**: குடும்பத்திற்கு ஆண்டுக்கு **₹25 லட்சம் வரை** கட்டணமில்லா மருத்துவச் சிகிச்சை.`;
      missingEvidence.push('ஆந்திராவின் அரிசி அட்டை (Rice Card) உள்ளதா?');
      followUps.push('கிராம செயலகத்தில் எவ்வாறு பதிவு செய்வது?');
    } else {
      answerText = `Key flagship government schemes of Andhra Pradesh:\n\n1. **NTR Bharosa Social Security Pension**: ₹4,000/month for Old Age & Widows; ₹6,000 to ₹15,000/month for Persons with Disabilities depending on severity.\n\n2. **Thalliki Vandanam**: Direct transfer of **₹15,000 per year per school-going child** (Class 1–12) into the verified mother's bank account, subject to 75% school attendance.\n\n3. **Annadata Sukhibhava**: Total farmer investment support of **₹20,000 per year** (combining ₹14,000 AP State Assistance + ₹6,000 PM-KISAN), inclusive of certified tenant farmers holding CCRC.\n\n4. **Dr. NTR Aarogyasri**: Comprehensive cashless hospitalization up to **₹25 Lakhs per family per year** across 3,257 listed secondary and tertiary procedures for BPL Rice Card holders.`;
      missingEvidence.push('Do you possess an active Andhra Pradesh Rice Card / BPL Food Security Card?');
      missingEvidence.push('Is your household mapped to your local Village/Ward Secretariat (Grama/Ward Sachivalayam)?');
      followUps.push('How to apply for Thalliki Vandanam at Grama Sachivalayam?');
      followUps.push('How can tenant farmers register with CCRC for Annadata Sukhibhava?');
      followUps.push('Check Dr. NTR Aarogyasri hospital network and coverage');
    }
  } else if (isSolar) {
    const solar = findScheme('pm-surya-ghar');
    if (solar) matchedSchemes.push(solar);

    if (language === 'hi') {
      answerText = `रूफटॉप सोलर और मुफ्त बिजली के लिए **पीएम सूर्य घर: मुफ्त बिजली योजना (PM Surya Ghar)** के तहत आवासीय घरों को:\n\n• 1 किलोवाट सिस्टम पर **₹30,000** का केंद्रीय अनुदान\n• 2 किलोवाट सिस्टम पर **₹60,000** का अनुदान\n• 3 किलोवाट या उससे अधिक सिस्टम पर अधिकतम **₹78,000** की सीधी सब्सिडी\n\nइसके माध्यम से हर महीने 300 यूनिट तक मुफ्त बिजली और ग्रिड को अतिरिक्त बिजली बेचकर आमदनी प्राप्त की जा सकती है।`;
      missingEvidence.push('क्या आपके पास अपने नाम पर बिजली कनेक्शन और छत का मालिकाना हक है?');
      missingEvidence.push('क्या पिछले 6 महीनों के बिजली बिलों का पूरा भुगतान हो चुका है?');
      followUps.push('पीएम सूर्य घर पोर्टल पर रूफटॉप सोलर के लिए आवेदन कैसे करें?');
      followUps.push('पीएम सूर्य घर के लिए रियायती बैंक ऋण कैसे प्राप्त करें?');
    } else if (language === 'te') {
      answerText = `ఇంటి పైకప్పుపై సోలార్ ప్యానెల్స్ ఏర్పాటు కోసం **పీఎం సూర్య ఘర్: ముఫ్త్ బిజ్లీ యోజన** కింద కేంద్ర ప్రభుత్వం భారీ రాయితీని అందిస్తోంది:\n\n• 1 కిలోవాట్ సామర్థ్యానికి: **₹30,000** సబ్సిడీ\n• 2 కిలోవాట్ సామర్థ్యానికి: **₹60,000** సబ్సిడీ\n• 3 కిలోవాట్ లేదా అంతకంటే ఎక్కువ సామర్థ్యానికి: గరిష్టంగా **₹78,000** నేరుగా బ్యాంక్ ఖాతాలో జమ\n\nదీని ద్వారా నెలకు 300 యూనిట్ల వరకు ఉచిత విద్యుత్‌ను పొందవచ్చు మరియు మిగిలిన విద్యుత్‌ను డిస్కమ్‌లకు విక్రయించవచ్చు.`;
      missingEvidence.push('మీ పేరు మీద విద్యుత్ సర్వీస్ కనెక్షన్ మరియు స్వంత డాబా/పైకప్పు ఉందా?');
      followUps.push('పీఎం సూర్య ఘర్ పోర్టల్‌లో ఆన్‌లైన్ దరఖాస్తు విధానం ఏమిటి?');
      followUps.push('సబ్సిడీ నిధులు బ్యాంక్ ఖాతాలో ఎప్పుడు జమవుతాయి?');
    } else if (language === 'ta') {
      answerText = `வீட்டு மேற்கூரை சூரிய மின்சக்தி திட்டமான **பிஎம் சூர்ய கர் (PM Surya Ghar)** திட்டத்தின் கீழ்:\n\n• 1 kW சிஸ்டத்திற்கு: **₹30,000** மானியம்\n• 2 kW சிஸ்டத்திற்கு: **₹60,000** மானியம்\n• 3 kW அல்லது அதற்கு மேற்பட்ட அமைப்புகளுக்கு: அதிகபட்சமாக **₹78,000** நேரடி மானியம் வழங்கப்படுகிறது.\n\nமாதம் 300 யூனிட் வரை இலவச மின்சாரம் பெற முடியும்.`;
      missingEvidence.push('உங்கள் பெயரில் மின் இணைப்பு உள்ளதா?');
      followUps.push('சூரிய மின்சக்தி திட்டத்திற்கு எவ்வாறு விண்ணப்பிப்பது?');
    } else {
      answerText = `For clean residential energy and lower electricity bills, the **PM Surya Ghar: Muft Bijli Yojana** provides direct central subsidies for installing rooftop solar panels:\n\n• 1 kW system: **₹30,000** subsidy\n• 2 kW system: **₹60,000** subsidy\n• 3 kW and higher systems: maximum **₹78,000** direct financial assistance\n\nThis empowers households to obtain up to 300 units of free green power every month and export surplus generation back to the DISCOM grid.`;
      missingEvidence.push('Do you have an active residential electricity connection in your own name?');
      missingEvidence.push('Do you possess unshaded roof rights suitable for solar panel mounting?');
      followUps.push('How to register on the National Rooftop Solar Portal (pmsuryaghar.gov.in)?');
      followUps.push('What low-interest bank loans are available for PM Surya Ghar?');
    }
  } else if (isWorker) {
    const eshram = findScheme('eshram-worker-card');
    const pmsym = findScheme('pmsym-worker-pension');
    if (eshram) matchedSchemes.push(eshram);
    if (pmsym) matchedSchemes.push(pmsym);

    if (language === 'hi') {
      answerText = `असंगठित क्षेत्र के श्रमिकों और कामगारों के लिए दो प्रमुख राष्ट्रीय सुरक्षा योजनाएं:\n\n1. **ई-श्रम कार्ड (e-Shram)**: 12-अंकों का सार्वभौमिक यूनिवर्सल अकाउंट नंबर (UAN) जो सामाजिक सुरक्षा योजनाओं, संकट के समय सीधी राहत और ₹2,00,000 के दुर्घटना मृत्यु बीमा से जोड़ता है।\n\n2. **पीएम श्रम योगी मान-धन (PM-SYM)**: ₹15,000 से कम मासिक आय वाले 18-40 वर्ष के श्रमिकों के लिए। ₹55 से ₹200 प्रतिमाह अंशदान पर सरकार भी उतनी ही राशि जोड़ती है, और 60 वर्ष की आयु के बाद **₹3,000 प्रतिमाह न्यूनतम सुनिश्चित पेंशन** मिलती है।`;
      missingEvidence.push('क्या आप ईपीएफओ (EPFO), ईएसआईसी (ESIC) या एनपीएस के सदस्य नहीं हैं?');
      missingEvidence.push('क्या आपकी आयु 18 से 40 वर्ष के बीच है और मासिक आय ₹15,000 से कम है?');
      followUps.push('ई-श्रम कार्ड मोबाइल से कैसे बनाएं?');
      followUps.push('सीएससी केंद्र पर पीएम-एसवाईएम का पंजीकरण कैसे कराएं?');
    } else if (language === 'te') {
      answerText = `అసంఘటిత రంగ కార్మికులు, భవన నిర్మాణ కార్మికులు, ఆటో డ్రైవర్ల కోసం ప్రధాన సంక్షేమ పథకాలు:\n\n1. **ఈ-శ్రమ్ కార్డ్ (e-Shram Card)**: 12 అంకెల యూఏఎన్ (UAN) నంబర్, ప్రమాదవశాత్తు మరణిస్తే ₹2,00,000 బీమా రక్షణ మరియు ప్రభుత్వ సంక్షేమ పథకాలకు ప్రత్యక్ష అనుసంధానం.\n\n2. **పీఎం శ్రమయోగి మాన్‌ధన్ (PM-SYM)**: నెలకు ₹15,000 లోపు సంపాదించే 18-40 ఏళ్ల కార్మికులకు. నెలకు ₹55 నుండి ₹200 వరకు పొదుపు చేస్తే సమాన మొత్తాన్ని కేంద్ర ప్రభుత్వం జమ చేస్తుంది. 60 ఏళ్లు నిండిన తర్వాత **నెలకు ₹3,000 కచ్చితమైన పెన్షన్** అందుతుంది.`;
      missingEvidence.push('మీరు ఈపీఎఫ్‌ఓ (EPFO) లేదా ఈఎస్‌ఐసీ (ESIC) సభ్యులు కాకుండా ఉన్నారా?');
      followUps.push('ఆధార్ ద్వారా ఈ-శ్రమ్ కార్డును ఎలా డౌన్‌లోడ్ చేసుకోవాలి?');
      followUps.push('శ్రమయోగి మాన్‌ధన్ పెన్షన్ ఖాతా ఎలా తెరవాలి?');
    } else if (language === 'ta') {
      answerText = `அமைப்புசாரா தொழிலாளர்களுக்கான முக்கிய நலத்திட்டங்கள்:\n\n1. **இ-ஷ்ரம் அட்டை (e-Shram)**: 12 இலக்க தேசிய தொழிலாளர் அடையாள அட்டை மற்றும் ₹2 லட்சம் விபத்து காப்பீடு.\n2. **பிஎம் ஷ்ரம் யோகி மான்-தன் (PM-SYM)**: மாதம் ₹15,000-க்குள் வருமானம் உள்ள தொழிலாளர்களுக்கு 60 வயதிற்குப் பின் **மாதம் ₹3,000 உத்தரவாத ஓய்வூதியம்**.`;
      missingEvidence.push('EPFO அல்லது ESIC இல் உறுப்பினர் அல்ல என்பதை உறுதிப்படுத்தவும்.');
      followUps.push('e-Shram அட்டை எவ்வாறு பெறுவது?');
    } else {
      answerText = `For unorganised workers, gig economy partners, construction workers, and street vendors:\n\n1. **e-Shram National Worker Card**: Generates a 12-digit Universal Account Number (UAN) providing comprehensive identification, crisis cash transfer portability, and ₹2,00,000 accidental death/permanent disability cover under PMSBY.\n\n2. **Pradhan Mantri Shram Yogi Maandhan (PM-SYM)**: Contributory pension for workers aged 18–40 earning ≤₹15,000/month. You contribute ₹55–₹200/month and the Central Government matches 100%, guaranteeing a lifelong pension of **₹3,000 per month** upon attaining age 60.`;
      missingEvidence.push('Are you un-enrolled in formal social security frameworks like EPFO, ESIC, or NPS?');
      missingEvidence.push('Is your monthly earnings threshold below ₹15,000/month?');
      followUps.push('How to self-register for e-Shram Card on eshram.gov.in?');
      followUps.push('What are the entry age slab contribution amounts for PM-SYM?');
    }
  } else if (isUnemployed) {
    const ncs = findScheme('ncs-career-service');
    const pmkvy = findScheme('pmkvy-skill-india');
    if (ncs) matchedSchemes.push(ncs);
    if (pmkvy) matchedSchemes.push(pmkvy);

    if (language === 'hi') {
      answerText = `रोजगार और कौशल विकास चाहने वाले युवाओं के लिए:\n\n1. **नेशनल करियर सर्विस (NCS)**: 10 लाख से अधिक सक्रिय नौकरियों, मॉडल करियर सेंटर्स और रोजगार मेलों से जोड़ने वाला सरकारी मंच। पंजीकरण पूर्णतः निशुल्क है।\n\n2. **पीएमकेवीवाई 4.0 (PMKVY)**: एनएसक्यूएफ (NSQF) संरेखित निःशुल्क व्यावसायिक और तकनीकी कौशल प्रशिक्षण, डिजिटल प्रमाण पत्र और मूल्यांकन के उपरांत **₹8,000 तक का वजीफा/टूलकिट प्रोत्साहन**।`;
      missingEvidence.push('आपकी शैक्षणिक योग्यता और पसंदीदा कार्य क्षेत्र क्या है?');
      followUps.push('एनसीएस पोर्टल पर जॉब सीकर प्रोफाइल कैसे बनाएं?');
      followUps.push('नजदीकी पीएमकेवीवाई कौशल केंद्र कैसे खोजें?');
    } else if (language === 'te') {
      answerText = `ఉద్యోగార్థులు మరియు నైపుణ్య శిక్షణ కోరుకునే వారి కోసం:\n\n1. **నేషనల్ కెరీర్ సర్వీస్ (NCS)**: 10 లక్షలకు పైగా ప్రభుత్వ మరియు ప్రైవేట్ ఉద్యోగ ఖాళీలు, కెరీర్ కౌన్సెలింగ్ మరియు జాబ్ మేళాల కోసం ఉచిత జాతీయ పోర్టల్.\n\n2. **పీఎంకేవీవై 4.0 (PMKVY)**: పూర్తిగా ఉచిత సాంకేతిక నైపుణ్య శిక్షణ, ప్రభుత్వ ధృవీకరణ పత్రం మరియు విజయవంతంగా పూర్తి చేసిన వారికి **₹8,000 వరకు స్టైపెండ్/టూల్‌కిట్ ప్రోత్సాహకం**.`;
      missingEvidence.push('మీ ప్రస్తుత చదువు మరియు మీరు ఆసక్తి చూపే రంగాన్ని తెలపండి.');
      followUps.push('ఎన్‌సీఎస్ పోర్టల్‌లో ఉచితంగా ఎలా నమోదు చేసుకోవాలి?');
      followUps.push('పీఎంకేవీవై కింద అందుబాటులో ఉన్న ఉచిత కోర్సులు ఏమిటి?');
    } else if (language === 'ta') {
      answerText = `வேலை தேடுபவர்கள் மற்றும் திறன் பயிற்சிக்கான திட்டங்கள்:\n\n1. **தேசிய தொழில் சேவை (NCS)**: வேலைவாய்ப்புகள் மற்றும் வேலைவாய்ப்பு முகாம்களுக்கான மத்திய அரசு தளம்.\n2. **பிஎம்கேவிஒய் 4.0 (PMKVY)**: முற்றிலும் இலவச திறன் பயிற்சி மற்றும் **₹8,000 வரை உதவித்தொகை**.`;
      missingEvidence.push('உங்கள் கல்வி தகுதி என்ன?');
      followUps.push('NCS தளத்தில் எவ்வாறு பதிவு செய்வது?');
    } else {
      answerText = `For job seekers, youth, and citizens seeking new skills:\n\n1. **National Career Service (NCS)**: Free central portal directly connecting over 10 Lakhs active vacancies from public and private sectors, coupled with local Model Career Centre guidance and national job fairs.\n\n2. **Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)**: Free industry-aligned vocational and technical skilling under the National Skill Qualification Framework (NSQF), including up to **₹8,000 monetary rewards and toolkit support** upon assessment and certification.`;
      missingEvidence.push('What is your highest completed educational qualification and preferred trade sector?');
      missingEvidence.push('Are you currently registered on the National Career Service portal?');
      followUps.push('How to create a verified jobseeker profile on ncs.gov.in?');
      followUps.push('How to locate the nearest PMKVY accredited training centre?');
    }
  } else if (isAgri) {
    const pmkisan = findScheme('pm-kisan');
    const apFarm = findScheme('ap-annadata-sukhibhava');
    const pmfby = findScheme('pmfby-crop-insurance');
    if (pmkisan) matchedSchemes.push(pmkisan);
    if (apFarm) matchedSchemes.push(apFarm);
    if (pmfby) matchedSchemes.push(pmfby);

    if (language === 'hi') {
      answerText = `कृषि सहायता के लिए **पीएम-किसान** योजना के तहत पात्र किसान परिवारों को **₹6,000 प्रति वर्ष** (₹2,000 की तीन किश्तें) सीधे बैंक खाते में दी जाती हैं।\n\nयदि आप आंध्र प्रदेश से हैं, तो **अन्नदाता सुखीभव** के माध्यम से कुल **₹20,000 प्रति वर्ष** (₹14,000 राज्य + ₹6,000 पीएम-किसान) प्राप्त होते हैं, जिसमें पट्टेदार किसान भी शामिल हैं।\n\nप्राकृतिक आपदाओं से फसल सुरक्षा के लिए **पीएम फसल बीमा योजना (PMFBY)** मात्र 1.5% से 2% प्रीमियम पर उपलब्ध है।`;
      missingEvidence.push('पुष्टि आवश्यक: क्या आपके या परिवार के नाम पर कृषि योग्य भूमि पंजीकृत है?');
      missingEvidence.push('क्या आपने पीएम-किसान पोर्टल पर बायोमेट्रिक या ओटीपी आधारित ई-केवाईसी पूरा कर लिया है?');
      followUps.push('पीएम-किसान के लिए कौन से दस्तावेज़ चाहिए?');
      followUps.push('पीएम-किसान के लिए मेरी पात्रता जांचें');
      followUps.push('अन्नदाता सुखीभव के लिए पात्रता क्या है?');
    } else if (language === 'te') {
      answerText = `వ్యవసాయ సహాయం కోసం రెండు ప్రధాన పథకాలు ఉన్నాయి:\n\n1. **పీఎం-కిసాన్**: దేశవ్యాప్తంగా సాగుభూమి ఉన్న రైతులకు ఏడాదికి **₹6,000** మూడు విడతలలో జమ అవుతుంది.\n2. **ఆంధ్రప్రదేశ్ అన్నదాత సుఖీభవ**: ఆంధ్రప్రదేశ్ రైతులకు మరియు సీసీఆర్‌సీ (CCRC) ఉన్న కౌలు రైతులకు ఏడాదికి మొత్తం **₹20,000** పెట్టుబడి సాయం (రాష్ట్రం ₹14,000 + పీఎం-కిసాన్ ₹6,000).\n3. **పీఎం ఫసల్ బీమా యోజన**: అతి తక్కువ ప్రీమియంతో (1.5%–2%) ప్రకృతి వైపరీత్యాల నుండి పంటలకు పూర్తి బీమా రక్షణ.`;
      missingEvidence.push('నిర్ధారణ అవసరం: మీ పేరు మీద పట్టాదారు పాస్‌బుక్ లేదా కౌలు రైతు గుర్తింపు కార్డు (CCRC) ఉందా?');
      missingEvidence.push('మీరు పీఎం-కిసాన్ పోర్టల్‌లో ఈ-కేవైసీ పూర్తి చేశారా?');
      followUps.push('పీఎం-కిసాన్ కోసం అవసరమైన పత్రాలు ఏమిటి?');
      followUps.push('అన్నదాత సుఖీభవ పథకం వివరాలు ఏమిటి?');
      followUps.push('ఫసల్ బీమా ప్రీమియం ఎలా లెక్కించాలి?');
    } else if (language === 'ta') {
      answerText = `விவசாயிகளுக்கான உதவிக்கு **பிஎம்-கிசான்** திட்டத்தின் கீழ் தகுதியான விவசாயக் குடும்பங்களுக்கு ஆண்டுக்கு **₹6,000** நேரடி நிதியுதவி வழங்கப்படுகிறது.\n\nமேலும் பயிர் சேதங்களுக்கு **பிரதம மந்திரி பயிர் காப்பீட்டுத் திட்டம் (PMFBY)** மூலம் மிகக் குறைந்த பிரீமியத்தில் இழப்பீடு பெறலாம்.`;
      missingEvidence.push('உங்கள் குடும்பப் பெயரில் விவசாய நிலப் பட்டா உள்ளதா?');
      missingEvidence.push('பிஎம்-கிசான் தளத்தில் இ-கேஒய்சி முடித்துவிட்டீர்களா?');
      followUps.push('பிஎம்-கிசான் திட்டத்திற்கு என்னென்ன ஆவணங்கள் தேவை?');
      followUps.push('பயிர் காப்பீடு செய்வது எப்படி?');
    } else {
      answerText = `Based on your interest in agricultural support:\n\n1. **PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)**: Direct income support of **₹6,000 per year** in three 4-monthly installments of ₹2,000 directly into Aadhaar-seeded DBT bank accounts.\n\n2. **AP Annadata Sukhibhava (for Andhra Pradesh)**: Comprehensive investment support of **₹20,000 per year** (₹14,000 AP State Assistance + ₹6,000 PM-KISAN), extending coverage to registered CCRC tenant farmers.\n\n3. **PMFBY (Crop Insurance)**: Comprehensive risk cover against natural non-preventable crop yield loss at nominal premium rates (1.5% Rabi, 2% Kharif).`;
      missingEvidence.push('Do you hold clear title to cultivable agricultural land, or a registered tenant agreement (CCRC)?');
      missingEvidence.push('Have you completed mandatory biometric or OTP-based eKYC on the PM-KISAN portal?');
      followUps.push('What documents do I need to prepare for PM-KISAN?');
      followUps.push('How can tenant farmers access Annadata Sukhibhava?');
      followUps.push('How to calculate PMFBY crop insurance premium?');
    }
  } else if (isStudent) {
    const postMatric = findScheme('nsp-post-matric');
    const nmmss = findScheme('nmmss-scholarship');
    const pmusp = findScheme('pm-usp-higher-edu');
    const apThalliki = findScheme('ap-thalliki-vandanam');
    if (postMatric) matchedSchemes.push(postMatric);
    if (nmmss) matchedSchemes.push(nmmss);
    if (pmusp) matchedSchemes.push(pmusp);
    if (apThalliki) matchedSchemes.push(apThalliki);

    if (language === 'hi') {
      answerText = `विद्यार्थियों के लिए प्रमुख छात्रवृत्ति और शिक्षा योजनाएं:\n\n1. **पोस्ट-मैट्रिक छात्रवृत्ति योजना**: कक्षा 11 से पीएचडी तक के एससी, एसटी, ओबीसी विद्यार्थियों के लिए **100% अनिवार्य शुल्क प्रतिपूर्ति** तथा ₹13,500/वर्ष तक अनुरक्षण भत्ता।\n\n2. **एनएमएमएसएस (NMMSS)**: कक्षा 8 के मेधावी विद्यार्थियों के लिए कक्षा 9 से 12 तक **₹12,000 प्रति वर्ष** (कुल ₹48,000) की छात्रवृत्ति।\n\n3. **पीएम-यूएसपी उच्च शिक्षा छात्रवृत्ति**: कॉलेज और विश्वविद्यालय के शीर्ष 20वें पर्सेंटाइल मेधावी विद्यार्थियों को स्नातक में ₹12,000/वर्ष और स्नातकोत्तर में ₹20,000/वर्ष।\n\n4. **आंध्र प्रदेश तल्लिकी वंदनम**: 1 से 12वीं के स्कूली बच्चों की माताओं को ₹15,000/वर्ष।`;
      missingEvidence.push('आपका वर्तमान पाठ्यक्रम और सामाजिक श्रेणी (SC, ST, OBC या सामान्य) क्या है?');
      missingEvidence.push('क्या आपके पास चालू वित्तीय वर्ष का मान्य आय प्रमाण पत्र है?');
      followUps.push('राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) के लिए दस्तावेज़ सूची क्या है?');
      followUps.push('एनएमएमएसएस (NMMSS) परीक्षा के लिए कौन पात्र है?');
      followUps.push('छात्रवृत्ति के लिए मेरी पात्रता जांचें');
    } else if (language === 'te') {
      answerText = `విద్యార్థుల కోసం అందుబాటులో ఉన్న ముఖ్య స్కాలర్‌షిప్ పథకాలు:\n\n1. **పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్**: ఇంటర్, డిగ్రీ, పీజీ చదువుతున్న ఎస్సీ, ఎస్టీ, బీసీ విద్యార్థులకు **100% పూర్తి ఫీజు రీయింబర్స్‌మెంట్** మరియు ఏడాదికి ₹13,500 వరకు అలవెన్స్.\n\n2. **ఎన్‌ఎంఎంఎస్‌ఎస్ (NMMSS)**: 8వ తరగతి మెరిట్ విద్యార్థులకు 9 నుండి 12వ తరగతి వరకు ఏడాదికి **₹12,000** (మొత్తం ₹48,000) స్కాలర్‌షిప్.\n\n3. **పీఎం-యూఎస్‌పీ ఉన్నత విద్యా స్కాలర్‌షిప్**: డిగ్రీ విద్యార్థులకు ఏడాదికి ₹12,000, పీజీ విద్యార్థులకు ఏడాదికి ₹20,000.\n\n4. **ఆంధ్రప్రదేశ్ తల్లికి వందనం**: బడికి వెళ్లే ప్రతి బిడ్డకు తల్లి ఖాతాలో ఏడాదికి **₹15,000**.`;
      missingEvidence.push('మీ ప్రస్తుత కోర్సు మరియు సామాజిక వర్గం (SC, ST, OBC) ఏమిటి?');
      missingEvidence.push('మీ వద్ద ప్రస్తుత ఆర్థిక సంవత్సరపు ఆదాయ ధృవీకరణ పత్రం ఉందా?');
      followUps.push('నేషనల్ స్కాలర్‌షిప్ పోర్టల్ పత్రాల జాబితా ఏమిటి?');
      followUps.push('తల్లికి వందనం పథకం దరఖాస్తు విధానం ఏమిటి?');
      followUps.push('స్కాలర్‌షిప్ కోసం నా అర్హతను పరిశీలించండి');
    } else if (language === 'ta') {
      answerText = `மாணவர்களுக்கான கல்வி உதவித்தொகை திட்டங்கள்:\n\n1. **போஸ்ட்-மெட்ரிக் கல்வி உதவித்தொகை**: உயர்கல்வி பயிலும் எஸ்சி, எஸ்டி, ஓபிசி மாணவர்களுக்கு **100% கட்டணத் தள்ளுபடி**.\n2. **NMMSS திட்டம்**: 9 முதல் 12-ம் வகுப்பு வரை படிக்கும் அரசு பள்ளி மாணவர்களுக்கு ஆண்டுக்கு **₹12,000** உதவித்தொகை.\n3. **பிஎம்-யுஎஸ்பி திட்டம்**: கல்லூரி மாணவர்களுக்கு ஆண்டுக்கு ₹12,000 முதல் ₹20,000 வரை.`;
      missingEvidence.push('நடப்பு நிதியாண்டிற்கான வருமானச் சான்றிதழ் உள்ளதா?');
      followUps.push('தேசிய கல்வி உதவித்தொகை போர்டல் ஆவண பட்டியல் என்ன?');
    } else {
      answerText = `Comprehensive education and scholarship support programs:\n\n1. **Post-Matric Scholarship for SC/ST/OBC**: Covers **100% compulsory non-refundable tuition fees** plus up to ₹13,500/year maintenance allowance for Class 11 through doctoral studies with family income ≤₹2.50 Lakh.\n\n2. **National Means-cum-Merit Scholarship (NMMSS)**: **₹12,000 per year** (₹48,000 total across Classes 9–12) for meritorious government school students passing the Class 8 selection exam.\n\n3. **PM-USP Central Sector College/University Scholarship**: ₹12,000/year for graduation and ₹20,000/year for post-graduation for top 20th percentile board scorers with family income ≤₹4.50 Lakh.\n\n4. **AP Thalliki Vandanam**: Direct transfer of ₹15,000/year per school child to the mother's account.`;
      missingEvidence.push('What is your current course and social category (SC, ST, OBC, or General)?');
      missingEvidence.push('Do you possess a current financial year Income Certificate from your local Tehsildar?');
      followUps.push('What is the deadline and document list for National Scholarship Portal?');
      followUps.push('How to apply for PM-USP Central Sector Scholarship?');
      followUps.push('Check my potential eligibility for Post-Matric Scholarship');
    }
  } else if (isHealth) {
    const pmjay = findScheme('pm-jay');
    const pmjaySr = findScheme('pmjay-senior-70');
    const apAarogya = findScheme('ap-ntr-aarogyasri');
    if (pmjay) matchedSchemes.push(pmjay);
    if (pmjaySr) matchedSchemes.push(pmjaySr);
    if (apAarogya) matchedSchemes.push(apAarogya);

    if (language === 'hi') {
      answerText = `स्वास्थ्य सुरक्षा के लिए प्रमुख योजनाएं:\n\n1. **आयुष्मान भारत (PM-JAY)**: प्रति परिवार प्रति वर्ष **₹5,00,000 तक का कैशलेस इलाज** देश के 28,000+ अस्पतालों में।\n\n2. **आयुष्मान भारत 70+ वरिष्ठ नागरिक विस्तार**: **70 वर्ष या उससे अधिक आयु के सभी बुजुर्गों** को आय सीमा के बिना अलग से ₹5 लाख का निशुल्क वार्षिक कवर।\n\n3. **डॉ. एनटीआर आरोग्यश्री (आंध्र प्रदेश)**: आंध्र प्रदेश के बीपीएल परिवारों के लिए **₹25,00,000 प्रति वर्ष** तक का कैशलेस अस्पताल कवर।`;
      missingEvidence.push('क्या मरीज या परिवार के सदस्य की आयु 70 वर्ष या उससे अधिक है?');
      missingEvidence.push('क्या आपके पास सक्रिय राशन कार्ड या आयुष्मान कार्ड है?');
      followUps.push('70+ वरिष्ठ नागरिक अपना आयुष्मान कार्ड कैसे बनवाएं?');
      followUps.push('डॉ. एनटीआर आरोग्यश्री में कौन से अस्पताल शामिल हैं?');
      followUps.push('आयुष्मान भारत में आपातकालीन भर्ती की प्रक्रिया क्या है?');
    } else if (language === 'te') {
      answerText = `వైద్య చికిత్సల కోసం అందుబాటులో ఉన్న పథకాలు:\n\n1. **డా. ఎన్టీఆర్ ఆరోగ్యశ్రీ (ఆంధ్రప్రదేశ్)**: రాష్ట్రంలోని తెల్ల రేషన్ కార్డు కలిగిన కుటుంబాలకు ఏడాదికి **₹25 లక్షల వరకు ఉచిత నగదు రహిత చికిత్స** (3,257 శస్త్రచికిత్సలు మరియు చికిత్సలు).\n\n2. **ఆయుష్మాన్ భారత్ (PM-JAY)**: దేశవ్యాప్తంగా 28,000+ ఆసుపత్రులలో కుటుంబానికి ఏడాదికి **₹5,00,000 ఉచిత చికిత్స**.\n\n3. **ఆయుష్మాన్ భారత్ 70+ వయ వందన**: 70 ఏళ్లు నిండిన ప్రతి సీనియర్ సిటిజన్‌కు ఆదాయ పరిమితి లేకుండా ప్రత్యేకంగా ₹5 లక్షల అదనపు ఉచిత ఆరోగ్య కవరేజ్.`;
      missingEvidence.push('రోగి లేదా కుటుంబ సభ్యుల వయస్సు 70 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ ఉందా?');
      missingEvidence.push('మీకు చెల్లుబాటు అయ్యే రైస్ కార్డ్ లేదా రేషన్ కార్డు ఉందా?');
      followUps.push('70+ వృద్ధులు ఆయుష్మాన్ కార్డు ఎలా డౌన్‌లోడ్ చేసుకోవాలి?');
      followUps.push('ఆరోగ్యశ్రీ ఆసుపత్రుల జాబితా ఎలా చూడాలి?');
      followUps.push('ఆయుష్మాన్ భారత్ కింద నా అర్హతను పరిశీలించండి');
    } else if (language === 'ta') {
      answerText = `மருத்துவச் சிகிச்சைக்காக:\n\n1. **ஆயுஷ்மான் பாரத் (PM-JAY)**: குடும்பத்திற்கு ஆண்டுக்கு **₹5,00,000 கட்டணமில்லா சிகிச்சை**.\n2. **70+ முதியோர் காப்பீடு**: 70 வயது நிரம்பிய அனைவருக்கும் வருமான வரம்பின்றி ₹5 லட்சம் இலவச மருத்துவக் காப்பீடு.\n3. **ஆந்திரா டாக்டர் என்டிஆர் ஆரோக்கியஸ்ரீ**: ₹25 லட்சம் வரை கட்டணமில்லா மருத்துவச் சிகிச்சை.`;
      missingEvidence.push('குடும்ப உறுப்பினர் வயது 70 அல்லது அதற்கு மேற்பட்டதா?');
      followUps.push('70+ முதியவர்கள் ஆயுஷ்மான் அட்டையை எவ்வாறு பெறுவது?');
    } else {
      answerText = `For comprehensive medical protection and hospitalization:\n\n1. **Ayushman Bharat (PM-JAY)**: Provides **₹5,00,000 annual cashless cover per family** across 28,000+ empanelled hospitals for secondary and tertiary care.\n\n2. **PM-JAY Senior 70+ Universal Expansion**: An exclusive, top-up cover of **₹5,00,000 per year** provided unconditionally to **every citizen aged 70 and above**, irrespective of income or family wealth.\n\n3. **Dr. NTR Aarogyasri (Andhra Pradesh)**: Industry-leading state health cover up to **₹25 Lakhs per family per year** across 3,257 secondary and tertiary procedures.`;
      missingEvidence.push('Is the patient or family member aged 70 years or older?');
      missingEvidence.push('Do you possess an active Rice Card or food security family registration?');
      followUps.push('How can senior citizens aged 70+ download their Ayushman card?');
      followUps.push('Which hospitals accept Dr. NTR Aarogyasri cashless claims?');
      followUps.push('Check my potential eligibility for Ayushman Bharat');
    }
  } else if (isNutrition) {
    const poshan = findScheme('poshan-saksham-anganwadi');
    const vatsalya = findScheme('mission-vatsalya');
    const pmgkay = findScheme('pmgkay-free-foodgrain');
    if (poshan) matchedSchemes.push(poshan);
    if (vatsalya) matchedSchemes.push(vatsalya);
    if (pmgkay) matchedSchemes.push(pmgkay);

    if (language === 'hi') {
      answerText = `पोषण एवं बाल सुरक्षा योजनाएं:\n\n1. **सक्षम आंगनवाड़ी और पोषण 2.0**: 6 माह से 6 वर्ष के बच्चों, गर्भवती और धात्री माताओं को आंगनवाड़ी केंद्रों के माध्यम से गर्म पका हुआ भोजन, टीएचआर (THR) और सूक्ष्म पोषक तत्व।\n\n2. **पीएम गरीब कल्याण अन्न योजना (PMGKAY)**: राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) के तहत 81 करोड़ से अधिक नागरिकों को **प्रति व्यक्ति 5 किलो अनाज प्रतिमाह 100% निशुल्क**।\n\n3. **मिशन वात्सल्य**: अनाथ, एकल अभिभावक या संकटग्रस्त बच्चों के पालन-पोषण के लिए **₹4,000 प्रति माह** गैर-संस्थागत स्पॉन्सरशिप सहायता।`;
      missingEvidence.push('क्या आपके पास राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) के तहत सक्रिय राशन कार्ड है?');
      followUps.push('आंगनवाड़ी में बच्चे का पंजीकरण कैसे कराएं?');
      followUps.push('मिशन वात्सल्य के लिए कौन से बच्चे पात्र हैं?');
    } else if (language === 'te') {
      answerText = `పోషణ మరియు శిశు సంక్షేమ పథకాలు:\n\n1. **పోషణ్ 2.0 & అంగన్‌వాడీ సేవలు**: 6 నెలల నుండి 6 సంవత్సరాల పిల్లలకు, గర్భిణీలకు అంగన్‌వాడీ కేంద్రాల ద్వారా పౌష్టికాహారం, గుడ్లు, పాలు మరియు ముందస్తు విద్య.\n\n2. **పీఎం గరీబ్ కళ్యాణ్ అన్న యోజన (PMGKAY)**: రేషన్ కార్డు కలిగిన ప్రతి లబ్ధిదారుడికి నెలకు **5 కిలోల బియ్యం/ధాన్యాలు పూర్తిగా ఉచితం**.\n\n3. **మిషన్ వాత్సల్య**: అనాథ లేదా ఆపదలో ఉన్న పిల్లల సంరక్షణ కోసం నెలకు **₹4,000** ఆర్థిక సాయం.`;
      missingEvidence.push('మీకు చెల్లుబాటు అయ్యే రేషన్ కార్డు ఉందా?');
      followUps.push('అంగన్‌వాడీ కేంద్రంలో నమోదు ఎలా చేసుకోవాలి?');
      followUps.push('మిషన్ వాత్సల్య దరఖాస్తు వివరాలు ఏమిటి?');
    } else if (language === 'ta') {
      answerText = `ஊட்டச்சத்து மற்றும் குழந்தைகள் நலத்திட்டங்கள்:\n\n1. **போஷன் 2.0 (அங்கன்வாடி)**: 6 மாதம் முதல் 6 வயது வரையிலான குழந்தைகளுக்கு இலவச சத்தான உணவு மற்றும் முன்பள்ளி கல்வி.\n2. **PMGKAY இலவச உணவு தானிய திட்டம்**: மாதம் ஒரு நபருக்கு **5 கிலோ உணவு தானியங்கள் 100% இலவசம்**.\n3. **மிஷன் வாத்சல்யா**: ஆதரவற்ற குழந்தைகளுக்கு மாதம் **₹4,000** உதவித்தொகை.`;
      missingEvidence.push('செயலில் உள்ள குடும்ப அட்டை உள்ளதா?');
      followUps.push('அங்கன்வாடி மையத்தில் பதிவு செய்வது எப்படி?');
    } else {
      answerText = `Nutrition, Child Welfare, and Food Security initiatives:\n\n1. **Saksham Anganwadi & Poshan 2.0**: Free supplementary nutrition, hot cooked meals, Take-Home Rations (THR), and Early Childhood Care & Education (ECCE) for children aged 6 months to 6 years and pregnant/lactating mothers.\n\n2. **PMGKAY (Free Foodgrain Scheme)**: 100% free foodgrain entitlement (5 kg/person/month for Priority Households; 35 kg/family/month for Antyodaya Anna Yojana) under NFSA.\n\n3. **Mission Vatsalya**: Child protection grant of **₹4,000 per month** in non-institutional family-based sponsorship for orphans and vulnerable children.`;
      missingEvidence.push('Do you possess an active NFSA Priority Household or Antyodaya Ration Card?');
      missingEvidence.push('Is the child registered with your local Anganwadi Worker (AWW)?');
      followUps.push('How to register a child at the local Anganwadi centre?');
      followUps.push('What are the criteria for Mission Vatsalya monthly sponsorship?');
    }
  } else if (isMaternity) {
    const pmmvy = findScheme('pmmvy');
    const ssy = findScheme('sukanya-samriddhi');
    const apThalliki = findScheme('ap-thalliki-vandanam');
    if (pmmvy) matchedSchemes.push(pmmvy);
    if (ssy) matchedSchemes.push(ssy);
    if (apThalliki) matchedSchemes.push(apThalliki);

    if (language === 'hi') {
      answerText = `गर्भवती एवं धात्री माताओं तथा बालिकाओं के लिए योजनाएं:\n\n1. **प्रधानमंत्री मातृ वंदना योजना (PMMVY)**: पहले बच्चे के लिए **₹5,000** और दूसरे बच्चे के रूप में कन्या शिशु होने पर **₹6,000** की सीधी नकद सहायता माता के बैंक खाते में।\n\n2. **सुकन्या समृद्धि योजना (SSY)**: 10 वर्ष तक की बालिकाओं के लिए 8.2% की उच्चतम कर-मुक्त ब्याज दर और 80C के तहत आयकर छूट।\n\n3. **आंध्र प्रदेश तल्लिकी वंदनम**: स्कूल जाने वाले प्रत्येक बच्चे की माँ को **₹15,000 प्रति वर्ष**।`;
      missingEvidence.push('क्या आपने नजदीकी आंगनवाड़ी केंद्र में एमसीपी (MCP) कार्ड प्राप्त कर लिया है?');
      missingEvidence.push('क्या माता का एकल (सिंगल) बैंक खाता आधार से लिंक है?');
      followUps.push('पीएमएमवीवाई की किश्तें कैसे मिलती हैं?');
      followUps.push('सुकन्या समृद्धि खाता डाकघर में कैसे खोलें?');
    } else if (language === 'te') {
      answerText = `గర్భిణీలు, బాలింతలు మరియు ఆడపిల్లల కోసం పథకాలు:\n\n1. **పీఎం మాతృ వందన యోజన (PMMVY)**: మొదటి బిడ్డకు **₹5,000** మరియు రెండవ బిడ్డ ఆడపిల్ల అయితే **₹6,000** నేరుగా తల్లి బ్యాంక్ ఖాతాలో జమ.\n\n2. **సుకున్య సమృద్ధి యోజన (SSY)**: 10 ఏళ్లలోపు ఆడపిల్లల కోసం 8.2% అత్యధిక పన్ను రహిత వడ్డీతో పొదుపు పథకం.\n\n3. **ఆంధ్రప్రదేశ్ తల్లికి వందనం**: బడికి వెళ్లే ప్రతి బిడ్డకు తల్లి ఖాతాలో ఏడాదికి **₹15,000**.`;
      missingEvidence.push('మీరు సమీప అంగన్‌వాడీ కేంద్రంలో గర్భధారణను నమోదు చేసుకుని ఎంసీపీ (MCP) కార్డు పొందారా?');
      followUps.push('పీఎంఎంవీవై వాయిదాల వివరాలు ఏమిటి?');
      followUps.push('సుకున్య సమృద్ధి ఖాతా ఎలా తెరవాలి?');
    } else if (language === 'ta') {
      answerText = `கர்ப்பிணிகள் மற்றும் பெண் குழந்தைகளுக்கான திட்டங்கள்:\n\n1. **PMMVY திட்டம்**: முதல் குழந்தைக்கு **₹5,000** மற்றும் இரண்டாவது குழந்தை பெண் குழந்தையாக இருந்தால் **₹6,000** நிதியுதவி.\n2. **சுகன்யா சம்ரிதி திட்டம்**: 10 வயதுக்குட்பட்ட பெண் குழந்தைகளுக்கு 8.2% வரி இல்லாத வட்டி கொண்ட சேமிப்பு திட்டம்.`;
      missingEvidence.push('அங்கன்வாடி மையத்தில் பதிவு செய்து MCP அட்டை பெற்றுள்ளீர்களா?');
      followUps.push('PMMVY தவணைகள் எவ்வாறு வழங்கப்படுகின்றன?');
    } else {
      answerText = `For expecting mothers, new mothers, and girl children:\n\n1. **Pradhan Mantri Matru Vandana Yojana (PMMVY)**: Cash maternity incentive of **₹5,000 for the first child** and **₹6,000 for the second child (if girl)** deposited directly via DBT.\n\n2. **Sukanya Samriddhi Yojana (SSY)**: Sovereign high-return savings scheme for girl children up to age 10 offering 8.2% tax-free compound interest with full Section 80C deductions.\n\n3. **AP Thalliki Vandanam**: Direct transfer of ₹15,000/year to mothers of school-going children (Class 1–12).`;
      missingEvidence.push('Have you registered your pregnancy at your local Anganwadi centre or PHC for an MCP card?');
      missingEvidence.push('Does the mother have an active, single bank account linked with Aadhaar?');
      followUps.push('What are the installments and conditions for PMMVY?');
      followUps.push('How to open a Sukanya Samriddhi account at the Post Office?');
    }
  } else if (isArtisan) {
    const vishwakarma = findScheme('pm-vishwakarma');
    if (vishwakarma) matchedSchemes.push(vishwakarma);

    if (language === 'hi') {
      answerText = `पारंपरिक कारीगरों और शिल्पकारों के लिए **पीएम विश्वकर्मा योजना**: 18 पारंपरिक व्यवसायों (बढ़ई, लोहार, कुम्हार, दर्जी आदि) में:\n\n• डिजिटल विश्वकर्मा प्रमाण पत्र और पहचान पत्र\n• **₹15,000 का आधुनिक टूलकिट वाउचर**\n• ₹500/दिन प्रशिक्षण वजीफा\n• 5% रियायती ब्याज दर पर **₹3 लाख तक का बिना गारंटी का ऋण** (पहली किश्त ₹1 लाख, दूसरी ₹2 लाख)।`;
      missingEvidence.push('आप 18 पारंपरिक व्यवसायों में से कौन सा काम करते हैं?');
      missingEvidence.push('क्या परिवार का कोई सदस्य सरकारी सेवा में है?');
      followUps.push('सीएससी (CSC) पर पीएम विश्वकर्मा का पंजीकरण कैसे कराएं?');
      followUps.push('पीएम विश्वकर्मा ऋण की शर्तें क्या हैं?');
    } else if (language === 'te') {
      answerText = `చేతివృత్తుల వారి కోసం **పీఎం విశ్వకర్మ పథకం** 18 సంప్రదాయ వృత్తులలో పూర్తి సహాయం అందిస్తుంది:\n\n• అధికారిక విశ్వకర్మ ఐడీ కార్డు\n• **₹15,000 ఉచిత టూల్‌కిట్ గ్రాంట్**\n• రోజుకు ₹500 స్టైపెండ్‌తో ఉచిత శిక్షణ\n• 5% రాయితీ వడ్డీతో **₹3 లక్షల వరకు పూచీకత్తు లేని రుణం** (మొదటి విడత ₹1 లక్ష, రెండవ విడత ₹2 లక్షలు).`;
      missingEvidence.push('మీరు 18 సంప్రదాయ వృత్తులలో ఏ పని చేస్తున్నారు?');
      followUps.push('సీఎస్సీ (CSC) లో నమోదు ఎలా చేయాలి?');
      followUps.push('విశ్వకర్మ రుణ నిబంధనలు ఏమిటి?');
    } else if (language === 'ta') {
      answerText = `பாரம்பரிய கைவினைஞர்களுக்காக **பிஎம் விஸ்வகர்மா திட்டம்** 18 வகையான கைவினைத் தொழில்களுக்கு:\n\n• அதிகாரப்பூர்வ அடையாள அட்டை\n• **₹15,000 கருவி மானியம்**\n• தினசரி ₹500 உதவித்தொகையுடன் பயிற்சி\n• 5% வட்டியில் **₹3 லட்சம் வரை பிணையமில்லா கடன்** வழங்குகிறது.`;
      missingEvidence.push('18 பாரம்பரிய தொழில்களில் நீங்கள் எதைச் செய்கிறீர்கள்?');
      followUps.push('CSC மையத்தில் எவ்வாறு பதிவு செய்வது?');
    } else {
      answerText = `For traditional artisans and craftspeople, the **PM Vishwakarma Scheme** provides comprehensive lifecycle support across 18 trades:\n\n• Official **PM Vishwakarma Certificate & ID**\n• **₹15,000 modern toolkit e-voucher**\n• ₹500/day skill training stipend\n• **Collateral-free enterprise credit up to ₹3 Lakhs** at a concessional 5% interest rate (Tier-1: ₹1 Lakh, Tier-2: ₹2 Lakhs).`;
      missingEvidence.push('Which of the 18 traditional trades (carpenter, blacksmith, tailor, mason, potter, etc.) do you practice?');
      missingEvidence.push('Are any members of your immediate family in regular government employment?');
      followUps.push('How do I register for PM Vishwakarma at my local CSC?');
      followUps.push('What are the loan repayment terms under PM Vishwakarma?');
    }
  } else if (isBusiness) {
    const mudra = findScheme('pm-mudra');
    const svanidhi = findScheme('pm-svanidhi');
    const standup = findScheme('stand-up-india');
    if (mudra) matchedSchemes.push(mudra);
    if (svanidhi) matchedSchemes.push(svanidhi);
    if (standup) matchedSchemes.push(standup);

    if (language === 'hi') {
      answerText = `सूक्ष्म, लघु व्यवसायों और रेहड़ी-पटरी वालों के लिए ऋण योजनाएं:\n\n1. **पीएम स्वनिधि (PM SVANidhi)**: स्ट्रीट वेंडर्स के लिए ₹10,000 से **₹50,000 तक का बिना गारंटी का कार्यशील पूंजी ऋण**, समय पर भुगतान पर 7% ब्याज सब्सिडी और डिजिटल कैशबैक।\n\n2. **प्रधानमंत्री मुद्रा योजना (PMMY)**: छोटी दुकानों और उद्यमों के लिए **₹20 लाख तक** का बिना गारंटी का बैंक ऋण (शिशु ₹50k, किशोर ₹5L, तरुण ₹20L)।\n\n3. **स्टैंड-अप इंडिया**: एससी, एसटी और महिला उद्यमियों के लिए **₹10 लाख से ₹1 करोड़ तक** का बैंक ऋण।`;
      missingEvidence.push('क्या आप नया व्यवसाय शुरू कर रहे हैं या मौजूदा दुकान का विस्तार कर रहे हैं?');
      missingEvidence.push('क्या आपका बैंक क्रेडिट रिकॉर्ड साफ है (कोई डिफ़ॉल्ट नहीं)?');
      followUps.push('मुद्रा ऋण के लिए आवेदन कैसे करें?');
      followUps.push('पीएम स्वनिधि के लिए वेंडर आईडी कार्ड कैसे प्राप्त करें?');
      followUps.push('स्टैंड-अप इंडिया के लिए पात्रता जांचें');
    } else if (language === 'te') {
      answerText = `చిన్న వ్యాపారులు మరియు వీధి వ్యాపారుల కోసం రుణ పథకాలు:\n\n1. **పీఎం స్వనిధి (PM SVANidhi)**: వీధి వ్యాపారులకు ఎటువంటి పూచీకత్తు లేకుండా ₹10,000 నుండి **₹50,000 వరకు వ్యాపార రుణం**, 7% వడ్డీ రాయితీ మరియు క్యాష్‌బ్యాక్.\n\n2. **పీఎం ముద్ర యోజన (PMMY)**: చిన్న దుకాణాలు మరియు పరిశ్రమల కోసం **₹20 లక్షల వరకు** పూచీకత్తు లేని బ్యాంక్ రుణం (శిశు, కిశోర్, తరుణ్).\n\n3. **స్టాండ్-అప్ ఇండియా**: ఎస్సీ, ఎస్టీ మరియు మహిళా పారిశ్రామికవేత్తల కోసం **₹10 లక్షల నుండి ₹1 కోటి వరకు** బ్యాంక్ రుణాలు.`;
      missingEvidence.push('మీకు బ్యాంక్ డిఫాల్ట్‌లు లేని క్రెడిట్ హిస్టరీ ఉందా?');
      followUps.push('ముద్ర లోన్ కోసం ఎలా దరఖాస్తు చేయాలి?');
      followUps.push('పీఎం స్వనిధి లోన్ అర్హతలు ఏమిటి?');
    } else if (language === 'ta') {
      answerText = `சிறு வணிகர்களுக்கான கடன் திட்டங்கள்:\n\n1. **பிஎம் ஸ்வநிதி (PM SVANidhi)**: தெருவோர வியாபாரிகளுக்கு ₹10,000 முதல் **₹50,000 வரை பிணையமில்லா கடன்**.\n2. **பிஎம் முத்ரா திட்டம்**: சிறு தொழில்களுக்கு **₹20 லட்சம் வரை** வங்கி கடன்.\n3. **ஸ்டாண்ட்-அப் இந்தியா**: எஸ்சி, எஸ்டி மற்றும் பெண் தொழில்முனைவோருக்கு **₹10 லட்சம் முதல் ₹1 கோடி வரை** கடன்.`;
      missingEvidence.push('வங்கி கடன் வரலாறு சரியாக உள்ளதா?');
      followUps.push('முத்ரா கடனுக்கு எவ்வாறு விண்ணப்பிப்பது?');
    } else {
      answerText = `For micro-enterprises, small shopkeepers, and street vendors:\n\n1. **PM SVANidhi**: Collateral-free working capital micro-credit for urban street vendors in stepped tranches of ₹10,000, ₹20,000, and **₹50,000**, with 7% interest subsidy on timely repayment and digital transaction cashbacks.\n\n2. **Pradhan Mantri Mudra Yojana (PMMY)**: Institutional collateral-free loans up to **₹20 Lakhs** across Shishu (up to ₹50k), Kishore (₹50k–₹5L), and Tarun (₹5L–₹20L) tiers.\n\n3. **Stand-Up India**: Bank credit between **₹10 Lakhs and ₹1 Crore** exclusively for Scheduled Caste (SC), Scheduled Tribe (ST), and Women entrepreneurs launching greenfield ventures.`;
      missingEvidence.push('Are you starting a brand new venture or expanding an existing registered enterprise?');
      missingEvidence.push('Do you possess a Street Vendor Certificate of Vending or Urban Local Body (ULB) survey record?');
      followUps.push('How to apply for Mudra loan without bank collateral?');
      followUps.push('How to apply for PM SVANidhi via your municipal council?');
      followUps.push('Check eligibility criteria for Stand-Up India');
    }
  } else if (isPension) {
    const ignoaps = findScheme('ignoaps-pension');
    const pmjaySr = findScheme('pmjay-senior-70');
    const apDis = findScheme('ap-ntr-bharosa-disability');
    if (ignoaps) matchedSchemes.push(ignoaps);
    if (pmjaySr) matchedSchemes.push(pmjaySr);
    if (apDis) matchedSchemes.push(apDis);

    if (language === 'hi') {
      answerText = `वरिष्ठ नागरिकों के लिए प्रमुख सामाजिक सुरक्षा योजनाएं:\n\n1. **इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन (IGNOAPS)**: बीपीएल परिवारों के 60 वर्ष या उससे अधिक आयु के बुजुर्गों के लिए प्रतिमाह पेंशन सहायता।\n\n2. **आयुष्मान भारत 70+ कवर**: 70 वर्ष या उससे अधिक आयु के प्रत्येक बुजुर्ग को बिना किसी आय सीमा के ₹5,00,000 वार्षिक निशुल्क स्वास्थ्य बीमा।\n\n3. **आंध्र प्रदेश एनटीआर भरोसा पेंशन**: 60 वर्ष से अधिक आयु के बीपीएल बुजुर्गों को **₹4,000 प्रतिमाह** की पेंशन।`;
      missingEvidence.push('क्या आवेदक की आयु 60 वर्ष या उससे अधिक है? (70+ होने पर बिना शर्त स्वास्थ्य कवर)');
      missingEvidence.push('क्या परिवार के पास बीपीएल या प्राथमिकता राशन कार्ड है?');
      followUps.push('ग्राम पंचायत में वृद्धावस्था पेंशन के लिए आवेदन कैसे करें?');
      followUps.push('70+ वरिष्ठ नागरिक आयुष्मान कार्ड कैसे बनवाएं?');
    } else if (language === 'te') {
      answerText = `సీనియర్ సిటిజన్ల కోసం ముఖ్య సంక్షేమ పథకాలు:\n\n1. **ఎన్టీఆర్ భరోసా వృద్ధాప్య పింఛను (ఆంధ్రప్రదేశ్)**: 60 ఏళ్లు పైబడిన బీపీఎల్ వృద్ధులకు **నెలకు ₹4,000** పింఛను.\n\n2. **ఆయుష్మాన్ భారత్ 70+ వయ వందన**: 70 ఏళ్లు నిండిన ప్రతి ఒక్కరికీ ఎటువంటి షరతులు లేకుండా ₹5,00,000 ఉచిత ఆరోగ్య బీమా.\n\n3. **ఇందిరా గాంధీ జాతీయ వృద్ధాప్య పెన్షన్ (IGNOAPS)**: దేశవ్యాప్తంగా బీపీఎల్ వృద్ధులకు నెలవారీ ఆర్థిక సాయం.`;
      missingEvidence.push('దరఖాస్తుదారుడి వయస్సు 60 ఏళ్లు పైబడిందా?');
      missingEvidence.push('కుటుంబానికి రైస్ కార్డ్ లేదా బీపీఎల్ కార్డు ఉందా?');
      followUps.push('సచివాలయంలో వృద్ధాప్య పింఛనుకు ఎలా దరఖాస్తు చేసుకోవాలి?');
      followUps.push('70+ వృద్ధుల ఆయుష్మాన్ కార్డు వివరాలు చూడండి');
    } else if (language === 'ta') {
      answerText = `முதியோர்களுக்கான முக்கிய திட்டங்கள்:\n\n1. **முதியோர் ஓய்வூதியத் திட்டம் (IGNOAPS)**: வறுமைக் கோட்டிற்கு கீழ் உள்ள 60 வயதுக்கு மேற்பட்டவர்களுக்கு மாதாந்திர ஓய்வூதியம்.\n2. **ஆயுஷ்மான் பாரத் 70+**: 70 வயது நிரம்பிய அனைவருக்கும் வரம்பின்றி ₹5,00,000 இலவச மருத்துவக் காப்பீடு.`;
      missingEvidence.push('விண்ணப்பதாரர் வயது 60 அல்லது அதற்கு மேற்பட்டதா?');
      followUps.push('முதியோர் ஓய்வூதியத்திற்கு எவ்வாறு விண்ணப்பிப்பது?');
    } else {
      answerText = `For senior citizens, key social security measures include:\n\n1. **Indira Gandhi National Old Age Pension Scheme (IGNOAPS)**: Monthly non-contributory pension for citizens aged 60 and above living below the poverty line (BPL).\n\n2. **AP NTR Bharosa Pension (in Andhra Pradesh)**: Monthly non-contributory pension of **₹4,000 per month** for senior citizens aged 60+ with BPL Rice Card.\n\n3. **Ayushman Bharat 70+ Universal Cover**: Every citizen aged 70 and above, regardless of income bracket or existing insurance, is entitled to an exclusive ₹5,00,000 annual cashless health cover.`;
      missingEvidence.push('Is the applicant 60 years or older? (And are they 70+ for unconditional healthcare?)');
      missingEvidence.push('Does the household possess a verified BPL or NFSA Ration Card?');
      followUps.push('How to apply for Old Age Pension at the Gram Panchayat / Sachivalayam?');
      followUps.push('Check 70+ senior citizen Ayushman card enrollment');
    }
  } else if (isHousing) {
    const pmay = findScheme('pmay-g');
    if (pmay) matchedSchemes.push(pmay);

    if (language === 'hi') {
      answerText = `ग्रामीण क्षेत्रों में पक्का मकान बनाने के लिए **प्रधानमंत्री आवास योजना – ग्रामीण (PMAY-G)** के तहत **₹1.20 लाख से ₹1.30 लाख** का सीधा अनुदान दिया जाता है। साथ ही मनरेगा के तहत लगभग ₹25,000 की मजदूरी और शौचालय के लिए ₹12,000 अतिरिक्त मिलते हैं।`;
      missingEvidence.push('क्या आपका परिवार ग्रामीण क्षेत्र का निवासी है और आवास+ सूची में शामिल है?');
      missingEvidence.push('क्या परिवार के पास देश में कहीं भी पक्का मकान है?');
      followUps.push('पीएमएवाई-जी की किश्तें कैसे जारी होती हैं?');
      followUps.push('पीएमएवाई-जी दस्तावेज़ आवश्यकताएं देखें');
    } else if (language === 'te') {
      answerText = `గ్రామీణ ప్రాంతాలలో పక్కా ఇంటి నిర్మాణం కోసం **ప్రధాన మంత్రి ఆవాస్ యోజన – గ్రామీణ్ (PMAY-G)** కింద **₹1.20 లక్షల నుండి ₹1.30 లక్షల** వరకు ప్రత్యక్ష నిధులు లభిస్తాయి. ఉపాధి హామీ కూలీ మరియు మరుగుదొడ్డి నిధులు అదనం.`;
      missingEvidence.push('మీ కుటుంబం గ్రామీణ ప్రాంతంలో ఉంటూ ఆవాస్+ సర్వే జాబితాలో ఉందా?');
      missingEvidence.push('కుటుంబానికి దేశంలో ఎక్కడైనా పక్కా ఇల్లు ఉందా?');
      followUps.push('పీఎంఏవై-జీ కింద నిధులు ఎలా విడుదలవుతాయి?');
      followUps.push('పీఎంఏవై-జీ పత్రాల వివరాలు చూడండి');
    } else if (language === 'ta') {
      answerText = `கிராமப்புறங்களில் வீடு கட்டுவதற்கு **பிரதம மந்திரி ஆவாஸ் யோஜனா – கிராமின் (PMAY-G)** திட்டத்தின் கீழ் **₹1.20 லட்சம் முதல் ₹1.30 லட்சம்** வரை நேரடி மானியம் வழங்கப்படுகிறது. மேலும் 100 நாள் வேலை திட்ட கூலி மற்றும் கழிப்பறை கட்ட நிதியுதவி உண்டு.`;
      missingEvidence.push('உங்கள் குடும்பம் கிராமப்புறத்தில் உள்ளதா மற்றும் ஆவாஸ்+ பட்டியலில் உள்ளதா?');
      followUps.push('PMAY-G தவணைகள் எவ்வாறு வழங்கப்படுகின்றன?');
    } else {
      answerText = `For families without permanent shelter in rural India, **Pradhan Mantri Awas Yojana – Gramin (PMAY-G)** provides a direct grant of **₹1.20 Lakh to ₹1.30 Lakh** to construct a durable 25 sq.m pucca house with clean cooking space.\n\nThis is complemented by approximately ₹25,000 in unskilled labor wages under MGNREGS (90–95 person days) and ₹12,000 for toilet construction under Swachh Bharat Mission.`;
      missingEvidence.push('Is the applicant household resident in a rural area and verified in the Awaas+ survey?');
      missingEvidence.push('Does any family member already own a permanent pucca house anywhere in India?');
      followUps.push('How are construction installments released under PMAY-G?');
      followUps.push('Check PMAY-G document requirements');
    }
  } else {
    // General discovery response showcasing across categories
    const sample1 = findScheme('pm-jay');
    const sample2 = findScheme('ap-ntr-bharosa-disability');
    const sample3 = findScheme('pm-kisan');
    if (sample1) matchedSchemes.push(sample1);
    if (sample2) matchedSchemes.push(sample2);
    if (sample3) matchedSchemes.push(sample3);

    if (language === 'hi') {
      answerText = `CivicAI भारत की 20+ सत्यापित जन कल्याणकारी योजनाओं (केंद्रीय और आंध्र प्रदेश राज्य योजनाएं) को समझने में आपकी सहायता करता है।\n\nसटीक जानकारी के लिए कृपया अपने बारे में संक्षेप में बताएं:\n• क्या आप **विद्यार्थी**, **किसान**, **दिव्यांगजन (PwD)**, **श्रमिक / मजदूर**, **छोटा व्यापारी**, या **वरिष्ठ नागरिक** हैं?\n• क्या आप **छात्रवृत्ति**, **दिव्यांग पेंशन**, **कृषि सहायता**, **मुफ्त सौर ऊर्जा (सोलर)**, या **₹5 से ₹25 लाख का स्वास्थ्य बीमा** खोज रहे हैं?`;
      missingEvidence.push('आपका प्राथमिक व्यवसाय, राज्य (आंध्र प्रदेश / अन्य), या नागरिक श्रेणी');
      missingEvidence.push('आप किस प्रकार का कल्याणकारी लाभ खोज रहे हैं');
      followUps.push('दिव्यांगजनों (PwD) के लिए पेंशन और सहायक उपकरण योजनाएं क्या हैं?');
      followUps.push('आंध्र प्रदेश की एनटीआर भरोसा और तल्लिकी वंदनम योजनाएं बताएं');
      followUps.push('पीएम सूर्य घर योजना के तहत रूफटॉप सोलर सब्सिडी कैसे मिलती है?');
      followUps.push('असंगठित मजदूरों के लिए ई-श्रम और पेंशन योजनाएं बताएं');
    } else if (language === 'te') {
      answerText = `భారత ప్రభుత్వ మరియు ఆంధ్రప్రదేశ్ రాష్ట్ర ప్రభుత్వ 20+ ధృవీకరించబడిన సంక్షేమ పథకాలను సులభంగా అర్థం చేసుకోవడానికి CivicAI మీకు సహాయం చేస్తుంది.\n\nమీకు ఖచ్చితమైన సమాచారం ఇవ్వడానికి మీ గురించి కొద్దిగా తెలియజేయండి:\n• మీరు **రైతు**, **విద్యార్థి**, **దివ్యాంగులు (PwD)**, **కార్మికుడు/కూలీ**, **చిరు వ్యాపారి** లేదా **సీనియర్ సిటిజన్** నా?\n• మీరు **ఎన్టీఆర్ భరోసా పింఛను**, **తల్లికి వందనం**, **అన్నదాత సుఖీభవ**, **డా. ఎన్టీఆర్ ఆరోగ్యశ్రీ**, లేదా **పీఎం సూర్య ఘర్ సోలార్** కోసం చూస్తున్నారా?`;
      missingEvidence.push('మీ ప్రధాన వృత్తి, రాష్ట్రం (ఆంధ్రప్రదేశ్ / ఇతర), లేదా పౌర విభాగం');
      missingEvidence.push('మీకు కావాల్సిన సంక్షేమ సహాయం రకం');
      followUps.push('దివ్యాంగులకు ఎన్టీఆర్ భరోసా పింఛను ఎంత లభిస్తుంది?');
      followUps.push('ఆంధ్రప్రదేశ్ తల్లికి వందనం మరియు అన్నదాత సుఖీభవ వివరాలు చెప్పండి');
      followUps.push('పీఎం సూర్య ఘర్ ఉచిత సౌర విద్యుత్ సబ్సిడీ వివరాలు ఏమిటి?');
      followUps.push('ఈ-శ్రమ్ కార్డ్ ద్వారా లభించే ప్రయోజనాలు ఏమిటి?');
    } else if (language === 'ta') {
      answerText = `இந்திய அரசு மற்றும் ஆந்திர மாநிலத்தின் 20+ நலத்திட்டங்களை எளிய முறையில் புரிந்துகொள்ள CivicAI உங்களுக்கு உதவுகிறது.\n\nசரியான வழிகாட்டுதலை வழங்க உங்கள் சூழ்நிலையைத் தெரிவிக்கவும்:\n• நீங்கள் **விவசாயி**, **மாணவர்**, **மாற்றுத்திறனாளி (PwD)**, **தொழிலாளி**, **சிறு வணிகர்** அல்லது **முதியோரா**?\n• உங்களுக்கு **கல்வி உதவித்தொகை**, **ஓய்வூதியம்**, **விவசாய மானியம்**, **சூரிய மின்சக்தி திட்டம்** அல்லது **மருத்துவக் காப்பீடு** தேவையா?`;
      missingEvidence.push('உங்கள் முதன்மை தொழில் அல்லது வகை');
      missingEvidence.push('நீங்கள் எதிர்பார்க்கும் நலத்திட்ட உதவி வகை');
      followUps.push('மாற்றுத்திறனாளிகளுக்கான திட்டங்கள் யாவை?');
      followUps.push('சூரிய மின்சக்தி திட்டம் (PM Surya Ghar) பற்றி கூறவும்');
      followUps.push('தொழிலாளர்களுக்கான e-Shram திட்ட நன்மைகள் என்ன?');
    } else {
      answerText = `CivicAI helps you discover and navigate India’s 20+ verified public welfare schemes across Central and Andhra Pradesh state jurisdictions.\n\nWe provide plain-language guidance, clear document checklists, and direct links to official department portals. To give you the most accurate assistance, could you share a little about your situation?\n\n• Are you a **student**, **farmer**, **person with disability (PwD)**, **unorganised worker**, **small business owner**, or **senior citizen**?\n• Are you seeking **AP NTR Bharosa Pension**, **Thalliki Vandanam**, **Annadata Sukhibhava**, **PM Surya Ghar Solar Subsidy**, or **cashless healthcare**?`;
      missingEvidence.push('Your primary occupation or citizen category');
      missingEvidence.push('Your state of residence (e.g., Andhra Pradesh vs. other states)');
      missingEvidence.push('The type of support or welfare benefit you are exploring');
      followUps.push('What schemes support Persons with Disabilities (PwD)?');
      followUps.push('Tell me about Andhra Pradesh NTR Bharosa & Thalliki Vandanam');
      followUps.push('How does PM Surya Ghar rooftop solar subsidy work?');
      followUps.push('What social security schemes exist for unorganised workers?');
    }
  }

  const citations = matchedSchemes.map(s => ({
    name: s.officialSource.name,
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
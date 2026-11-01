import { useState, useEffect, useRef, useCallback } from 'react';

// Declaration for SpeechRecognition in browsers
interface IWindow extends Window {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
}

interface UseSpeechRecognitionProps {
  locale: string;
  onTranscriptChange: (text: string) => void;
  onErrorChange?: (error: string | null) => void;
}

export const useSpeechRecognition = ({
  locale,
  onTranscriptChange,
  onErrorChange
}: UseSpeechRecognitionProps) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const win = window as unknown as IWindow;
    return !!(win.SpeechRecognition || win.webkitSpeechRecognition);
  });
  const recognitionRef = useRef<any>(null);
  const finalTranscriptRef = useRef('');

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // already stopped
      }
    }
    setIsListening(false);
  }, []);

  const cancelListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {
        // already aborted
      }
    }
    setIsListening(false);
    finalTranscriptRef.current = '';
  }, []);

  const startListening = useCallback(() => {
    const win = window as unknown as IWindow;
    const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      if (onErrorChange) {
        onErrorChange('unsupported');
      }
      return;
    }

    // Stop any existing instance
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {
        // ignore
      }
    }

    try {
      const recognition = new SpeechRecognitionClass();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = locale;
      recognitionRef.current = recognition;

      finalTranscriptRef.current = '';

      recognition.onstart = () => {
        setIsListening(true);
        if (onErrorChange) onErrorChange(null);
      };

      recognition.onresult = (event: any) => {
        let interimText = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const result = event.results[i];
          const transcriptChunk = result[0].transcript;
          if (result.isFinal) {
            finalTranscriptRef.current += (finalTranscriptRef.current ? ' ' : '') + transcriptChunk.trim();
          } else {
            interimText += transcriptChunk;
          }
        }

        const combined = (finalTranscriptRef.current + (interimText ? ' ' + interimText : '')).trim();
        if (combined) {
          onTranscriptChange(combined);
        }
      };

      recognition.onerror = (event: any) => {
        const error = event.error;
        if (error === 'no-speech') {
          // Normal when silent, don't interrupt aggressively
          if (onErrorChange) onErrorChange('no-speech');
        } else if (error === 'not-allowed' || error === 'service-not-allowed') {
          if (onErrorChange) onErrorChange('not-allowed');
          setIsListening(false);
        } else {
          if (onErrorChange) onErrorChange(error || 'network');
          setIsListening(false);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      console.warn('SpeechRecognition start failed', e);
      setIsListening(false);
      if (onErrorChange) onErrorChange('not-allowed');
    }
  }, [locale, onTranscriptChange, onErrorChange]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return {
    isListening,
    isSupported,
    startListening,
    stopListening,
    cancelListening
  };
};

import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
const sampleText="बौने पौधों की ऊपरी पत्तियों पर धूल भरे भूरे धब्बे। जिंक सल्फेट 2 ग्राम प्रति लीटर पानी या EDTA जिंक 12% @ 100 ग्राम का छिड़काव करें। उभरती हुई पत्तियों का शिराओं के बीच का पीलापन और क्लोरोसिस। पूरी पत्तियाँ हरितहीन हो जाती हैं और फिर बहुत पीली हो जाती हैं, फेरस सल्फेट (FeSO4) के छिड़काव से नियंत्रण करें"
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    const { text } = await req.json();

    const ttsResponse = await openai.audio.speech.create({
      model: 'tts-1-hd',
      voice: 'onyx',
      input: text,
    });

    // Get the audio data as an ArrayBuffer
    const audioData = await ttsResponse.arrayBuffer();

    // Create a Response object with the audio data
    const response = new NextResponse(audioData, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
      },
    });

    return response;
  } catch (error) {
    console.error('Error fetching TTS response:', error);
    return NextResponse.json({ error: 'Error fetching TTS response' }, { status: 500 });
  }
}
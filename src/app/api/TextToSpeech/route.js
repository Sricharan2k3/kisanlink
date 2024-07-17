import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    const { text } = await req.json();

    const ttsResponse = await openai.audio.speech.create({
      model: 'tts-1-hd',
      voice: 'onyx',
      input: text || "Hello, this is a test message.",
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
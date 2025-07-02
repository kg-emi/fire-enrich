import { NextRequest, NextResponse } from 'next/server';
import { GeminiService } from '@/lib/services/gemini';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 });
    }
    const gemini = new GeminiService(process.env.GEMINI_API_KEY);
    const fieldDefinitions = await gemini.generateFields(prompt);
    return NextResponse.json({ success: true, data: fieldDefinitions });
  } catch (error) {
    console.error('Field generation error:', error);
    return NextResponse.json({ error: 'Failed to generate fields' }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';

export async function GET() {
  const environmentStatus = {
    FIRECRAWL_API_KEY: !!process.env.FIRECRAWL_API_KEY,
    GEMINI_API_KEY: !!process.env.GEMINI_API_KEY,
    ANTHROPIC_API_KEY: !!process.env.ANTHROPIC_API_KEY,
    FIRESTARTER_DISABLE_CREATION_DASHBOARD: process.env.FIRESTARTER_DISABLE_CREATION_DASHBOARD === 'true',
  };

  return NextResponse.json({ environmentStatus });
} 
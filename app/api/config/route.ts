import { NextResponse } from 'next/server';

export async function GET() {
  const googleMapsApiKey =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API ?? process.env.GOOGLE_MAPS_API ?? '';

  return NextResponse.json(
    { googleMapsApiKey },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  );
}

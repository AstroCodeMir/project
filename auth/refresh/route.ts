import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const { refreshToken } = data;

  // Later: verify refreshToken, issue new accessToken
  return NextResponse.json({
    message: 'Token refreshed',
    accessToken: 'new-access-token-placeholder',
  });
}

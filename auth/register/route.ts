import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const { email, password, role } = data;

  // Later: validate + hash password + save with Prisma
  return NextResponse.json({
    message: 'User registered successfully',
    user: { email, role },
  });
}

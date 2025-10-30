import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const { email, password } = data;

  // Temporary mock logic
  if (email === 'admin@example.com' && password === 'password123') {
    return NextResponse.json({ message: 'Login successful', role: 'admin' });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}

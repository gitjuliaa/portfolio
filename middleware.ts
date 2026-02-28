import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const runtime = 'edge'; // THE MAGIC LINE

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// Add this to tell Next exactly which paths to watch
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
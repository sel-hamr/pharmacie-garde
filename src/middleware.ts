import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let response = NextResponse.next();
  response.headers.set("x-pathname", request.nextUrl?.pathname);
  response.headers.set("x-origin", request.nextUrl?.origin);
  return response;
}

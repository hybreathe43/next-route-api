import { NextRequest, NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json({ name: "sahil", class: "23", subject: "eng" });
}

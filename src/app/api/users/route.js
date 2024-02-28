import { user } from "@/utilty/db";
import { NextRequest, NextResponse } from "next/server";

export function GET(request, content) {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

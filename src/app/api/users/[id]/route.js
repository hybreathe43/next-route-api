import { user } from "@/utilty/db";
import { NextRequest, NextResponse } from "next/server";

export function GET(request, content) {
  //   console.log();

  const data = user.filter((item) => item.class === content.params.id);
  return NextResponse.json(
    data.length == 0
      ? { result: "Not found", status: false }
      : { result: data[0], status: false },
    { status: 200 }
  );
}

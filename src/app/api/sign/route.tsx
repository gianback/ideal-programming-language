import { openaiService } from "@/services";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const sign = await req.json();
  try {
    const response = await openaiService(sign);
    return NextResponse.json(response.data.choices[0].text);
  } catch (error) {
    return NextResponse.error();
  }
}

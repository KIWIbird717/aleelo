import { Logger } from "@/shared/lib/utils/logger/Logger";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { cookies } = await req.json();

  const response = NextResponse.json({});

  if (!cookies || !Array.isArray(cookies)) {
    return response;
  }

  // Устанавливаем cookies
  cookies.forEach((cookie: any) => {
    response.cookies.set(cookie);
  });

  // Отправляем успешный ответ
  return response;
}

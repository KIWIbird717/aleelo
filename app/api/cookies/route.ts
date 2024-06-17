import { Logger } from "@/shared/lib/utils/logger/Logger";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const logger = new Logger("GET api/cookies");

  const cookies = request.cookies.getAll();
  logger.debug("All cookies", cookies);

  const response = NextResponse.json({ cookies: cookies });
  return response;
};

export const POST = async (request: NextRequest) => {
  const logger = new Logger("POST api/cookies");
  const body = await request.json();

  if (typeof body.jwt === "undefined") {
    return NextResponse.json(
      { message: "property 'jwt' was not provider in the body" },
      { status: 400 },
    );
  }

  const response = NextResponse.json({ msg: "хз пока" });
  response.cookies.set("jwt", body.jwt);
  return response;
};

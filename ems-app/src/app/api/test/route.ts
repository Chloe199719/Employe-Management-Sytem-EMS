import { NextRequest } from "next/server";
import { Webhook } from "svix";

export async function POST(req: NextRequest) {
  const payload1 = await req.json();
  const payload = payload1.toString();
  req.headers;

  const headers = req.headers;
  console.log(headers);

  const wh = new Webhook(process.env.SVIX_WEBHOOK_SECRET!);
  // let msg;
  // try {
  //   msg = wh.verify(payload, headers);
  // } catch (err) {
  //   return new Response("POST");
  // }

  // // Do something with the message...

  return new Response("POST");
}

import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const svix_id = req.headers.get("svix-id");
    const svix_timestamp = req.headers.get("svix-timestamp");
    const secretBytes = new Buffer(
      process.env.CLERK_SECRET_KEY!.split("_")[1],
      "base64"
    );
    const signedContent = `${svix_id}.${svix_timestamp}.${req.body}`;
    const signature = crypto
      .createHmac("sha256", secretBytes)
      .update(signedContent)
      .digest("base64");
    const test = signature === req.headers.get("svix-signature");
    // const payload = req.body;
    // console.log(payload);

    // const headers = req.headers;
    // console.log(headers);

    // const wh = new Webhook(process.env.CLERK_SECRET_KEY!);
    // let msg;

    // msg = wh.verify(payload, headers);

    // // // Do something with the message...

    return new Response(
      JSON.stringify({ message: test, req: svix_id, svix_timestamp })
    );
  } catch (error) {
    console.log(error);
    return new Response("POST");
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

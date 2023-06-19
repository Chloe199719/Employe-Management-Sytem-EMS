export async function POST(req: Request) {
  try {
    const token = req.headers.get("Bearer");
    console.log(token, token === process.env.CLERK_SECRET_KEY);
    return new Response("POST");
  } catch (error) {
    console.log(error);
    return new Response("POST");
  }
}

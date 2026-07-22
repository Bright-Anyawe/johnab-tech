import { NextResponse } from "next/server";
import { initializeTransaction } from "@/lib/paystack";

export async function POST(request: Request) {
  try {
    const { email, metadata } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin") || "https://johnabtech.com.ng";

    const result = await initializeTransaction({
      email,
      amount: 1000000,
      metadata: {
        product: "AI Mastery Class",
        ...metadata,
      },
      callbackUrl: `${origin}/academy?payment=success`,
    });

    if (!result.status) {
      return NextResponse.json(
        { error: result.message },
        { status: 400 }
      );
    }

    return NextResponse.json(result.data);
  } catch {
    return NextResponse.json(
      { error: "Failed to initialize payment" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { verifyTransaction } from "@/lib/paystack";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const reference = searchParams.get("reference");

    if (!reference) {
      return NextResponse.json(
        { error: "Reference is required" },
        { status: 400 }
      );
    }

    const result = await verifyTransaction(reference);

    if (!result.status) {
      return NextResponse.json(
        { error: result.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      verified: result.data.status === "success",
      reference: result.data.reference,
      amount: result.data.amount,
      currency: result.data.currency,
      customer: result.data.customer.email,
      paidAt: result.data.paid_at,
      channel: result.data.channel,
      metadata: result.data.metadata,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}

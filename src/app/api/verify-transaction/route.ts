import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { reference } = await request.json();

  if (!reference) {
    return NextResponse.json({ message: "Transaction reference is required" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.status && data.data.status === "success") {
      return NextResponse.json({
        message: "Transaction verified successfully",
        data: data.data,
      });
    } else {
      return NextResponse.json({
        message: "Transaction verification failed",
        data,
      });
    }
  } catch (error: any) {
    console.error("Error verifying transaction:", error.message);
    return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
  }
}

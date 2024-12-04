import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const { email, amount, metadata } = await request.json();

    // Validate input fields
    if (!email || !amount || !metadata) {
      return NextResponse.json(
        { message: "Email and amount are required" },
        { status: 400 }
      );
    }

    // Make a request to the Paystack API
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, amount, metadata }),
    });

    // Parse the Paystack API response
    const data = await response.json();

    // Check if the initialization was successful
    if (response.ok && data.status) {
      return NextResponse.json(
        { message: "Transaction initialized successfully", data: data.data},
        { status: 200}
      )
    } else {
      return NextResponse.json(
        { message: "Transaction initialization failed", error: data.message },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Error initializing transaction:", error.message);

    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

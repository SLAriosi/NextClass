import { NextResponse } from "next/server";

export async function GET(
    req: Request
) {

    console.log('Hello World, NOVU')
    return NextResponse.json({message: "Hello-World backend papai"})
}
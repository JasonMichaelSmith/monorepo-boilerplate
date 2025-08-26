import { NextRequest, NextResponse } from 'next/server'

// A simple API example: `http://localhost:3000/api/data`
// Note that these API routes are specifically used with hooks to satisfy client component requests
/* eslint-disable */
export async function GET(request: NextRequest) {
    try {
        const url = new URL("https://api.restful-api.dev/objects");

        const headers = new Headers({
            "Content-Type": "application/json",
        });

        const response = await fetch(url, { headers });

        if (!response.ok) {
            return NextResponse.json({ error: response.statusText }, { status: response.status });
        }

        const data = await response.json();

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
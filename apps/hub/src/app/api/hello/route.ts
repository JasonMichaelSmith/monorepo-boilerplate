import { NextRequest, NextResponse } from 'next/server'

// A simple API example: `http://localhost:3000/api/hello?name=Jason`
/* eslint-disable */
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const name = searchParams.get('name') || 'World'

        return NextResponse.json(
            {
                message: `Hello, ${name}!`,
                timestamp: new Date().toISOString(),
                method: 'GET'
            },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
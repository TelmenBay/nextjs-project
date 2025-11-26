import { NextResponse } from 'next/server';
import todosData from '../../../db.json';

export async function GET() {
    return NextResponse.json(todosData.todos);
}
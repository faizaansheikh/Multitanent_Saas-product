// app/api/signup/route.ts
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password } = body.data;
      


        // Connect to main DB
        const mainDb = await mysql.createConnection({
            host: process.env.NEXT_PUBLIC_DB_HOST,
            user: process.env.NEXT_PUBLIC_DB_USER,
            password: process.env.NEXT_PUBLIC_DB_PASS,
            database: process.env.NEXT_PUBLIC_DB_NAME,
        });
        let key = process.env.NEXT_PUBLIC_SECRET || ''
        let users:any = await mainDb.execute(`SELECT * FROM tenants;`);
        let verifyUser = users[0].filter((x:any)=>x.user_email === email)
        if(verifyUser.length > 0){
            const token = jwt.sign(verifyUser[0], key, { expiresIn: '1h' });
       
            
            return NextResponse.json({ message: 'Login successfull!',data:{...verifyUser[0],token:token} }, { status: 201 });
        }else{
            return NextResponse.json({ message: 'User not found' }, { status: 400 });
        }
        
        

     
    } catch (error: any) {
        console.error('Signup error:', error);
        return NextResponse.json({ message: 'Signup failed', error: error.message }, { status: 500 });
    }
}

// app/api/signup/route.ts
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body.data;
    console.log('body',body);
    
    const tenantId = uuidv4();
    const dbName = `todo_${tenantId.replace(/-/g, '_')}`;
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(`Connecting to database`,process.env.NEXT_PUBLIC_DB_NAME);

    // Connect to main DB
    const mainDb = await mysql.createConnection({
      host: process.env.NEXT_PUBLIC_DB_HOST,
      user: process.env.NEXT_PUBLIC_DB_USER,
      password: process.env.NEXT_PUBLIC_DB_PASS,
      database: process.env.NEXT_PUBLIC_DB_NAME,
    });

    // 1. Register tenant
    await mainDb.execute(
      `INSERT INTO tenants (id, user_email, db_name, name) VALUES (?, ?, ?, ?)`,
      [tenantId, email, dbName, name]
    );

    // 2. Create tenant DB
    await mainDb.execute(`CREATE DATABASE \`${dbName}\``);

    // 3. Connect to tenant DB
    const tenantDb = await mysql.createConnection({
      host: process.env.NEXT_PUBLIC_DB_HOST,
      user: process.env.NEXT_PUBLIC_DB_USER,
      password: process.env.NEXT_PUBLIC_DB_PASS,
      database: dbName,
    });

    // 4. Setup schema
    await tenantDb.execute(`
      CREATE TABLE users (
        id CHAR(36) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password TEXT NOT NULL
      );
    `);

    await tenantDb.execute(`
      CREATE TABLE todos (
        id CHAR(36) PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT FALSE,
        due_date DATE
      );
    `);

    // 5. Add user
    await tenantDb.execute(
      `INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`,
      [tenantId, name, email, hashedPassword]
    );

    return NextResponse.json({ message: 'Signup successful', tenantId }, { status: 201 });
  } catch (error: any) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Signup failed', error: error.message }, { status: 500 });
  }
}

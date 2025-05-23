import { Databases, ID, Query } from "appwrite";
import client from "../../.lib/appwrite_client"
import { NextResponse } from "next/server";

const db = new Databases(client)
export async function createInterpretation(data: { term: string, interpretation: string }) {
  try {
    const response = await db.createDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, "Interpretations", ID.unique(), data);
    return response;
  } catch (error) {
    console.error("Error creating interpretation", error);
    throw new Error("Failed");
  }
}

export async function fetchInterpretation() {
  try {
    const response = await db.listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, "Interpretations", [Query.orderDesc("$createdAt")]);
    return response;
  } catch (error) {
    console.error("Error fetching interpretation", error);
    throw new Error("Failed");
  }
}


export async function POST(req: Request) {
  try {
    const { term, interpretation } = await req.json();
    const data = { term, interpretation };
    const response = await createInterpretation(data);
    return NextResponse.json({ message: "Interpretation added" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create interpretation" }, { status: 500 })
  }
}
export async function GET() {
  try {

    const response = await fetchInterpretation();
    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch interpretation" }, { status: 500 })
  }
}
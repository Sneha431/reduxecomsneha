import { Databases } from "appwrite";
import client from "../../../.lib/appwrite_client"
import { NextResponse } from "next/server";

const db = new Databases(client);
export async function fetchInterpretation(id: string) {
  try {
    const response = await db.getDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, "Interpretations",
      id);
    return response;
  } catch (error) {
    console.error("Error fetching interpretation", error);
    throw new Error("Failed");
  }
}

export async function deleteInterpretation(id: string) {
  try {
    const response = await db.deleteDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, "Interpretations",
      id);
    return response;
  } catch (error) {
    console.error("Error deleting interpretation", error);
    throw new Error("Failed");
  }
}
export async function updateInterpretation(data: { term: string, interpretation: string }, id: string) {
  try {

    const response = await db.updateDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, "Interpretations", id, data);
    return response;
  } catch (error) {
    console.error("Error deleting interpretation", error);
    throw new Error("Failed");
  }
}
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {


    const response = await deleteInterpretation(params.id);
    return NextResponse.json({ message: "Interpretation deleted" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete interpretation" }, { status: 500 })
  }
}
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const response = await fetchInterpretation(params.id);
    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetched interpretation" }, { status: 500 })
  }
}
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {

    const data = await req.json();

    const response = await updateInterpretation(data, params.id);
    return NextResponse.json({ message: "Interpretation updated" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update interpretation" }, { status: 500 })
  }
}
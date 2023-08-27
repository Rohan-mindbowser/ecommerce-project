import Products from "@/app/models/Products";
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const connection = await connect();
    const products = await Products.find();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

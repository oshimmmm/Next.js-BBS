import { NextResponse } from "next/server";
// import prisma from "../../../lib/prismaClient";
import { supabase } from "@/lib/supabaseClient";

export async function GET(req: Request) {
  const allBBSPosts = await supabase.from("Post").select("*");
  return NextResponse.json(allBBSPosts);
}

export async function POST(req: Request) {
  // リクエストボディからデータを取得
  const { username, title, content } = await req.json();

  // データベースの"Post"テーブルにデータを挿入
  const { data, error } = await supabase
      .from("Post")  // テーブル名を指定
      .insert([
          { username, title, content }  // 挿入するデータをオブジェクトとして指定
      ]);

  // エラーハンドリング
  if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
  }

  // 挿入が成功した場合、挿入されたデータを返す
  return NextResponse.json(data);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  const { error } = await supabase.from("Post").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ message: "Post deleted successfully" });
}

// export async function GET(req: Request) {
//   const allBBSPosts = await prisma.post.findMany();
//   return NextResponse.json(allBBSPosts);
// }

// export async function POST(req: Request) {
//   const { username, title, content } = await req.json();

//   const post = await prisma.post.create({
//     data: {
//       username,
//       title,
//       content,
//     },
//   });
//   return NextResponse.json(post);
// }
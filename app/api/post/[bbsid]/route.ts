import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { BBSData } from "@/app/types/types";

export async function GET(
    req: Request,
    { params }: { params: { bbsid: string }}
) {
    const bbsid = params.bbsid;
    const { data, error } = await supabase
        .from("Post")
        .select("*")
        .eq("id", parseInt(bbsid))
        .single(); // 単一のデータを取得する

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}




async function getDetailBBSData(id: number) {
    const response = await fetch(`http://localhost:3000/api/post/${id}`, {
        cache: "no-store",
    });

    const bbsDetailData: BBSData = await response.json();

    return bbsDetailData;
};
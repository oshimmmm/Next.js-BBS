import { supabase } from "@/lib/supabaseClient";
import React from "react";
import { BBSData } from "@/app/types/types";
import Link from "next/link";

const BBSDetailPage = async ({ params }: { params: { bbsid: string } }) => {
    const response = await fetch(`http://localhost:3000/api/post/${params.bbsid}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const bbsDetailData: BBSData = await response.json();
    console.log("bbsDetailData", bbsDetailData);

    return (
        <div>
            <div>
                <h1>{bbsDetailData.title}</h1>
                <p>{bbsDetailData.content}</p>
                {/* 他のデータを表示する */}
            </div>
            <Link href={"/"} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md">戻る</Link>
        </div>
    );
};

export default BBSDetailPage;
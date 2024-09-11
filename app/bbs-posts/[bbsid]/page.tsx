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
    const { title, content, username } = bbsDetailData;

    return (
        <div className="mx-auto max-w-4xl p-4">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-gray-700">{username}</p>
            </div>
            <div className="mb-8">
                <p className="text-gray-900">{content}</p>
            </div>
             {/* 他のデータを表示する */}

            <Link href={"/"} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md">戻る</Link>
        </div>
    );
};

export default BBSDetailPage;
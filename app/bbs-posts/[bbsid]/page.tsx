import { supabase } from "@/lib/supabaseClient";
import React from "react";
import { BBSData } from "@/app/types/types";

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
            <h1>{bbsDetailData.title}</h1>
            <p>{bbsDetailData.content}</p>
            {/* 他のデータを表示する */}
        </div>
    );
};

export default BBSDetailPage;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import BBSCard from "./BBSCard";
import { BBSData } from "../types/types";


interface BBSDataResponse {
    error: any;
    data: BBSData[];
    count: number | null;
    status: number;
    statusText: string;
}

interface BBSALLDataProps {
    bbsAllData: BBSDataResponse;
}

const BBSCardList = ({ bbsAllData }: BBSALLDataProps) => {
    const data = bbsAllData.data || [];
    return (
        <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
            {data.map((bbsData: BBSData) => (
                <BBSCard key={bbsData.id } bbsData={bbsData}/>
            ))}
        </div>
    );
};

export default BBSCardList;
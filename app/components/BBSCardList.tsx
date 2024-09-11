import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import BBSCard from "./BBSCard";
import { BBSData } from "../types/types";

interface BBSALLDataProps {
    bbsAllData: BBSData[];
}

const BBSCardList = ({ bbsAllData }: BBSALLDataProps) => {
    console.log("bbsAllData is :", {bbsAllData});
    return (
        <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
            {bbsAllData.map((bbsData: BBSData) => (
                <BBSCard key={bbsData.id } bbsData={bbsData}/>
            ))}
        </div>
    );
};

export default BBSCardList;
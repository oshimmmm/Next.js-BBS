"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react"
import { BBSData } from "../types/types";
import { deletePost } from "../api/post/route";

interface BBSDataProps {
    bbsData: BBSData;
}

const BBSCard = ({bbsData}: BBSDataProps) => {
    const { id, title, content, createdAt, username } = bbsData;
    const handleDelete = async (id: number) => {
        await deletePost(id);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{username}</CardDescription>
            </CardHeader>
            <CardContent>
                {content}
            </CardContent>
            <CardFooter className="flex justify-between">
                <Link href={`/bbs-posts/${id}`} className="text-blue-500">Read more</Link>
                <span className="cursor-pointer text-red-500" onClick={() => handleDelete(id)}>削除</span>
            </CardFooter>
        </Card>
    );
};

export default BBSCard;
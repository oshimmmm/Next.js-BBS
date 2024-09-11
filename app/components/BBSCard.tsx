"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react"
import { BBSData } from "../types/types";
import { useRouter } from "next/navigation";

interface BBSDataProps {
    bbsData: BBSData;
}

const BBSCard = ({bbsData}: BBSDataProps) => {
    const router = useRouter();

    const { id, title, content, createdAt, username } = bbsData;
    const handleDelete = async (id: number) => {
        try {
            const res = await fetch(`/api/post`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }), // 削除したいIDを送信
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "削除に失敗しました");
            }

            alert("削除に成功しました");
            // 必要であれば、削除後にリロードやデータの再取得を行う
            router.push("/");
            router.refresh();
        } catch (error: unknown) {
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("不明なエラーが発生しました");
            }
            console.error("削除中にエラーが発生しました:", error);
        }
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
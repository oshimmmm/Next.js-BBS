import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import BBSCardList from "./components/BBSCardList";
// import prisma from "../lib/prismaClient";
import { BBSData } from "./types/types";

async function getBBSAllData(): Promise<BBSData[]> {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store"
  });

  const result = await response.json();
  
  return result.data || [];
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();
  console.log("bbsAllData", {bbsAllData})
  
  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData}/>
    </main>
  );
};

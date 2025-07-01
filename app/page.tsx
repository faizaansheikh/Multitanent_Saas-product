'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Login from "./login/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  // useEffect(()=>{
  //     router.push('/login')
  // },[])

  return (
    <>
     hello world!
    </>
  );
}

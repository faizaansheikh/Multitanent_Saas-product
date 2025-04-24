'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Login from "./login/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
      router.push('/login')
  },[])

  return (
    <>
      {/* <div
        className={`text-2xl text-center m-[30px] list-none p-2 ${isHide ? "" : "d flex"
          } items-center justify-between bg-[#9AA6B2] text-[#F8FAFC] rounded-md transition-all duration-300 ease-in-out ${isHide ? "max-h-[500px]" : "max-h-[80px]"
          }`}
      >
        <div className="d flex items-center justify-between">
          <li className="p-3 hidden md:flex">Dashboard</li>
          <li className="p-3 hidden md:flex">Home</li>
          <li className="p-3 hidden md:flex">About</li>
          <li className="p-3 hidden md:flex">Teams</li>
          <li className="p-3 hidden md:flex">Projects</li>
          <div
            className="sm:hidden cursor-pointer"
            onClick={() => setIsHide(!isHide)}
          >
            Collapse
          </div>
        </div>
        {isHide && (
          <div>
            <li className="p-2 text-[20px] flex md:hidden mt-2">Dashboard</li>
            <li className="p-2 text-[20px] flex md:hidden">Home</li>
            <li className="p-2 text-[20px] flex md:hidden">About</li>
            <li className="p-2 text-[20px] flex md:hidden">Teams</li>
            <li className="p-2 text-[20px] flex md:hidden">Projects</li>
          </div>
        )}
        <div className="d flex items-center justify-between">
          <li className="p-3">Cart</li>
          <li className="p-3">Bellicon</li>
          <li className="p-3">Profile</li>
        </div>
      </div>

      <div className="flex flex-wrap m-[30px]">

      <div className="w-full md:w-1/2 h-[200px] d flex">
          <div className="bg-[red] w-[50%] h-full "></div>

          <div className="bg-[green] w-[50%] h-full">
            <div className="bg-[green] w-full h-[50%]"></div>
            <div className="bg-[pink] w-full h-[50%]"></div>
          </div>



        </div>

        <div className="w-full md:w-1/2 p-2 bg-blue-400 h-[200px]"></div>

      </div> */}
      {/* <Login /> */}
    </>
  );
}

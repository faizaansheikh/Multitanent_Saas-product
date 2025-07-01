'use client';
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
export default function Page() {
    const [toggle, setToggle] = useState(false)

    return (
        <>
           {toggle ? <Register setToggle={setToggle}/> : <Login setToggle={setToggle}/>}
   

        </>
    );
}

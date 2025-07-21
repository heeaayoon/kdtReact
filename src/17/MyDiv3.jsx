import { TbMathGreater } from "react-icons/tb";
import { useState } from "react";
import TailButton from "../component/TailButton";
export default function MyDiv3({n,setN}) {
    const m3 = "myDiv3"
    const handleUp = () =>{
        setN(n+1)
        console.log(n);
    }

    const handleDown = () =>{
        setN(n-1)
        console.log(n);
    }

  return (
    <div className="w-9/10 h-4/5 bg-indigo-200 text-zinc-50 font-bold
                    p-5 text-2xl">
      <div className="flex">
        {m3}
      </div>
      <div className="flex mt-10">
        <TailButton caption ="증가"
                    color = "blue"
                    onHandle ={handleUp}/>
        <TailButton caption ="감소"
                    color = "blue"
                    onHandle ={handleDown}/>
      </div>
    </div>
  )
}

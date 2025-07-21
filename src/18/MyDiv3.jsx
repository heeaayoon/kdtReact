import { TbMathGreater } from "react-icons/tb";
//import { useState } from "react";
import TailButton from "../component/TailButton";
import { useAtom } from "jotai";
import {cntAtom} from "./CntAtom"; //CntAtom.jsx에서 선언한 전역변수 import해서 사용

export default function MyDiv3() {
    const m3 = "myDiv3"
    const [n,setN] = useAtom(cntAtom);
    //n2는 cntAtom2이용 -> 선언하지 않아도 됨
  return (
    <div className="w-9/10 h-4/5 bg-indigo-200 text-zinc-50 font-bold
                    p-5 text-2xl">
      <div className="flex">
        {m3}
      </div>
      <div className="flex mt-10">
        <TailButton caption ="증가"
                    color = "blue"
                    onHandle ={()=> setN(n+1)}/>
        <TailButton caption ="감소"
                    color = "blue"
                    onHandle ={()=> setN(n-1)}/>
      </div>
    </div>
  )
}

import MyDiv from "./MyDiv"
//import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import {cntAtom, cntAtom2} from "./CntAtom"; //CntAtom.jsx에서 선언한 전역변수 import해서 사용

export default function DivMain() {
    //n,n2이 변화하는 것을 화면에 그려야 함
    const [n] = useAtom(cntAtom);
    const [n2] = useAtom(cntAtom2);
    const m = "divMain";

  return (
    <div className="w-full h-4/5 bg-black text-zinc-50 font-bold
                    p-5 text-2xl
                    flex flex-col items-center">
        <div className="w-9/10 flex justify-start mb-2">
        {m}<br/>
        n = {n} , n2 = {n2}
        </div>
        <MyDiv/>
    </div>
  )
}

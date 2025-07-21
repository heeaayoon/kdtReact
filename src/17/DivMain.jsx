import MyDiv from "./MyDiv"
import { useState, useEffect } from "react";

export default function DivMain() {
    //n,n2이 변화하는 것을 화면에 그려야 함
    const [n, setN] = useState(0);
    const [n2, setN2] = useState(0);
    const m = "divMain";

    //n2는 n이 바뀌면 바뀜 -> useEffect 사용
    useEffect(()=>{
        setN2(n*2)
    },[n])

  return (
    <div className="w-full h-4/5 bg-black text-zinc-50 font-bold
                    p-5 text-2xl
                    flex flex-col items-center">
        <div className="w-9/10 flex justify-start mb-2">
        {m}
        </div>
        <div className="w-9/10 flex justify-start mb-2">
        n = {n} , n2 = {n2}
        </div>
      <MyDiv n={n} setN={setN}/>
    </div>
  )
}

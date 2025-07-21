import TailButtonLine from "../component/TailButtonLine"
import { useState } from "react";

export default function MyToggleBox({setcolor}) {
    const bg = {
        "blue" : "bg-blue-100 hover:text-black",
        "orange" : "bg-orange-100",
        "lime" : "bg-lime-100"
    }

    const [Flag, setFlag] = useState(false); 

    const handleToggle = () =>{ 
        //console.log(setcolor)
        setFlag(!Flag); //클릭시 플래그를 바꿈 -> 화면에서 변경될 부분 1. MyToggleBox의 배경색 / 2. MyToggleBox 내부 <div>의 글자색
    }
    
    return (
        <div className={`w-8/10 p-0.5
                        flex flex-col justify-center items-center
                       border-zinc-100 border-3 rounded-2xl
                        ${Flag && bg[setcolor]}`}> 
            <div className={`font-bold flex justify-center m-5
                            ${Flag ? "text-white" : "text-black"}`}>
                {setcolor}
            </div>
            <TailButtonLine caption = "blue Togggle" 
                            color= {setcolor}
                            onHandle={handleToggle}/> 
        </div>
  )
}

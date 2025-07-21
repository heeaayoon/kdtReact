import TailButton from "../component/TailButton"
import { useState, useRef } from "react";
//Ref 훅을 변수로 사용

export default function MyRef() {
    //컴포넌트 변수 선언
    let cnt = 0

    //state 변수 선언
    const [scnt,setScnt]= useState(0);

    //Ref 변수 선언
    const rcnt = useRef(0)

    const handleCnt = () =>{
        cnt = cnt+1;
        console.log(cnt);
    }

    const handleScnt = () =>{
        setScnt(scnt+1)
        console.log(scnt);
    }

    const handleRcnt = () =>{
       rcnt.current = rcnt.current+1; //반드시 Ref변수.current로 접근하기
       console.log(rcnt.current)
    }

  return (
    <div>
        <div className="grid grid-cols-3 gap-4">
            <div className="text-blue-500 font-bold">
                컴포넌트 변수 : {cnt}
            </div>
            <div className="text-red-500 font-bold">
                state 변수 : {scnt}
            </div>
            <div className="text-lime-500 font-bold">
                ref 변수 : {rcnt.current}
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <TailButton caption = "컴포넌트 변수" 
                        color = "blue"
                        onHandle= {handleCnt}
                        />
            <TailButton caption = "state 변수" 
                        color = "orange"
                        onHandle= {handleScnt}
                        />  
            <TailButton caption = "ref 변수" 
                        color = "lime"
                        onHandle= {handleRcnt}
                        />    
        </div>
    </div>
  )
}

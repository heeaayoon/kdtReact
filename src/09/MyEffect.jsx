import { useEffect, useState } from "react"
import TailButton from "../component/TailButton";

export default function MyEffect() {
    const[cnt, setCnt] = useState(0);

    //useEffect(함수, dependency Array): 콜백함수가 인수로 들어가서 무조건 실행됨 / dependency Array 에서 언제?를 결정
    //useEffect 는 필요할 때 사용하면 됨
    
    //맨 처음 컴포넌트 생성시, 딱 한번 콜백함수 실행함
    useEffect(()=>{
        console.log('useEffect [] : ', cnt)
    },[]);
    //state 변수인 cnt가 변화할 때만, 콜백함수 실행함
    useEffect(()=>{
        console.log('useEffect [cnt] : ', cnt)
    },[cnt]);
    //화면이 변화할 때, 콜백함수 실행함
    useEffect(()=>{
        console.log('useEffect : ', cnt)
    });
    
    const handleUp = () =>{
        setCnt(cnt+1) 
        console.log("HandleUp", cnt) //setCnt로 cnt를 바꾸기 전에 console에 찍힘
    }

    const handleDown = () =>{
        setCnt(cnt-1)
        console.log("HandleDown", cnt)
    }


  return (
    <div className="text-4xl font-bold">
        MyEffect cnt : {cnt}
        <TailButton caption = "＋" color = "orange" onHandle={handleUp}/>
        <TailButton caption = "－" color = "blue" onHandle={handleDown}/>
    </div>
  )
}

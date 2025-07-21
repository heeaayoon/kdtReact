import TailButton from "../component/TailButton"
import { useState, useRef, useEffect } from "react";
//Ref = {Ref 변수} 태그에 속성 추가

export default function MyRef() {
    const n1Ref = useRef();
    const n2Ref = useRef();
    const n3Ref = useRef();
    const opRef = useRef();

    const handleCalc =(e)=>{
        e.preventDefault();
        let n1 = parseInt(n1Ref.current.value) ; //n1Ref.current.value -> n1Ref의 값 가져오기
        let n2 = parseInt(n2Ref.current.value) ;
        let n3;
        switch (opRef.current.value){ 
            case '+' : n3 = n1+n2; break;
            case '-' : n3 = n1-n2; break;
            case 'x' : n3 = n1*n2; break;
            case '/' : n3 = n1/n2; break;
        }
        n3Ref.current.value = n3; //n3Ref.current.value 에 n3의 값을 넣기
        n1Ref.current.focus(); //n3Ref 채워지면 커서 이동
    }

    //맨 처음 로딩될 때, 커서 위치
    useEffect(()=>{
        n1Ref.current.focus();
    },[])
  
    return (
    <div className="w-9/10 bg-indigo-200 flex justify-center items-center h-20">
        <form className="flex justify-center">
            <input  type = "number" 
                    name = "n1" 
                    ref={n1Ref}
                    className="mx-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            <select name="op" defaultValue="x"
                    ref={opRef}
                    className ="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
                <option value="+"> + </option>
                <option value="-"> - </option>
                <option value="x"> x </option>
                <option value="/"> / </option>
            </select>
            <input  type = "number" 
                    name = "n2" 
                    ref={n2Ref}
                    className="mx-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            <TailButton caption = "=" 
                        color = "blue"
                        onHandle= {handleCalc}
                        />
            <input  type = "number" 
                    name = "n2" readOnly
                    ref={n3Ref}
                    className="mx-4 bg-blue-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </form>
    </div>
  )
}

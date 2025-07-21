import TailButton from '../component/TailButton'
import getxy from "./getxy.json" 
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Fcst() {
 
    const dtRef = useRef();
    const areaRef = useRef();
    const area = getxy.map(item =>item['1단계']);
    console.log(area)

    const navigate = useNavigate(); 

    useEffect(()=>{
        //오늘날짜
        let today = new Date().toISOString().split('T')[0];
        dtRef.current.value = today;
    },[])


    const handleLink = (gubun) =>{
        const tm = getxy.filter(item=>item['1단계']==areaRef.current.value)[0]; //filter의 결과는 array이므로 인덱스를 이용해 접근하기
        let x = tm['격자 X']
        let y = tm['격자 Y']
        console.log(tm)
        console.log(x,y)
        console.log(gubun,dtRef.current.value, areaRef.current.value)
        //navigate('/fcstList'); //fcstList 페이지로 넘기기

        let url = `/fcstList?gubun=${gubun}&dt=${dtRef.current.value}`
        navigate(`${url}&area=${areaRef.current.value}&x=${x}&y=${y}`);
    }

  return (
    <div className="w-9/10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <input  type = "date" 
                placeholder="날짜 선택"
                ref={dtRef} 
                className="block p-1 mx-4 text-gray-900 
                           border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"/>
        <select ref = {areaRef}
                className="bg-gray-50 border mx-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"> 
                <option value=''>---시도선택---</option>
                {
                    area.map(item=><option key = {item} value = {item}>{item}</option>) //한번만 만들어지면 되니까 -> useState 쓸 필요 X
                }
        </select >
        <TailButton caption ='초단기예보'
                    color = 'blue'
                    onHandle = {() => {handleLink('초단기')}}
                    />
        <TailButton caption ='단기예보'
                    color = 'blue'
                    onHandle = {() => {handleLink('단기')}}
                    />

    </div>
  )
}

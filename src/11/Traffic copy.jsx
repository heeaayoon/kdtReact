import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function Traffic() {
    //패치 데이터를 저장할 state 변수
    const [tdata, setTdata] = useState([]);

    //대분류
    const [c1, setC1] = useState([]);

    //선택된 대분류가 뭔지?
    const [selC1, setSelC1] = useState();

    //사고유형
    const [c2, setC2] = useState();

    //선택된 사고유형이 뭔지?
    const [selC12, setSelC2] = useState();

    //Fetch함수 생성
    const getFetchData = async()=>{
        const baseUrl = 'https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?';
        const url = `${baseUrl}page=1&perPage=18&serviceKey=${import.meta.env.VITE_DATA_API}`;

        //console.log(url) //url이 제대로 만들어졌는지 확인작업 필요

        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data.data); //총 데이터
        console.log(data.data);
    }

    //컴포넌트가 생성되면 fetch 한번 실행됨
    useEffect(()=>{
        getFetchData();
    },[])

    //전체 데이터가 패치 되었을 때, 대분류 생성
    useEffect(()=>{
        if(tdata.length == 0) return;  // 대분류 뽑아내기 전에는 그냥 넘김
        let tm = tdata.map(item => item['사고유형대분류'])
        tm = [...new Set(tm)] //대분류 중복 제거
        setC1(tm)
        console.log(tm)
    },[tdata]);

    //대분류가 선택되었을 때
    useEffect(()=>{
        if(!tdata || !c1 || !selC1) return; // 대분류가 선택되지 않았을 때 그냥 넘김
        console.log("선택대분류 : ", selC1)

        let tm = tdata.filter(item => item['사고유형대분류']==selC1);
        setC2(tm);
    },[selC1])

    //사고유형 생성
    useEffect(()=>{
        console.log("c2",c2)
    },[c2])

    return (
    <div className="w-9/10">
      { c1 && <TrafficNav 
                        title = '대분류' 
                        c = {c1}
                        selC = {selC1} 
                        setSelC = {setSelC1}/>}
    </div>
  )
}
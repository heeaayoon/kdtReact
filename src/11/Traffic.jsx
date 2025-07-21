import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";
import TailCard from "../component/TailCard";

export default function Traffic() {
    //패치 데이터를 저장할 state 변수
    const [tdata, setTdata] = useState([]);

    //대분류 데이터 저장할 state 변수-> 배열
    const [c1,setC1] = useState([]);

    //선택된 대분류 저장할 state 변수-> 값 1개
    const [sel1, setSel1] = useState();

    //사고유형 데이터 저장할 state 변수-> 배열
    const [c2, setC2] = useState([]);

    //선택된 사고유형 저장할 state 변수-> 값 1개
    const [sel2, setSel2] = useState();

    //최종적으로 선택된 자료
    const [info, setInfo] = useState();
    const [infoTag, setInfoTag] = useState();


    
    //데이터 패치 함수(비동기함수:일을 수행하면서 다른 일을 할수 있음 -> 이를 막기 위해 await 키워드 사용)
    const getFetchData=async()=>{
        const baseUrl = 'https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?';
        const url = `${baseUrl}page=1&perPage=18&serviceKey=${import.meta.env.VITE_DATA_API}`;
        console.log(url) //url이 제대로 만들어졌는지 확인작업 필요

        const resp = await fetch(url); //패치되어 resp 변수로 들어갈 때까지 대기
        const data = await resp.json(); //json화되어서 data변수로 들어갈 때까지 대기
        //console.log(data) //url 내부 데이터 전부
        setTdata(data.data); //필요한 데이터만 tdata에 업데이트
        //console.log(data.data);
    }

    //컴포넌트 생성이 될 때, 처음 한 번 실행(데이터패치 시키기) by useEffect 훅
    useEffect(()=>{
        //데이터 패치 함수를 호출
        getFetchData()

    },[])

    //선택되었을 때 -> tdata 가 채워졌을 때?
    useEffect(()=>{
        if(tdata.length==0) return; //tdata가 없으면 뿌리지 말기
        let tm = tdata.map(item => <TailCard
                                             key = {item.galContentId}
                                             imgUrl = {item.galWebImageUrl}
                                             title = {item.galTitle} 
                                             addre ={item.galPhotographyLocation} 
                                             searchKeyword = {item.galSearchKeyword}
                                             />)
        setC1(tm);
    },[tdata])    

    //tdate가 변경이 되었을 때
    useEffect(()=>{
        //맨 처음 useState에 의해 초기화 -> 껍데기만 있음
        if(tdata.length==0) return;

        //console.log("tdata",tdata)
        //패치되어 tdata가 변경되었을 때 -> 18개 값이 들어있는 경우
        //대분류 생성
        let tm = tdata.map(item=>item['사고유형대분류']); //18개의 대분류(중복있음) 배열
        tm = [...new Set(tm)] //집합(set)으로 중복제거 -> 전개연산자를 이용해 배열로 다시 변환
        setC1(tm) //c1 stste 변수에 대분류 업데이트 -> 대분류 생성 완료
    },[tdata])

    // useEffect(()=>{
    //     console.log("c1",c1)
    // },[c1])

    //대분류 중에서 특정 항목이 선택되었을 때(변경 가능)  
    useEffect(()=>{
        //대분류가 초기화되어 선택항목이 없을 때
        if(!sel1) return;

        //대분류 선택되었을 때 -> 사고유형 생성
        let tm = tdata.filter(item => item['사고유형대분류']==sel1)
                      .map(item=>item['사고유형']); //사고유형만 골라내기
        // console.log("c2의 tm", tm)
        setC2(tm);
        setInfoTag(" "); //대분류 재선택시, 기존 자료의 내용 초기화
    },[sel1])

    //사고유형 중에서 특정 항목이 선택되었을 때(변경 가능)  
    useEffect(()=>{
        //사고유형 선택항목이 없을 때
        if(!sel1||!sel2||!c2) return;

        //사고유형 선택되었을 때 -> 데이터 항목 생성
        let tm = tdata.filter(item => item['사고유형대분류']==sel1&&item['사고유형']==sel2);
        setInfo(tm[0]);
        //setInfoTag(" ");
    },[sel2])

    //사고 유형이 선택되었을 때 
    useEffect(()=>{
        if(!info) return;

        console.log("info",info);
        let tm = ["사고건수","사망자수","중상자수","경상자수","부상신고자수"];
        tm = tm.map(item=> <div key={item} className="flex text-lg h-10 p-2 ">
                                <div className="bg-indigo-100 mr-1.5">
                                    {item}
                                </div>
                                <div>
                                    {parseInt(info[item]).toLocaleString()}
                                </div>
                            </div>)
        setInfoTag(tm)
    },[info])
        
    return (
    <div>
        {c1&& <TrafficNav title = "대분류" 
                    c = {c1}
                    sel = {sel1}
                    setSel={setSel1}
                    />}
        {c2&&sel1&&<TrafficNav title = "사고유형"
                    c = {c2}
                    sel = {sel2}
                    setSel={setSel2}
                    />}
        <div className="w-full flex justify-between items-center">
            {infoTag}
        </div>
    </div>
  )
}
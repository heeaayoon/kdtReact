import TailButton from "../component/TailButton"
import TailSelect from "../component/TailSelect"
import TailPageNation from "../component/TailPageNation";
import TailCard2 from "../component/TailCard2";
import { useEffect, useState, useRef } from "react";
import zcode from "./zcode.json" //지역 선택
import zscode from "./zscode.json" //지역동 선택
import kind from "./kind.json" //충전소 구분
import stat from "./stat.json" //충전 상태

export default function ChargeMain() {
    //console.log(Object.keys(zcode))
    //console.log(Object.values(zcode))
    //json에서 가져온 key-value를 매칭

    //동 선택에 관한 변수 -> 지역선택에 따라 달라져야 하는 부분임
    const [zss,setZss] = useState([]);

    //select 박스 3군데에서 사용할  ref 변수
    const zRef = useRef(); //변경(선택)할 부분
    const zsRef = useRef();
    const kindRef = useRef();

    //select 박스 3군데에서 사용할 함수
    const handleZ = () =>{
        //console.log(zRef.current.value) //선택한 지역의 번호
        setZss(zscode[zRef.current.value]) //선택한 지역의 번호에 속한 동만 선택될 수 있도록 useState 사용
    }

    const handleZs = () =>{
        //console.log(zsRef.current.value) //선택한 지역동의 번호
    }

    const handleK = () =>{
        //console.log(kindRef.current.value) //선택한 충전소 구분의 번호

        //지역이 선택되지 않고 충전소 구분 선택을 선택하는 경우 -> 경고창 생성
        if(zRef.current.value ==""){ 
            alert("지역을 선택하세요");
            zRef.current.focus();
            kindRef.current.value = "" ;
            return;
        }
    }

    //패치 데이터를 저장할 state 변수
    const [tdata, setTdata] = useState([]); //전체 데이터
    let totalCount = 0; //옵션선택하면 그에 맞는 데이터만 선택

    //페이지당 데이터 갯수 설정
    const perPage = 12 ;

    //페이지 네이션을 위한 변수
    const [currentPage,setCurrentPage] = useState(1)
    const [totalPage,setTotalPage] = useState(1)

    //데이터 패치 함수
    const getFetchData=async(cpage)=>{

        //지역이 선택되지 않고 충전소 구분 선택을 선택하는 경우 -> 경고창 생성
        if(zRef.current.value =="지역 선택"){ 
            alert("지역을 선택하세요");
            zRef.current.focus();
            setZss([]);
            return;
        }

        //지역이 선택되고, 지역 동이나 충전소 구분이 선택되지 않은 경우 -> 경고창 생성 ----잘안됨
        if(zsRef.current.value == "" && kindRef.current.value ==""){
            alert("지역동이나 충전소 구분을 선택하세요");
            zsRef.current.focus();
            return;
        }

        const baseUrl = 'http://apis.data.go.kr/B552584/EvCharger/getChargerInfo?';
        let url = `${baseUrl}serviceKey=${import.meta.env.VITE_DATA_API}&numOfRows=${perPage}&pageNo=${cpage}&dataType=JSON`;
        //console.log(url) //기본 url이 제대로 만들어졌는지 확인

        //zcode가 선택되면?
        if(zRef.current.value!=""){
            url = `${url}&zcode=${zRef.current.value}`
        }

        //zscode가 선택되면?
        if(zsRef.current.value!=""){
            url = `${url}&zscode=${zsRef.current.value}`
        }

        //kind가 선택되면?
        if(kindRef.current.value!=""){
            url = `${url}&kind=${kindRef.current.value}`
        }

        console.log(url) //선택 여부에 따라 url이 제대로 만들어졌는지 재확인

        const resp = await fetch(url); 
        const data = await resp.json(); 
        //console.log(data) //url 내부 데이터 전부
        console.log(totalCount);
        totalCount=data.totalCount; //필요한 데이터만 totalCount에 업데이트
        setTotalPage(Math.ceil(totalCount/perPage)); //전체 게시물수/페이지당 게시물 수 = 총 페이지 수
        console.log(totalPage);
        setCurrentPage(cpage);
        setTdata(data.items.item); //필요한 데이터만 tdata에 업데이트
        //console.log(data.items.item);
    }   

    // useEffect(()=>{
    //     if(tdata.length==0 && totalCount == 0) return; //tdata가 없으면 뿌리지 말기
    //     console.log("tdata : " , tdata)
    //     console.log("totalCount : " , totalCount)   
    // },[tdata, totalCount])

  return (
    <div className="w-full flex flex-col">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            <TailSelect selRef = {zRef}
                        handleSel = {handleZ}
                        defaultOp = "지역 선택"
                        opv = {Object.keys(zcode)}
                        opt = {Object.values(zcode)}
                        />
            <TailSelect selRef = {zsRef}
                        handleSel = {handleZs}
                        defaultOp = "지역 동 선택"
                        opv = {zss? Object.values(zss):[]}
                        opt = {zss? Object.keys(zss):[]} />
            <TailSelect selRef = {kindRef}
                        handleSel = {handleK}
                        defaultOp = "충전소 구분 선택"
                        opv = {Object.keys(kind)}
                        opt = {Object.values(kind)}/>
            <TailButton caption = "검색"
                        color = "blue"
                        onHandle = {()=>getFetchData(1)} />
        </div>
        <div className="w-full grid grid-1 lg:grid-cols-3 gap-2 mt-5"> 
            {
                tdata.map(item => <TailCard2 key={item.statId}
                                            title={item.statNm}
                                            sub={`${item.addr}, ${item.busiCall}`}
                                            searchKeyword={`${item.useTime},${stat[item.stat]== undefined ?"":stat[item.stat]}
                                                                ,${item.parkingFree =='Y'?'무료주차':'유료주차'}
                                                                ,충전방식 ${item.method}
                                                                ,충전용량 ${item.output}KW`}/>)
            }
        </div>
        <div>
            <TailPageNation currentPage = {currentPage}
                            totalPage = {totalPage}
                            onPageChange = {getFetchData} />
        </div>
    </div>
  )
}

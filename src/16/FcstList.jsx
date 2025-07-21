import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import getcode from './getcode.json'

export default function FcstList() {
    const [sparams] = useSearchParams(); //get방식으로 파라미터 받아오기
    const gubun = sparams.get("gubun")
    const dt = sparams.get("dt")
    const area = sparams.get("area")
    const x = sparams.get("x")
    const y = sparams.get("y")
    //console.log(x) //파라미터들을 가져와서 정보에 맞게 패치하기

    const [tdata, setTdata] = useState([]); //전체 데이터
    const [tag, setTag] = useState([]);//화면에 변경되면서 출력될 내용
    const selRef = useRef(); //변경(선택)할 부분(옵션중에서)

    const code = getcode.filter(item=>item['예보구분']==`${gubun}예보`)
    //console.log(code)
    
    //데이터 패치하기 
    //단기와 초단기에 따라서 다른 url
    const getFetchData = async()=>{

        let baseUrl; //gubun에 따라 baseURL 다름
        if (gubun=='초단기'){
            baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
        }else{
            baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?'
        }
        let url = `${baseUrl}serviceKey=${import.meta.env.VITE_DATA_API}&pageNo=1&numOfRows=1000&dataType=json`;
        url = `${url}&base_date=${dt.replaceAll('-','')}&base_time=${gubun=='초단기'?'0630':'0500'}`
        url = `${url}&nx=${x}&ny=${y}`
        
        //console.log(url) //url이 제대로 만들어졌는지 확인
        const resp = await fetch(url); 
        const data = await resp.json(); 
        //console.log(data) //url 내부 데이터 전부
        setTdata(data.response.body.items.item); //필요한 데이터만 tdata에 업데이트 
        //console.log(data.response.body.items.item);
    }
    //console.log(tdata); //필요한 데이터가 잘 들어왔는지 확인

    //처음에 데이터 패치하기
    useEffect(()=>{
        //console.log(gubun,dt,area,x,y)
        getFetchData();
    },[])

    const handleShow = () =>{
        console.log(selRef.current.value)
        //단위 붙이기 위한 작업
        const unitItem = getcode.filter(item=>item['예보구분']==`${gubun}예보`
                                        && item['항목값']==selRef.current.value)[0];
        const unit = unitItem["단위"]
        //console.log(unit) //단위 잘 들어왔는지 확인

        const skyUnit = {"1":"맑음 🌞","3": "구름많음", "4":"흐림"} //하늘상태(SKY) 코드
        const ptyUnit = {"0":"없음", "1":"비 ⛈", "2":"비/눈", "3":"눈", "4":"소나기 ⛈", "5":"빗방울", "6":"빗방울눈날림", "7":"눈날림" } //강수형태(PTY) 코드

        //옵션에서 선택한 항목의 데이터만 가져오기 위한 작업
        let tm = tdata.filter(item => item['category']==selRef.current.value) //selRef값과 동일한 데이터만 filter
        console.log(tm)
        tm = tm.map(item => (
            <tr className= "bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 hover:text-black hover:cursor-pointer"
                key = {item.fcstDate+item.fcstTime+item.category}>
                    <td scope="row" className="flex justify-center items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {`${unitItem["항목명"]}(${unitItem["항목값"]})`}
                    </td>
                    <td className="px-6 py-4 text-center">
                        {item.fcstDate}
                    </td>
                    <td className="px-6 py-4 text-center">
                        {item.fcstTime}
                    </td>
                    <td className="px-6 py-4 text-center">
                        {unitItem["항목값"]=="SKY"?skyUnit[item.fcstValue] //여기에서 SKY,PTY,RN1 단위를 조정했음
                          :unitItem["항목값"]=="PTY"?ptyUnit[item.fcstValue]
                            :unitItem["항목값"]=="RN1"&&item.fcstValue=="강수없음"? "강수없음"
                                :`${item.fcstValue}${unit}`}
                    </td>
            </tr>
        ))
        setTag(tm);
    }


    return (
        <div>
            <div className="flex">
                <div className="font-bold text-2xl">
                    {area} {gubun} 예보 ({dt.replaceAll("-",'.')})
                </div>
                <select ref = {selRef}
                        onChange={handleShow} //select 박스에 변화가 생기면(option이 선택되면) -> handleShow 함수가 실행됨
                        className="bg-gray-50 border mx-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"> 
                        <option value=''>---항목선택---</option>
                        {
                            code.map(item=><option key = {item['항목값']} value = {item['항목값']}>{`${item['항목명']} [${item['항목값']}]`}</option>) //한번만 만들어지면 되니까 -> useState 쓸 필요 X
                        }
                </select >
            </div>
            <div>
                <table className="mt-10 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center w-1/7">
                                항목명    
                            </th>
                            <th scope="col" className="px-6 py-3 text-center w-2/7">
                                예측일
                            </th>
                            <th scope="col" className="px-6 py-3 text-center w-2/7">
                                예측시간
                            </th>
                            <th scope="col" className="px-6 py-3 text-center w-2/7">
                                예측값 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tag}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

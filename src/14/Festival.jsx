import { useState, useRef, useEffect } from 'react';
import TailCard from '../component/TailCard'

export default function Festival() {

    const selRef = useRef(); //변경(선택)할 부분
    //패치 데이터를 저장할 state 변수
    const [tdata, setTdata] = useState([]); //전체 데이터
    const [option, setOption] = useState([]); //옵션선택하면 그에 맞는 데이터만 선택
    const [tag,setTag] = useState([]);

    //데이터 패치 함수
    const getFetchData=async()=>{
        const baseUrl = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?';
        const url = `${baseUrl}serviceKey=${import.meta.env.VITE_DATA_API}&numOfRows=41&resultType=json`;
        //console.log(url) //url이 제대로 만들어졌는지 확인

        const resp = await fetch(url); 
        const data = await resp.json(); 
        //console.log(data) //url 내부 데이터 전부
        setTdata(data.getFestivalKr.item); //필요한 데이터만 tdata에 업데이트
        //console.log(data.getFestivalKr.item);
    }   
    
    //option이 선택되면(selRef값에 따라) -> option에 해당하는 card 생성
    const handleShow = () =>{
        console.log(selRef.current.value)
        let tm = tdata.filter(item => item['GUGUN_NM']==selRef.current.value) //selRef값과 동일한 구의 데이터만 filter
        console.log(tm)
        tm = tm.map(item => <TailCard key = {item.UC_SEQ}
                                      imgUrl = {item.MAIN_IMG_NORMAL}
                                      title = {item.MAIN_TITLE.split('(')[0]} 
                                      sub ={item.TITLE} 
                                      searchKeyword = {item.USAGE_DAY_WEEK_AND_TIME}
                                      />)
        setTag(tm);
    }

    //컴포넌트 생성이 될 때, 처음 한 번 실행(데이터패치 시키기) by useEffect 훅
    useEffect(()=>{
        getFetchData() //데이터 패치 함수를 호출
    },[])

    //tdata 업데이트 될때마다 실행
    useEffect(()=>{
        if(tdata.length==0) return; //tdata가 없으면 뿌리지 말기
        //옵션 만들기
        let tm = tdata.map(item => item['GUGUN_NM'])
        tm = [...new Set(tm)].sort() //구 중복 제거 , 정렬
        //console.log(tm) //중복 제거, 정렬되었는지 확인
        //<option> 태그 만들기
        tm = tm.map(item => <option key = {item} value={item}>
                                        {item}
                                    </option> )
        setOption(tm);
    },[tdata])

  return (
    <div>
        <div className="w-full flex justify-center text-2xl font-bold">부산 축제정보</div>
            <form className="w-full flex justify-center items-center mt-10">
                <select ref = {selRef}
                        onChange={handleShow} //select 박스에 변화가 생기면(option이 선택되면) -> handleShow 함수가 실행됨
                        className="w-2/3 lg:w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 mb-3.5"> 
                    <option value=''>---지역선택---</option>
                    {option}
                </select >
            </form>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {tag}
            </div>
    </div>
  )
}

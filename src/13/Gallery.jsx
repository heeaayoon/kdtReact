import { useState, useEffect, useRef } from "react";
import TailSearch from "../component/TailSearch";
import TailCard from "../component/TailCard"

export default function Gallery() {
    const kwRef = useRef();
    //패치 데이터를 저장할 state 변수
    const [tdata, setTdata] = useState([]);
    const [tag,setTag] = useState([]);

    //데이터 패치 함수
    const getFetchData=async()=>{
        const baseUrl = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
        const keyWord = encodeURI(kwRef.current.value); //키워드를 입력하면 해당하는 자료를 fetch해서화면에표시
        const url = `${baseUrl}serviceKey=${import.meta.env.VITE_DATA_API}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyWord}&_type=json`;
        //console.log(url) //url이 제대로 만들어졌는지 확인

        const resp = await fetch(url); 
        const data = await resp.json(); 
        //console.log(data) //url 내부 데이터 전부
        setTdata(data.response.body.items.item); //필요한 데이터만 tdata에 업데이트
        console.log(data.response.body.items.item);
    }

    const handleSearch = (e) =>{ 
        e.preventDefault();
        //kwRef.current.focus();
        console.log(kwRef.current.value);
        getFetchData();  //확인버튼을 누를때마다 패치
    }
    const handleReset = (e) =>{
        e.preventDefault();
        kwRef.current.value ='';
        kwRef.current.focus();
    }

    //tdata가 채워졌을 때 
    useEffect(()=>{
        if(tdata.length==0) return; //tdata가 없으면 뿌리지 말기
        let tm = tdata.map(item => <TailCard
                                             key = {item.galContentId}
                                             imgUrl = {item.galWebImageUrl}
                                             title = {item.galTitle} 
                                             addre ={item.galPhotographyLocation} 
                                             searchKeyword = {item.galSearchKeyword}
                                             />)
        setTag(tm);
    },[tdata])
    
  return (
    <div>
        <div className="font-bold">관광사진 갤러리</div>
        <TailSearch TailRef = {kwRef} 
                    onSearch = {handleSearch} 
                    onReset = {handleReset}/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {tag}
        </div>
    </div>
  )
}

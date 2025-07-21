import { useState, useEffect, useRef } from "react"

export default function BoxOffice() {
    
    const [tdata, setTdata] = useState([]);
    const [tag, setTag] = useState([]);
    const [info, setInfo] = useState('');
    
    const yRef = useRef();
    
    const yesterday =() =>{
    let yd = new Date();
    yd.setDate(yd.getDate()-1); //어제 날짜
    return yd.toISOString().slice(0,10);
    }

    const getFetchData = async () =>{
        const apikey = import.meta.env.VITE_MV_API;
        //console.log("apikey", apikey)
        // const yRefValue = yRef.current.value;
        // console.log(yRefValue); //2025-07-07 방식으로 가져옴
        const dt = yRef.current.value.replaceAll("-",''); //-를 제거해서 변수 dt에 전달
        console.log(dt)
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}`;
    
        //fetch -> 현재는 async~await 구문 사용
        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data.boxOfficeResult.dailyBoxOfficeList);
        //console.log(data.boxOfficeResult.dailyBoxOfficeList);

        //기존 fetch 방법
        //  fetch(url)
        // .then(resp => resp.json())
        // .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList))
        // .catch(err => console.log(err))
    }

    const handleItem = (item)=>{
        console.log(item)
        setInfo(`[${item.movieNm}] 상영 스크린 수 : ${item.scrnCnt} 상영 횟수 : ${item.showCnt}  개봉일 : ${item.openDt}`)
    }
    
    //일단은 컴포넌트가 처음 생성될 때, 패치된 데이터를 가져오기
    useEffect(()=>{
        yRef.current.value = yesterday(); //디폴트는 어제 날짜의 데이터임
        getFetchData(); //어제 날짜를 이용해 패치함
    },[])

    //tDdata가 변경되면, 패치된 데이터를 가져오기 
    useEffect(()=>{
        console.log(tdata);
        let tm = tdata.map(item =>(
            <tr className= "bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 hover:text-black hover:cursor-pointer"
                key = {item.movieCd}
                onClick={()=>handleItem(item)}>
                <th scope="row" className="flex justify-center items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.rank}
                </th>
                <td className="px-6 py-4">
                    {item.movieNm}
                </td>
                <td className="px-6 py-4">
                    {parseInt(item.salesAmt).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                    {parseInt(item.salesAcc).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                    {parseInt(item.audiCnt).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                    {item.rankOldAndNew =='OLD'? ""
                                                    :<span className="font-bold text-red-500">NEW</span>}
                </td>
                <td className="px-6 py-4">
                    {item.openDt}
                </td>
            </tr>
        ));
        setTag(tm)
    },[tdata]) //10개의 tdata배열이 생김 -> setTag에 <tr> 넣기

  return (
    <div>
        <div className="flex justify-end mb-5">
            <input  type = "date" 
                    placeholder="날짜 선택"
                    max = {yesterday()} //어제 날짜까지만 선택가능
                    ref={yRef} 
                    onChange={getFetchData} //onChange : 사용자가 날짜를 변경할 때마다 발생되는 이벤트
                    className="flex mx-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"/>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                        순위    
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        영화이름
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        매출액    
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        누적매출액    
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        관객수    
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        신규진입여부    
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        개봉일자    
                    </th>
                </tr>
            </thead>
            <tbody>
                {tag}
            </tbody>
        </table>
        <div className="flex flex-col justify-center items-center bg-indigo-300 font-bold">
            {info}
        </div>
    </div>
  )
}
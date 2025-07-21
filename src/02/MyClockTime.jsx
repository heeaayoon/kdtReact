import { useEffect, useState } from 'react';
function MyClockTime(){  
    const [currentTime, setCurrentTime] = useState(new Date());

    //component생성시 딱 한번만 함수 실행시키면됨 -> setInterVal()이 알아서 1초마다 실행됨
    //setInterval(콜백함수, 시간 간격(ms 단위)) : 시간간격마다 콜백함수를 실행시킴
    //clearInterval

    useEffect(()=>{
        const tm = setInterval(() => {
            setCurrentTime(new Date()) //1초마다 현재시간을 setCurrentTime에 업데이트
        }, 1000);
        
        //정리함수를 반환
        return(()=>{ //setInterVal()을 끄기 -> 언제? 시계 컴포넌트가 화면에서 사라질 때 
            clearInterval(tm);
        });
    },[]);

    return(
        <div className='font-bold'>
            {currentTime.toLocaleTimeString()}
        </div>
    ) 
}
export default MyClockTime
import { useSearchParams } from "react-router-dom";

export default function RoutePage2() {
    const [sparams] = useSearchParams();
    const item1 = sparams.get("item")
    const item2 = sparams.get("emo")
    const data = ['사과', '바나나']; //배열 안에 든 요소인지를 검사 -> 삼항연산자 
  return (
    <div>
        <h1 className='text-2xl font-bold text-center'>RoutePage2</h1>
        <div className='text-2xl font-bold text-center mt-10'>
            { item2=='m'? '메뉴선택'
                        : `${item2}는 ${data.includes(item1)?"과일입니다":"과일이 아닙니다"}.`}
        </div>
    </div>
  )
}

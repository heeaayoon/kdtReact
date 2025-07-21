import { Link, useNavigate } from "react-router-dom"
import TailButton from "../component/TailButton"

export default function RouteHome() {

    const navigate = useNavigate(); //이벤트로 처리할 경우에는 useNavigate 사용
  return (
    <div className='w-9/10 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold text-center'>RouteHome</h1>
        <ul className='w-60 text-center'>
            <Link to='/p1/사과/🍎'>
            <li className='w-full p-4 m-2 border border-indigo-300 hover:bg-indigo-200'>사과 🍎</li>
            </Link>
            <Link to='/p1/당근/🥕'>
            <li className='w-full p-4 m-2 border border-indigo-300 hover:bg-indigo-200'>당근 🥕</li>
            </Link>
            <Link to='/p1/바나나/🍌'>
            <li className='w-full p-4 m-2 border border-indigo-300 hover:bg-indigo-200'>바나나 🍌</li>
            </Link>
        </ul>
        <div className="w-60 grid grid-cols-1 gap-1">
            <TailButton caption ='사과 🍎'
                                color = 'blue'
                                onHandle = {() => navigate('/p2?item=사과&emo=🍎')}
                                />
            <TailButton caption ='당근 🥕'
                                color = 'blue'
                                onHandle = {() => navigate('/p2?item=당근&emo=🥕')}
                                />
            <TailButton caption ='바나나 🍌'
                                color = 'blue'
                                onHandle = {() => navigate('/p2?item=바나나&emo=🍌')}
                                />
        </div>
    </div>
  )
}

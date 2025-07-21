import BusanImg from '../assets/busan.png'
import BankImg from '../assets/bank.png'
import MarketImg from '../assets/market.png'
import { useState } from 'react'

export default function FoodCard({data}) {

    const [flag, setFlag] = useState(true);
    const Display=()=>{
        setFlag(!flag);
    }

  return (
    <div className='flex border-2 border-amber-300'>
      <div>
        <img src = {data['구분']=='광역지원센터'? BusanImg
                                               : data['구분']=='기초푸드뱅크'? BankImg
                                               :MarketImg
            }/>
      </div>
      <div>
        <div>{data['사업장명']}</div>
        <div>{data['운영주체명']}</div>
        <div>{data['사업장 소재지']}</div>
        <div onClick={Display}>
            전화번호를 표시할까요?
            <div>{flag&&data['연락처(대표번호)']}</div>
        </div>
      </div>
    </div>
  )
}

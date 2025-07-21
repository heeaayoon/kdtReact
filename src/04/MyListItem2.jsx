import React from 'react'

export default function MyListItem2() {
  return (
    <div className='flex w-full border-2 p-4 border-gray-200 rounded-2xl overflow-hidden'>
      <div className='w-1/4'>
        <img src =" ./img/html.png" / >
      </div>
      <div className='w-3/4 flex flex-col justify-between'>
        <div>
            <div className='font-bold'>
                HTML
            </div>
            <div>
                HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용
            </div>
        </div>

        <div className='flex justify-end'>
            좋아요 ❤
        </div>

      </div>
    </div>
  )
}

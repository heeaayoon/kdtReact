import React, { useState, useEffect } from 'react'
import TailButton from '../component/TailButton'

export default function TrafficNav({title, c, selC, setSelC }) {

    const tag1 = c.map(item =>  <TailButton 
                                        key = {item}
                                        caption = {item} 
                                        color = {item == selC ?"orange": "blue"} 
                                        onHandle={()=>setSelC(item)}
                                        />);

  return (
    <div className='w-9/10 flex justify-between items-center border-2 border-amber-200'>
        <div className='font-bold text-2xl'>
            교통사고 {title}
        </div>
        <div className='flex'>
            {tag1}
        </div>
    </div>
  )
}

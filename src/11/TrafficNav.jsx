import React, { useState, useEffect } from 'react'
import TailButton from '../component/TailButton'

export default function TrafficNav({title, c, sel, setSel }) {
    console.log(c)
    const tag = c.map(item => <TailButton
                                         key={item}
                                         caption={item}
                                         color= {item == sel ? "orange" : "blue"}
                                         onHandle={()=>setSel(item)}
                                            />);
  
    return (
    <div className='w-full flex justify-between items-center border-2 border-amber-200'>
        <div className='font-bold'>
            교통사고 {title}
        </div>
        <div className='flex'>
            {tag}
        </div>
    </div>
  )
}

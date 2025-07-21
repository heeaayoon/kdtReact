import { useState } from "react"

export default function count() {
    const [count, setCount] = useState(0)
    
    const HandleUp=()=>{
        setCount(count+1);
    }

    const HandleDown=()=>{
        if(count>0)
        setCount(count-1);
    }
 
    return (
    <div className="flex flex-col">
      <div onClick={HandleUp}>
        좋아요
      </div>
      <div onClick={HandleDown}>
        싫어요
      </div>
      <div>{count}</div>
    </div>
  )
}

import Ball from "./Ball"
import Button from "./Button"
import { useState } from "react";

export default function NewLotto() {
    const [Lotto, setLotto] = useState([]);

    const buttonClick = () =>{
        let arr = [];
        while(arr.length<7){
            let n = Math.floor(Math.random()*45)+1;
            if(!arr.includes(n)) arr.push(n);
        }
        let bonus = arr.splice(-1);
        arr.sort((a,b)=>a-b);

        let lotto = [...arr,'+',...bonus];
        lotto = lotto.map(item => item =='+'? <span key={item}>{item}</span>
            :<Ball key = {item} n = {item}/>);
        setLotto(lotto);
    }
  return (
    <div>
        <div className="flex ">
            {Lotto}
        </div>
      <Button caption = "로또번호 생성" color = "blue" onHandle={buttonClick} />
    </div>
  )
}

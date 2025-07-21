import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"
import TailButton from "../component/TailButton";
import { useState } from "react";

export default function FoodMain() {
  let group = fooddata.map(item =>item["운영주체 분류"].replaceAll(" ",""));
  //console.log(group)
  group = [...new Set(group)]
  //console.log(group)

  const [list, setList] = useState([]);

  const Click=(item)=>{
    let cardList = fooddata.filter((dataItem)=>dataItem["운영주체 분류"].replaceAll(" ",'')==item);
    cardList = cardList.map(item =>
                          <FoodCard key = {item.사업장명}
                              data = {item} />
    );
    setList(cardList);
  }
  return (
    <div>
      <div>
        {
          group.map(item =>
                        <TailButton key= {item}
                                    color = "blue" 
                                    caption = {item}
                                    onHandle={()=>{Click(item)}}/>
          )
        }
      </div>
      <div>
        {list}
      </div>
    </div>
  )
}

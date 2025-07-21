import MyDiv3 from "./MyDiv3"
import { TbMathGreater } from "react-icons/tb";
export default function MyDiv2(props) {
  return (
    <div className="w-9/10 h-4/5 bg-amber-600 text-zinc-50 font-bold
                    p-10 text-2xl
                    flex flex-col items-center">
      <div className="w-9/10 flex justify-start mb-5">
       {props.a} <TbMathGreater />{props.b}
      </div>
      <MyDiv3 x={props.a} y={props.b} z= {props.c}/>
    </div>
  )
}

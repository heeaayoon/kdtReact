import MyDiv3 from "./MyDiv3"
import { TbMathGreater } from "react-icons/tb";
export default function MyDiv2({n,setN}) {
   const m2 = "myDiv2"
  return (
    <div className="w-9/10 h-4/5 bg-indigo-400 text-zinc-50 font-bold
                    p-5 text-2xl
                    flex flex-col items-center">
      <div className="w-9/10 flex justify-start mb-5">
       {m2}
      </div>
      <MyDiv3 n={n} setN={setN}/>
      {/* //안쓰고 넘겨줌 */}
    </div>
  )
}

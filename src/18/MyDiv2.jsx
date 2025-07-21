import MyDiv3 from "./MyDiv3"
import { TbMathGreater } from "react-icons/tb";
import { useAtom } from "jotai";
import { cntAtom } from "./CntAtom";

export default function MyDiv2() {
   const m2 = "myDiv2"
   const [cnt] = useAtom(cntAtom)
  return (
    <div className="w-9/10 h-4/5 bg-indigo-400 text-zinc-50 font-bold
                    p-5 text-2xl
                    flex flex-col items-center">
      <div className="w-9/10 flex justify-start mb-5">
        {m2} <br/>
        n={cnt}
      </div>
      <MyDiv3/>
    </div>
  )
}

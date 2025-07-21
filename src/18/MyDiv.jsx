import MyDiv2 from "./Mydiv2";
import { useAtom } from "jotai";
import { cntAtom2 } from "./CntAtom";

export default function MyDiv() {
  const m1 = "myDiv1"
  const [cnt2] = useAtom(cntAtom2)
  return (
    <div className="w-9/10 h-4/5 bg-indigo-600 text-zinc-50 font-bold
                    p-5 text-2xl
                    flex flex-col items-center">
      <div className="w-9/10 flex justify-start mb-5">
        {m1}<br/>
        n2={cnt2}
      </div>
      <MyDiv2/> 
    </div>
  )
}

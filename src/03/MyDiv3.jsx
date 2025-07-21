import { TbMathGreater } from "react-icons/tb";
export default function MyDiv3({x,y,z}) {
  return (
    <div className="w-9/10 h-4/5 bg-amber-300 text-zinc-50 font-bold
                    p-10 text-2xl
                    flex justify-start">
      {x}<TbMathGreater />{y}<TbMathGreater />{z}
    </div>
  )
}

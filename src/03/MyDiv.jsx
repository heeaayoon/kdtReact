import MyDiv2 from "./Mydiv2";
export default function MyDiv() {
    const x = "div1";
    const y = "div2";
    const z = "div3";
  return (
    <div className="w-2/3 h-3/5 bg-amber-900 text-zinc-50 font-bold
                    p-10 text-2xl
                    flex flex-col items-center">
      <div className="w-9/10 flex justify-start mb-5">
        {x}
      </div>
      <MyDiv2 a={x} b={y} c={z}/>
    </div>
  )
}

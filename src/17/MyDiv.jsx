import MyDiv2 from "./Mydiv2";
export default function MyDiv({n,setN}) {
  const m1 = "myDiv1"
  return (
    <div className="w-9/10 h-4/5 bg-indigo-600 text-zinc-50 font-bold
                    p-5 text-2xl
                    flex flex-col items-center">
      <div className="w-9/10 flex justify-start mb-5">
        {m1}
      </div>
      <MyDiv2 n={n} setN={setN}/> 
      {/* //안쓰고 넘겨줌 */}
    </div>
  )
}


export default function Ball({n}) {
    const bg = [
        "bg-red-400", "bg-amber-200", "bg-lime-300", "bg-sky-300",  "bg-violet-300"
    ];

  return (
    <div className={`w-10 h-10 rounded-3xl bg-amber-200 flex justify-center items-center
                    ${bg[Math.floor(n/10)]}`}>
      {n}
    </div>
  )
}

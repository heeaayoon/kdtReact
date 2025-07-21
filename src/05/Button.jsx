

export default function Button({caption, color, onHandle}) {
    const bg = {
        "orange" : "bg-orange-300",   
        "blue" : "bg-blue-200"
    }
  
    return (
    <div>

      <button className={` ${bg[color]}
                         w-20, h-10 rounded-2xl`}
            onClick={onHandle}>
        {caption}</button>
    </div>
  )
}

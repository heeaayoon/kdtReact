
// export default function TailButtonLine({caption, color, onHandle}) {
//     const bg = {
//         "blue" : "bg-blue-400",
//         "orange" : "bg-orange-400"
//     }

//     const bghover = {
//     "blue" : "hover:bg-blue-100 hover:text-black",
//     "orange" : "hover:bg-orange-100"
//   }
  
  
//     return (
//     <div>
//       <button className={`p-3 rounded-xl
//                        text-white
//                         hover:cursor-pointer
//                         hover:font-bold
//                         mx-2 
//                         ${bghover[color]}
//                         ${bg[color]}`}
//               onClick={onHandle}>
//         {caption}
//       </button>
//     </div>
//   )
// }


export default function TailButtonLine({caption,color,onHandle}) {
    const bg = {
        "blue" : "bg-blue-400",
        "orange" : "bg-orange-400",
        "lime" : "bg-lime-400"
    }

    const bghover = {
    "blue" : "hover:bg-blue-100 hover:text-black",
    "orange" : "hover:bg-orange-100",
    "lime" : "hover:bg-lime-100"
    }

    const bgborder = {
        "blue" : "border-blue-600",
        "orange" : "border-orange-600",
        "lime" : "border-lime-600"
    }

    return (
    <div>
      <button className = {`p-3 rounded-xl mx-2 
                         text-white 
                          hover:cursor-pointer hover:font-bold
                        ${bghover[color]}  
                        ${bg[color]}
                        ${bgborder[color]}`}
                        onClick= {onHandle}>
            {color} Toggle    
      </button>
    </div>
  )
}

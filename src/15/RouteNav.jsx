import { Link } from "react-router-dom"

export default function RouteNav() {
  return (
    <div className='w-9/10 flex justify-center items-center'>
        <Link to = "/">
        <div className='p-4 m-2 border border-indigo-700 rounded bg-indigo-200 font-bold
                        hover:bg-indigo-50'>
            Home
        </div>
        </Link>
        <Link to = "/p1/m/m">
        <div className='p-4 m-2 border border-indigo-700 rounded bg-indigo-200 font-bold
                        hover:bg-indigo-50'>
            Page1
        </div>
        </Link>
        <Link to = "/p2?emo=m">
        <div className='p-4 m-2 border border-indigo-700 rounded bg-indigo-200 font-bold
                        hover:bg-indigo-50'>
            Page2
        </div>
        </Link>
    </div>
  )
}

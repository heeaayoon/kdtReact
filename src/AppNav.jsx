import { Link } from "react-router-dom"

export default function AppNav() {
  return (
    <div className="flex justify-center items-center">
        <Link to='/'>
        <div className='p-4 m-2  bg-indigo-200 rounded-2xl font-bold h-10 flex justify-center items-center
                        hover:bg-indigo-50'>
            clock
        </div>
        </Link>
        <Link to='/lotto'>
        <div className='p-4 m-2  bg-indigo-200 rounded-2xl font-bold h-10 flex justify-center items-center
                        hover:bg-indigo-50'>
            Lotto
        </div>
        </Link>
        <Link to='/food'>
        <div className='p-4 m-2  bg-indigo-200 rounded-2xl font-bold h-10 flex justify-center items-center
                        hover:bg-indigo-50'>
            food
        </div>
        </Link>
        <Link to='/box'>
        <div className='p-4 m-2  bg-indigo-200 rounded-2xl font-bold h-10 flex justify-center items-center
                        hover:bg-indigo-50'>
            BoxOffice
        </div>
        </Link>
        <Link to='/traff'>
        <div className='p-4 m-2  bg-indigo-200 rounded-2xl font-bold h-10 flex justify-center items-center
                        hover:bg-indigo-50'>
            Traffic
        </div>
        </Link>
        <Link to='/gal'>
        <div className='p-4 m-2  bg-indigo-200 rounded-2xl font-bold h-10 flex justify-center items-center
                        hover:bg-indigo-50'>
            Gallery
        </div>
        </Link>
        <Link to='/fest'>
        <div className='p-4 m-2  bg-indigo-200 rounded-2xl font-bold h-10 flex justify-center items-center
                        hover:bg-indigo-50'>
            Festival
        </div>
        </Link>
        <Link to='/fcst'>
        <div className='p-4 m-2  bg-indigo-200 rounded-2xl font-bold h-10 flex justify-center items-center
                        hover:bg-indigo-50'>
            Forecast
        </div>
        </Link>
        <Link to='/div'>
        <div className='p-4 m-2  bg-indigo-200 rounded-2xl font-bold h-10 flex justify-center items-center
                        hover:bg-indigo-50'>
            Div
        </div>
        </Link>
        <Link to='/charge'>
        <div className='p-4 m-2  bg-indigo-200 rounded-2xl font-bold h-10 flex justify-center items-center
                        hover:bg-indigo-50'>
            Charge
        </div>
        </Link>
    </div>
  )
}

import './App.css'
import reactlogo from './assets/react.svg'
import vitelogo from '/vite.svg'
import GroupText from './01/GroupText'
import MyClock from './02/MyClock'
//import MyDiv from './03/MyDiv'
import MyListItem from './04/MyListItem'
import MyList from './04/MyList'
import Count from './04-1/Count'
import Lotto from './05/Lotto'
import NewLotto from './05/NewLotto'
import FoodMain from './06/FoodMain'
import FoodMain2 from './07/FoodMain'
import FoodMain3 from './06-1/FoodMain'
import FoodMain4 from './07-1/FoodMain'
import MyToggle from './08/MyToggle'
import MyEffect from './09/MyEffect'
import BoxOffice from './10/BoxOffice'
import Traffic from './11/Traffic'
import MyRef from './12/MyRef'
import Gallery from './13/Gallery'
import Festival from './14/Festival'
import Fcst from './16/Fcst'
import FcstList from './16/FcstList'
import DivMain from './18/DivMain' //전역상태변수
import ChargeMain from './19/ChargeMain'
//import RouteMain from './15/RouteMain' //라우터 내부에 라우터 걸 수 없음
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppNav from './AppNav'

function App() {
  return(
    //전체 공유해야 하는 부분 -> <BrowserRouter>
    <BrowserRouter> 
    <div className = "w-full xl:w-8/10 h-screen mx-auto flex flex-col justify-start items-start">
      <header className = "w-full min-h-20 bg-indigo-300 flex justify-between items-center">
            <div className="flex ml-10">
                <img src={reactlogo} alt = "react"/>+
                <img src='/vite.svg' alt = "vite"/>
            </div>
            <AppNav/>
      </header>
      <main className="w-full flex-grow
                       overflow-y-auto py-10
                       flex flex-col items-center"> 
            <Routes>
              <Route path="/" element = {<MyClock/>} />
              <Route path="/lotto" element = {<Lotto/>} />
              <Route path="/food" element = {<FoodMain2/>} />
              <Route path="/box" element = {<BoxOffice/>} />
              <Route path="/traff" element = {<Traffic/>} />
              <Route path="/gal" element = {<Gallery/>} />
              <Route path="/fest" element = {<Festival/>} />
              <Route path="/fcst" element = {<Fcst/>} />
              <Route path="/fcstList" element = {<FcstList/>} />
              <Route path="/div" element = {<DivMain/>} />
              <Route path="/charge" element = {<ChargeMain/>} />
            </Routes>
      </main>
      <footer className = "w-full min-h-20 bg-black text-white flex justify-center items-center">
            K-digital 2025 2기 Front-end
      </footer>
    </div>
    </BrowserRouter>
  )
}

export default App

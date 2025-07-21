import RouteNav from "./RouteNav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RouteHome from "./RouteHome"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"

export default function RouteMain() {
  return (
    <BrowserRouter>
    <div className='w-full'>
        <RouteNav/>
    </div>
    <Routes>
        <Route path="/" element = {<RouteHome/>} />
        <Route path="/p1/:item1/:item2" element = {<RoutePage1/>} />
        <Route path="/p2" element = {<RoutePage2/>} />
    </Routes>
    </BrowserRouter>
  )
}

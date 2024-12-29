import Home from './Home'
import {Routes, Route} from "react-router-dom"
import Cousine from './Cousine'
import Detail from './Detail'

function Pages() {
  return (
    <>
    <Routes>
      <Route path="/react-recipe-app/" element={<Home/>} />
      <Route path="/react-recipe-app/cousine/:type" element={<Cousine />} />
      <Route path="/react-recipe-app/detail/:id" element={<Detail />} />
    </Routes>
    </>
  )
}

export default Pages
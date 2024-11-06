import Home from './Home'
import {Routes, Route} from "react-router-dom"
import Cousine from './Cousine'

function Pages() {
  return (
    <>
    <Routes>
      <Route path="/react-recipe-app/" element={<Home/>} />
      <Route path="/react-recipe-app/cousine/:type" element={<Cousine />} />
    </Routes>
    </>
  )
}

export default Pages
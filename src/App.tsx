import { BrowserRouter, Route, Routes } from "react-router"

import { routes } from "./routes"
import ScrollHandler from "./components/ScrollHandler"

const App = () => {


  return (
    <BrowserRouter>
      <ScrollHandler />
      
      <Routes>
        {routes.map((route) => (
          <Route element={route.component} path={route.path} key={route.id} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App

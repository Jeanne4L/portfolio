import { BrowserRouter, Route, Routes } from "react-router"

import { routes } from "./routes"
import ScrollToAnchor from "./components/ScrollToAnchor"

const App = () => {


  return (
    <BrowserRouter>
      <ScrollToAnchor />
      
      <Routes>
        {routes.map((route) => (
          <Route element={route.component} path={route.path} key={route.id} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router"

import { routes } from "./routes"

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route element={route.component} path={route.path} key={route.id} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App

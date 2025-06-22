import Home from "./pages/Home"
import ProjectPage from "./pages/Project"

export const routes = [
  {
    component: <Home />,
    path: '/',
    id: 'home'
  },
  {
    component: <ProjectPage />,
    path: '/projects/:projectId',
    id: 'project'
  }
]
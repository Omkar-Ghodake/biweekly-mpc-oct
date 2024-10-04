import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Navbar from './layouts/Navbar.jsx'
import Activities from './pages/Activities.jsx'
import Intro from './pages/Intro.jsx'
import Cards from './pages/Cards.jsx'
import Graph from './pages/Graph.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/intro',
    element: <Intro />,
  },
  {
    path: '/activities',
    element: <Activities />,
  },
  {
    path: '/score',
    element: <Cards />,
  },
  {
    path: '/graph',
    element: <Graph />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/score' element={<Cards />} />
        <Route path='/graph' element={<Graph />} />
      </Routes>
    </BrowserRouter>

    {/* <Navbar />
    <RouterProvider router={router} /> */}
  </StrictMode>
)

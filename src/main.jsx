import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import App from './App.jsx'
import bodyBg from './assets/intro_bg.mp4'
import BgVideo from './components/BgVideo.jsx'
import PowerMenuProvider from './context/PowerMenuProvider.jsx'
import './index.css'
import Navbar from './layouts/Navbar.jsx'
import PowerMenu from './layouts/PowerMenu.jsx'
import Activities from './pages/Activities.jsx'
import Exit from './pages/Exit.jsx'
import Graph from './pages/Graph.jsx'
import Intro from './pages/Intro.jsx'
import Score from './pages/Score.jsx'
// import Score from './pages/ScoreNew.jsx'

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
    element: <Score />,
  },
  {
    path: '/graph',
    element: <Graph />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PowerMenuProvider>
        <BgVideo videoSrc={bodyBg} loop={true} />
        <Navbar />
        <PowerMenu />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/intro' element={<Intro />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/score' element={<Score />} />
          <Route path='/graph' element={<Graph />} />
          <Route path='/exit' element={<Exit />} />
        </Routes>
      </PowerMenuProvider>
    </BrowserRouter>
  </StrictMode>
)

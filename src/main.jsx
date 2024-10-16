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
// import Score from './pages/Score.jsx'
import Score from './pages/ScoreNew.jsx'
import ScoreCardProvider from './context/ScoreCardProvider.jsx'
import BlackScreen from './pages/BlackScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScoreCardProvider>
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
            <Route path='/black' element={<BlackScreen />} />
          </Routes>
        </PowerMenuProvider>
      </ScoreCardProvider>
    </BrowserRouter>
  </StrictMode>
)

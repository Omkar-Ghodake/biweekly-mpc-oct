import { Link } from 'react-router-dom'
import './App.css'
import bgVideo from './assets/start_bg.mp4'
import { motion } from 'framer-motion'
import BgVideo from './components/BgVideo'
function App() {
  return (
    <>
      <div className=''>
        <BgVideo videoSrc={bgVideo} />

        <Link to={'/intro'}>
          <motion.button
            initial={{ opacity: 0, scaleY: 0, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scaleY: 1, x: '-50%', y: '-50%' }}
            transition={{ delay: 3 }}
            className='text-4xl font-mars w-48 h-48 absolute left-1/2 top-1/2 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-sky-500/30  border-transparent hover:border-sky-300/80 duration-300 active:bg-sky-500/40'
          >
            <span>START</span>
          </motion.button>
        </Link>
      </div>
    </>
  )
}

export default App

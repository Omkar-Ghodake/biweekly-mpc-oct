import { Link } from 'react-router-dom'
import './App.css'
import bgVideo from './assets/start_bg.mp4'
import { motion } from 'framer-motion'
function App() {
  return (
    <>
      <div className=''>
        <video className='absolute -z-50 bg-video object-cover' muted autoPlay>
          <source src={bgVideo} type='video/mp4' />
          Video not supported
        </video>

        <Link to={'/intro'}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className='text-4xl font-mars w-48 h-48 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-sky-500/30  border-transparent hover:border-sky-300/80 duration-300 active:bg-sky-500/40'
          >
            <span>START</span>
          </motion.button>
        </Link>
      </div>
    </>
  )
}

export default App

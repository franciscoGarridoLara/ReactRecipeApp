import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import React from 'react'
import {motion} from 'framer-motion'


function Home() {
  return (
    <motion.div>
      <Popular></Popular>
      <Veggie></Veggie>
    </motion.div>
  )
}

export default Home
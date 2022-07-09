import VeggieDessert from "../Component/VeggieDessert";
import Popular from "../Component/Popular";
import {motion} from 'framer-motion';
import { RecipeProvider } from "../ClientApi";



import React from 'react'

function Home() {
  return (
  <RecipeProvider>

    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
        <Popular/>
        <VeggieDessert/>
    </motion.div>
  </RecipeProvider>
  )
}

export default Home
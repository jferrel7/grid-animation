import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const isOpenClass = (isOpen) ? 'grow' : ''

  return (
    <motion.div 
      className={`card ${props.color} ${isOpenClass}`} 
      onClick={() => setIsOpen(!isOpen)} 
      animate
      transition={{ type: "tween", duration: .25 }}></motion.div>
  )
}

export default Card
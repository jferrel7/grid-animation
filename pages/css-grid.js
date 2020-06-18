import { motion } from 'framer-motion'
import Rainbow from '../components/rainbow'
import Card from '../components/card'
import { fadeInUp } from '../utils/animations'

const CssGrid = props => {
  return (
    <div>
      <motion.section initial='initial' animate='visible' exit={{ opacity: 0 }}>
        <Rainbow path="/" title="&#8592; Back" />
        <div className="container">
          <motion.div variants={fadeInUp} className="cssgrid">
            <Card color="red" />
            <Card color="orange" />
            <Card color="yellow" /> 
            <Card color="green" />
            <Card color="blue" />
            <Card color="purple" />
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default CssGrid

import Link from 'next/link'
import Rainbow from '../components/rainbow'
import styles from '../components/rainbow.module.css'
import { motion } from 'framer-motion'
import Card from '../components/card'
import { fadeInUp, stagger } from '../utils/animations'

const Index = props => {
  return (
    <div>
      <motion.section initial='initial' animate='visible' exit={{ opacity: 0 }}>
        <div className="container">
          <motion.div variants={fadeInUp}>
            <h1>Card Grid Animation</h1>
            <p className="overview">An experiment in animating a card within a grid of cards to grow in height and width when selected. The first example uses CSS grid layout and the second uses CSS flexbox layout to establish the grid of cards.</p>
            <ul>
              <li>
                <Rainbow path="/css-grid" title="CSS Grid example" />
              </li>
              <li>
                <Rainbow path="/flexbox" title="Flexbox example" />
              </li>
            </ul>
            <p><a href="https://www.framer.com/motion/" title="Framer Motion (beta)" className={styles.rainbow}>Framer Motion (beta)</a> is used to auto-magically animate the expanded card and to animate page transitions.</p>
            <p>Powered by <a href="https://nextjs.org" title="NextJS" className={styles.rainbow}>NextJS</a></p>
            <p>Deployed and hosted with <a href="https://vercel.com/" title="Vercel (formerly ZEIT)" className={styles.rainbow}>Vercel (formerly ZEIT)</a></p>
            <p>Dev by <a href="https://www.natural-logic.com" title="Jason Ferrell" className={styles.rainbow}>Jason Ferrell</a></p>
            <p>Source code at <a href="https://github.com/jferrel7/grid-animation" title="GitHub" className={styles.rainbow}>GitHub</a></p>
          </motion.div>
        </div>
      </motion.section>
      <style jsx>{`
        .container {
          margin: 0px auto;
          max-width: 540px;
        }
        h1 {
          font-size: 2rem;
          line-height: 2.5rem;
        }
        .overview {
          font-size: 1.25rem;
          line-height: 1.5rem;
        }
        li {
          font-size: 1.5rem;
          line-height: 2rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default Index

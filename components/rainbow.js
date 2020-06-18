import Link from 'next/link'
import styles from './rainbow.module.css'

const Rainbow = (props) => {
  return (
    <>
      <Link href={props.path}>
        <a title={props.title} className={styles.rainbow}>{props.title}</a>
      </Link>
    </>
  )
}

export default Rainbow
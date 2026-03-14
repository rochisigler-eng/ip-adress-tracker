import styles from './Data.module.scss'

const Data = ({text}) => {
  return (
    <p className={styles.data}>{text}</p>
  )
}

export default Data
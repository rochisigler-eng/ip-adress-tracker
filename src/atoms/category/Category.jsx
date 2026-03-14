import styles from './Category.module.scss'

const Category = ({text}) => {
  return (
    <p className={styles.category}>{text}</p>
  )
}

export default Category
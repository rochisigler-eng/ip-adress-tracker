import styles from './Button.module.scss'

const Button = () => {
  return (
    <button
      type='submit'
      className={styles.searchButton}>
      <img className={styles.arrowSearchIcon} src="assets/images/icon-arrow.svg" alt="search button" />
    </button>
  )
}

export default Button
import styles from './Input.module.scss'

const Input = ({setValue , value}) => {
  return (
    <input
    value={value} 
    className={styles.searchInput} 
    type="text" 
    placeholder="Search for any IP address or domain"
    onChange={(e)=> setValue(e.target.value)}
    />
  )
}

export default Input
import Input from "../../atoms/input/Input"
import Button from "../../atoms/button/Button"
import styles from "./SearchBar.module.scss"
import { useState } from 'react'

const SearchBar = ({setIp}) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    setIp(value)
  }

  return (
    <form className={styles.searchBar} onSubmit={()=>handleSubmit(e)}>
      <Input
      setValue = {setValue}
      value = {value}
      />
      <Button />
    </form>
  )
}

export default SearchBar
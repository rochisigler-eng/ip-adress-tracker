import Details from "../../molecules/details/Details"
import styles from './AddressInformation.module.scss'

const AddressInformation = ({data}) => {
  return (
    <div className={styles.addressInformation}>
      <Details
      data= {data}
      />
    </div>
  )
}

export default AddressInformation
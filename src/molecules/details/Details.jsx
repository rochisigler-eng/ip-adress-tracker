import Category from "../../atoms/category/Category"
import Data from "../../atoms/data/Data"
import styles from './Details.module.scss'

const Details = ({ data }) => {
    return (
        <>
            {
                data.map((detail, index) => (

                    <div key={index} className={styles.details}>
                        <Category
                            text={detail.name}
                        />
                        <Data
                            text={detail.info}
                        />
                        {index < data.length-1 ? <hr className={styles.line} /> : null}
                    </div>
                ))
            }
        </>
    )
}

export default Details
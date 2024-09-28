
import styles from "./pagination.module.css"
function pagination (){
    return(
        <div className={styles.pagination}>
            <button className={styles.button} disabled>Previous</button>
            <button className={styles.buttons}>next</button>
            <div></div>
        </div>
    )
}

export default pagination
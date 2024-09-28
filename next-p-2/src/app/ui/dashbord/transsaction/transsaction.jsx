import styles from "./transaction.module.css"
import Image from "next/image"

function transsaction() {
  return (
    <div className={styles.container}>
      <div className="title">Latest Transaction</div>
      <table className={styles.table}>
        <thead>
          <tr>
          <td>Name</td>
          <td>Status</td>
          <td>Dete</td>
          <td>Rank</td>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>
              <div className={styles.user}>
              <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
              John doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pendding</span>
            </td>
            <td>10.02.2023</td>
            <td>Manneger</td>
          </tr>


          <tr>
            <td>
              <div className={styles.user}>
              <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
              John doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Pendding</span>
            </td>
            <td>10.02.2023</td>
            <td>Manneger</td>
          </tr>


          <tr>
            <td>
              <div className={styles.user}>
              <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
              John doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.canceled}`}>Pendding</span>
            </td>
            <td>10.02.2023</td>
            <td>Manneger</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default transsaction
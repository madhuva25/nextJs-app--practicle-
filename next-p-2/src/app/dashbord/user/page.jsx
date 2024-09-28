
"use client"
import Search from "@/app/ui/dashbord/search/search"
import styles from "./user.module.css"
import Link from "next/link"
import Image from  "next/image"
import Pagination from "../pagination/pagination"
import {fetchUser} from "@/app/lib/data.js"

const user = async () => {
  const users = await fetchUser(); 
  console.log("user", users)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <Search placeholder="Search for a user...."/>
      <Link href="/dashbord/user/add">
      <button className={styles.addButton}>Add New</button>
      </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={styles.user}>
              <Image src="/noavatar.png" alt=""
              width={40}
              height={40}
              className={styles.userImage} />
              Jone Dove
              
              </div></td>
              <td>john@gmail.com</td>
              <td>13.01.2024</td>
              <td>Admin</td>
              <td>Active</td>
              <div className={styles.buttons}>
              <Link href="/dashbord/user/test">
                <button className={`${styles.button} ${styles.viwe}`}>Viwe</button>
              </Link>
              <Link href="/">
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </Link>
              </div>

          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default user
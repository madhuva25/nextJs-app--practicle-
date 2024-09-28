"use client"
import Search from "@/app/ui/dashbord/search/search"
import styles from "@/app/dashbord/user/user.module.css"
import Link from "next/link"
import Image from  "next/image"
import Pagination from "../pagination/pagination"
 
 function products() {
   return (
    <div className={styles.container}>
      <div className={styles.top}>
      <Search placeholder="Search for a product...."/>
      <Link href="/dashbord/products/add">
      <button className={styles.addButton}>Add New</button>
      </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={styles.user}>
              <Image src="/noproduct.jpg" alt=""
              width={40}
              height={40}
              className={styles.userImage} />
             IPone
              
              </div></td>
              <td>Description</td>
              <td>$999</td>
              <td>Admin</td>
              <td>72</td>
              <div className={styles.buttons}>
              <Link href="/dashbord/products/test">
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
 
 export default products
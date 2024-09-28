
import styles from "./rightBar.module.css"

import Image from "next/image";
import { MdPlayCircleFilled } from 'react-icons/md';

function righBar() { 
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut (1).png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.tests}>
          <span className={styles.notificatione}>🔥 Available Now</span>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>

          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>

        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut (1).png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.tests}>
          <span className={styles.notificatione}>🔥 Available Now</span>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>

          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          

          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>

       

    </div>
    </div>
    </div>
  )
}

export default righBar
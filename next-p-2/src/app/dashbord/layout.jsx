
import Sidebar from "../ui/dashbord/sidebar/page";
import Navbar from "../ui/dashbord/navbar/page";
import styles from "../ui/dashbord/dashbord.module.css"
import Footer from "../ui/dashbord/footer/footer"
function layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
       <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  );
}

export default layout;

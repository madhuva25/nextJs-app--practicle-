
import Image from "next/image";
import styles from './sidebar.module.css'
import MenuLink from './menuLink/menuLink';
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";

const menuItems = [{
    title:"page",
    list:[
        {
            title: "Dashbord",
            path:'/dashbord',
            icon:<MdDashboard/>,
        },
        {
            title:"User",
            path:"/dashbord/user",
            icon:<MdSupervisedUserCircle/>
        },
        {
            title:"products",
            path:"/dashbord/products",
            icon:<MdShoppingBag/>,
        },
        {
            title:"Transaction",
            path:"/dashbord/transaction",
            icon:<MdAttachMoney/>,
        },
    ],
},
{
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },]
  
const sidebar = async () => {
    
  return (
   <div className={styles.container}>
    <div className={styles.user}>
      <Image  className={styles.userImage} src="/noavatar.png" width="50" height="50" />
    <div className={styles.userDetail}>
      <span className={styles.username}>john doe</span>
      <span className={styles.userTitle}>admin</span>
    </div>
    </div>
   
    <ul className={styles.list}>
        {menuItems.map(cat=>{
            return(
            <li key ={cat.title}>
         <span className={styles.cat}>{cat.title}</span>
         {cat.list.map((item)=>(
            < MenuLink item={item} key={item.title}/>
         ))}
         </li>
            )
        })}
    </ul>

    <button className={styles.logout}>
      <MdLogout/>Logout</button>
    </div>
  )
}

export default sidebar
 
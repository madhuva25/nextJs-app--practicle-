
import { MdSupervisedUserCircle } from 'react-icons/md'
import style from './card.module.css'
function card() {
  return (
    <div className={style.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={style.text}>
       <span className={style.title}> Total user</span> 
       <span className={style.number}>10.273</span> 
       <span className={style.detail}>
       <span className={style.positive}>12% </span>more than previouse week</span> 
      </div>
    </div>
 
    )
}

export default card

import Card from "../ui/dashbord/card/card";
import Chart from "../ui/dashbord/chart/chart";
import Rightbar from "../ui/dashbord/righbar/righBar";
import Transsaction from "../ui/dashbord/transsaction/transsaction";
import styles from "../ui/dashbord/dashbord.module.css";
const dashbord = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transsaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default dashbord;

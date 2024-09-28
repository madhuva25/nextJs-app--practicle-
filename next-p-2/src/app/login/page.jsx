import styles from "./login.module.css";

function login() {
  return (
    <div className={styles.container}>
      
      
      <form action="" className={styles.form}>
      <h1>Login</h1>
        <input type="text" name="login" placeholder="username" />
        <input type="password" name="login" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default login;


import styles from"@/app/dashbord/products/add/addproduct.module.css"
function page() {
  return (
    <div className={styles.container}>
    <form  className={styles.form}>
      <input type="text" placeholder="Username" name="Username" required />
      <input type="email" placeholder="Email" name="Email"required />
      <input type="password" placeholder="password" name="password"required />
      <input type="text" placeholder="Phone" name="Phone"required />
        <select name="isActive" id="isActive">
        <option value={false}>Is Admin</option>
        <option value={true}>yes</option>
        <option value={false}>No</option>
        </select>

        <select name="isActive" id="isActive">
        <option value={false}>Is Active</option>
        <option value={true}>yes</option>
        <option value={false}>No</option>
        </select>


      <textarea
        required
        name="Address"
        id="Address"
        rows="16"
        placeholder="Address"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default page
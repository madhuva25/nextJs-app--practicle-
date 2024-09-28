
import mysql from 'mysql2/promise';

async function connectDB({query, values = []}) {
  let dbconnection;
  try {
    dbconnection = await mysql.createConnection({
      host: "localhost",
      database: "dashbord",
      user: "root",
      password: "123456Ms@",
    });
    console.log('Database connection established successfully');
  } catch (error) {
    console.error('Failed to establish database connection:', error);
    throw error; // Throw the error so it can be caught and handled by the calling function
  }

  try {
    if (query && values) {
      const [rows] = await dbconnection.execute(query, values);
      console.log('Query results:', rows); // Log the results
      return rows; // Return the rows
    } else {
      console.error('query or values is undefined');
      throw new Error('query or values is undefined'); // Throw an error if query or values is undefined
    }
  } catch (error) {
    console.error('Error executing query:', error); // Log any errors
    throw error; // Throw the error so it can be caught and handled by the calling function
  } finally {
    if (dbconnection) {
      dbconnection.end(); // Ensure the connection is always closed, even if an error occurs
    }
  }
}

export default {connectDB};

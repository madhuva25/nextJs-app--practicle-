
import connectDB from "./utils";

export const fetchUser = async (req,res) => {
    try {
        const user = await connectDB({
            query: "SELECT * FROM dashbord.user",
            value: [],
        });

        // Convert user to a plain object
        const userPlainObject = Object.assign({}, user);

        let data = JSON.stringify(userPlainObject);
        return new Response(data, {
            status: 200,
        });

    } catch(err) {
        console.error("Error in fetchUser:", err);
        
        // Return a response with an error status
        return new Response(JSON.stringify({ error: "Failed to fetch users!" }), {
            status: 500,
        });
    }
}

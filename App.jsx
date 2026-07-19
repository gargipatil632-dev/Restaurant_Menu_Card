import foodImage from './assets/food.png';

function App() {
    return (
        <div style={{ fontFamily: "Arial", backgroundColor: "#fff8f0", padding: "20px" }}>

            <img
                src={foodImage}
                alt="Restaurant Banner"
                style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "10px" }}
            />


            <h1 style={{ textAlign: "center", color: "#d35400" }}>RESTAURANT</h1>
            <h2 style={{ textAlign: "center", color: "#555" }}>Today's Special Menu</h2>

            <p style={{ textAlign: "center", fontSize: "16px" }}>
                Taste the best food in Nashik. Fresh ingredients, Great taste!
            </p>

            <table border="1" style={{ margin: "20px auto", width: "80%", borderCollapse: "collapse", backgroundColor: "white" }}>
                <thead style={{ backgroundColor: "#d35400", color: "white" }}>
                <tr>
                    <th style={{ padding: "10px" }}>Item No</th>
                    <th style={{ padding: "10px" }}>Dish Name</th>
                    <th style={{ padding: "10px" }}>Category</th>
                    <th style={{ padding: "10px" }}>Price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{ padding: "10px", textAlign: "center" }}>1</td>
                    <td style={{ padding: "10px" }}>Paneer Butter Masala</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>Veg</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>₹220</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", textAlign: "center" }}>2</td>
                    <td style={{ padding: "10px" }}>Chicken Biryani</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>Non-Veg</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>₹280</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", textAlign: "center" }}>3</td>
                    <td style={{ padding: "10px" }}>Veg Fried Rice</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>Veg</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>₹150</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", textAlign: "center" }}>4</td>
                    <td style={{ padding: "10px" }}>Gulab Jamun</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>Dessert</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>₹80</td>
                </tr>
                </tbody>
            </table>
            <hr />

            <div style={{ textAlign: "center", color: "gray" }}>
                Contact: 9876543210 | Address: Nashik, Maharashtra
            </div>

        </div>
    );
}

export default App;
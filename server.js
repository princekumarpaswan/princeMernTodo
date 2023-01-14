const app = require("./app")
require("dotenv").config();


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`App is live at http:localhost:${PORT}`);
})
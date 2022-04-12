const express = require("express")
const app = express();
const PORT = process.env.PORT || 2000;
require("dotenv").config()

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})
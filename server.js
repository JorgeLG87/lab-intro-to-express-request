const app = require("./app.js");
require("dotenv");


const PORT = 8888;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
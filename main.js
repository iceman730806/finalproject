let express = require('express');
let app = express();
let port = process.env.PORT || 8888
let phone_router = require('./routers/main_router.js')

app.get("/", (req, res) => {
    res.send("This is main page.");
})

app.use("/phone", phone_router)

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
});
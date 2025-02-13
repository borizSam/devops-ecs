const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("¡Hola, Boris --> Enorabuena conseguiste hacer el depliegue --> DevOps en AWS ECS con Fargate!");
});

app.listen(port, () => {
    console.log(`Este servidor se esta corriendo en el puerto ${port}`);
});

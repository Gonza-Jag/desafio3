const express = require("express")
const Contenedor = require ("./contenedorProductos.js")
const app = express()

const productos = new Contenedor("./camisetas.txt")

app.get("/", (req, res)=>{
    res.status(202).send("Las rutas disponibles son: /productos y /productoRandom")
})

app.get("/productos", async (req, res)=>{
    
    const camisetas = await productos.getAll()
    res.send(camisetas)


})

app.get ("/productoRandom",async (req, res)=>{
    const camisetas = await productos.getAll()
  const camisetaRandom = camisetas[Math.floor(Math.random() * camisetas.length)]

    res.send(camisetaRandom)
})





app.listen(8080,()=>{
    console.log("server listening on port 8080")

})

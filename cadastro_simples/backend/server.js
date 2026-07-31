const express=require("express");
const cors=require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const pessoaRoutes=require("./routes/pessoaRoutes");
app.use("/pessoas", pessoaRoutes);
const PORT = 3001;
app.listen(PORT, ()=>{
    console.log("---------------------");
    console.log("Servidor Iniciado");
    console.log("http://localhost:3001");
    console.log("---------------------");

});
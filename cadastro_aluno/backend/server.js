require("dotenv").config();

require("./config/db");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Teste da API
app.get("/", (req, res) => {
    res.send("API Cadastro de Alunos funcionando!");
});

// Rotas
const alunoRoutes = require("./routes/alunos");
app.use("/api/alunos", alunoRoutes);

app.listen(process.env.PORT, () => {
    console.log("--------------------------------");
    console.log("Servidor iniciado com sucesso");
    console.log("http://localhost:" + process.env.PORT);
    console.log("--------------------------------");
});
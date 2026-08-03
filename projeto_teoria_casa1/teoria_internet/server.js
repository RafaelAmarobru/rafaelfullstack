const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let tarefas = [
    { id: 1, titulo: "Estudar JavaScript Full Stack"},
    { id: 2, titulo: "Configurar o servidor Node.js"}
];

app.get('/api/tarefas', (req, res) => {
    res.json(tarefas);
});

app.post('/api/tarefas', (req, res) => {
    const novaTarefa = { 
        id: tarefas.length + 1,
        titulo: req.body.titulo
    };
    tarefas.push(novaTarefa);
    res.status(201), json(novaTarefa);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
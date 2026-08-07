const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Configuração do armazenamento na hospedagem
const armazenamento = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/galerias/'); // Pasta onde as fotos dos clientes ficarão salvas
    },
    filename: function (req, file, cb) {
        // Renomeia o arquivo para evitar duplicados (Ex: 17123456789-foto.jpg)
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Filtro para aceitar apenas imagens
const filtroImagens = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Apenas arquivos de imagem são permitidos!'), false);
    }
};

const upload = multer({ storage: armazenamento, fileFilter: filtroImagens });

// Rota para o fotógrafo subir até 50 fotos de uma vez para o cliente escolher
app.post('/api/galeria/upload', upload.array('fotos', 50), (req, res) => {
    try {
        const arquivosSalvos = req.files.map(file => file.path);
        
        // Aqui você salvaria o array "arquivosSalvos" no banco de dados atrelado ao evento do cliente
        
        res.status(200).json({ 
            mensagem: 'Fotos enviadas com sucesso para a galeria!', 
            fotos: arquivosSalvos 
        });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

import express, { Request, Response } from 'express';
import multer from 'multer';
import sharp from 'sharp';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs'; 

const app = express();
const prisma = new PrismaClient(); 

// Configura o Multer para guardar o arquivo temporariamente na memória
const storage = multer.memoryStorage();
const upload = multer({ storage }); 

// Garante que a pasta de uploads existirá no servidor
const UPLOAD_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) {
fs.mkdirSync(UPLOAD_DIR, { recursive: true });
} 

// Endpoint para upload e processamento avançado
app.post('/images', upload.single('image'), async (req: Request, res: Response): Promise => {
try {
if (!req.file) {
return res.status(400).json({ error: 'Nenhuma imagem enviada.' });
} 

// Cria um nome único com extensão .webp
const filename = ${Date.now()}-${Math.round(Math.random() * 1E9)}.webp;
const outputPath = path.join(UPLOAD_DIR, filename);

// Processamento avançado com Sharp: Redimensiona, converte para WebP e reduz qualidade
await sharp(req.file.buffer)
.resize(800, 800, { fit: 'inside', withoutEnlargement: true })
.toFormat('webp', { quality: 80 })
.toFile(outputPath);

// URL ou caminho que será guardado no banco de dados
const imageUrl = /uploads/${filename};

// Salva a referência da imagem no banco de dados usando Prisma
const newRecord = await prisma.imageRecord.create({
data: {
title: req.body.title || 'Sem título',
url: imageUrl,
},
});

return res.status(201).json({
message: 'Imagem processada e salva com sucesso!',
data: newRecord,
});

} catch (error) {
console.error(error);
return res.status(500).json({ error: 'Erro interno ao processar imagem.' });
}
}); 

// Serve os arquivos de imagem estáticos para o front-end acessar
app.use('/uploads', express.static(UPLOAD_DIR)); 

app.listen(3000, () => {
console.log('Servidor rodando em http://localhost:3000');
});
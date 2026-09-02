require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mysql = require("mysql2");

const fs = require("fs");

const app = express();
const PORTA = Number(ProcessingInstruction.env.PORT)||3001;

app.use(cors());
app.use(express.json());

const conexao = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT)||3306,
    user: process.env.DB_PASSWORDZ||"",
    database: process.env.DB_NAME,
    waitForCOnnections: true,
    connectionLimit: 10
});

const path = require("path");

const pastaUploads = path.join(__dirname, "uploads");
fs.mkdirSync(pastaUploads, { recursive: true });
app.use("/uploads", express.static(pastaUploads));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, pastaUploads);
    },
    filename: (req, file, cb) =>{
        const extensao = path.extname(file.originalname);

        const data = Date.now();

        const aletatorio = Math.round(
            Math.randon()*1e9
        );

        const novoNome = 
        `${data}-${aleatorio}${extensao}`;

         // Informa ao Multer o novo nome do arquivo 
    // null = nenhum erro 
    cb(null, novoNome); 
 
  } 
 
}); 
 
// ========================================== 
// CONFIGURAÇÃO DO UPLOAD 
// ========================================== 
// Este bloco configura o Multer. 
// Ele usa o "storage" criado anteriormente, 
// verifica se o arquivo é uma imagem 
// e limita o tamanho a 5 MB. 
 
const upload = multer({ 
  storage, 
 
  fileFilter: (req, file, cb) => { 
    if (!file.mimetype.startsWith("image/")) { 
      return cb( 
        new Error("Envie apenas arquivos de imagem.") 
      ); 
    } 
      cb(null, true); 
  }, 
 
  limits: { 
    fileSize: 5 * 1024 * 1024 
  } 
}); 
 
// ========================================== 
// ROTA PRINCIPAL 
// ========================================== 
// Esta rota serve para verificar se o backend 
// está funcionando. 
 
app.get("/", (req, res) => { 
  res.json({ 
    mensagem: "Backend funcionando!" 
  }); 
}); 
 
// ========================================== 
// TESTE DA CONEXÃO COM O BANCO 
// ========================================== 
// Esta rota usa a conexão "conexao" criada 
// anteriormente para testar o MySQL. 
 
app.get("/teste-banco", async (req, res) => { 
  try { 
    await conexao.promise().query("SELECT 1"); 
 
    res.json({ 
      mensagem: 
        `Banco ${process.env.DB_NAME} conectado com sucesso!` 
    }); 
 
  } catch (erro) { 
    res.status(500).json({ 
      mensagem: "Erro ao conectar ao banco.", 
      erro: erro.message 
    }); 
  } 
}); 
 
// ========================================== 
// RECEBER E SALVAR A IMAGEM 
// ========================================== 
// Esta é a rota principal do projeto. 
// 
// Ela interage com: 
// - upload → recebe e valida a imagem 
// - storage → define pasta e nome do arquivo 
// - conexao → grava os dados no MySQL 
// - pastaUploads → local onde a imagem é salva 
 
app.post( 
  "/upload", 
 
  upload.single("imagem"), 
 
  async (req, res) => { 
 
    if (!req.file) { 
      return res.status(400).json({ 
        mensagem: "Nenhuma imagem foi enviada." 
      }); 
    } 
 
    const { 
      filename, 
      originalname, 
      mimetype, 
      size, 
      path: caminhoArquivo 
    } = req.file; 
 
    try { 
 
      const [resultado] = 
        await conexao.promise().query( 
 
          `INSERT INTO imagens 
          (nome_arquivo, nome_original, tipo, tamanho) 
          VALUES (?, ?, ?, ?)`, 
 
          [ 
            filename, 
            originalname, 
            mimetype, 
            size 
          ] 
        ); 
 
      res.status(201).json({ 
        mensagem: "Imagem salva com sucesso!", 
        id: resultado.insertId, 
arquivo: filename, 
        url: 
          `http://localhost:${PORTA}/uploads/${filename}` 
      }); 
 
    } catch (erro) { 
 
      // Se ocorrer erro no banco, 
      // a imagem salva na pasta é apagada. 
      if (fs.existsSync(caminhoArquivo)) { 
        fs.unlinkSync(caminhoArquivo); 
      } 
 
      console.error( 
        "Erro ao salvar no banco:", 
        erro.message 
      ); 
 
      res.status(500).json({ 
        mensagem: 
          "Erro ao salvar os dados da imagem no banco.", 
        erro: erro.message 
      }); 
    } 
 
  } 
); 
 
// ========================================== 
// TRATAMENTO DE ERROS DO UPLOAD 
// ========================================== 
// Este bloco recebe erros gerados pelo Multer, 
// como arquivo maior que 5 MB ou arquivo que 
// não seja uma imagem. 
 
app.use((erro, req, res, next) => { 
 
  if ( 
    erro instanceof multer.MulterError && 
    erro.code === "LIMIT_FILE_SIZE" 
  ) { 
    return res.status(400).json({ 
      mensagem: 
        "A imagem deve ter no máximo 5 MB." 
    }); 
  } 
 
  if (erro) {
     return res.status(400).json({ 
      mensagem: erro.message 
    }); 
  } 
 
  next(); 
}); 
 
// ========================================== 
// TESTE INICIAL DO BANCO 
// ========================================== 
// Quando o servidor inicia, este bloco tenta 
// obter uma conexão usando o pool "conexao". 
// 
// Se funcionar, mostra no terminal o nome 
// do banco conectado. 
 
conexao.getConnection( 
  (erro, conexaoTeste) => { 
 
    if (erro) { 
 
      console.error( 
        "Erro ao conectar ao banco:", 
        erro.message 
      ); 
 
    } else { 
 
      console.log( 
        "Conectado ao banco:", 
        process.env.DB_NAME 
      ); 
 
      conexaoTeste.release(); 
    } 
 
  } 
); 
 
app.listen(PORTA, () => { 
  console.log(`Servidor rodando em http://localhost:${PORTA}`); 
});
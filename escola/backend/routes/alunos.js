const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.json({
        mensagem:"Rota de alunos funcionando."
    });
});

module.exports=router;
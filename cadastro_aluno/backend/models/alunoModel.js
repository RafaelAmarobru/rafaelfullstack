const db = require("../config/db"); 
 
const Aluno = { 
 
    inserir(aluno, callback) { 
 
        const sql = ` 
            INSERT INTO alunos (cpf, nome, email, celular) 
            VALUES (?, ?, ?, ?) 
        `; 
 
        db.query( 
            sql, 
            [ 
                aluno.cpf,
                aluno.nome, 
                aluno.email, 
                aluno.celular 
            ], 
            callback 
        ); 
    }, 
 
    consultar(cpf, callback) { 
 
        const sql = ` 
            SELECT * 
            FROM alunos 
            WHERE cpf = ? 
        `; 
 
        db.query(sql, [cpf], callback); 
    }, 
 
    excluir(cpf, callback) { 
 
        const sql = ` 
            DELETE 
            FROM alunos 
            WHERE cpf = ? 
        `; 
 
        db.query(sql, [cpf], callback); 
    } 
 
}; 
 
module.exports = Aluno;
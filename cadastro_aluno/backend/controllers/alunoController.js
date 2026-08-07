const Aluno = require("../models/alunoModel");

exports.inserir = (req, res) => {

    Aluno.inserir(req.body, (erro, resultado) => {

        if (erro) {
            console.error(erro);
            return res.status(500).json({
                erro: erro.message,
                codigo: erro.code
            });
        }

        res.json({
            mensagem: "Aluno cadastrado com sucesso."
        });

    });

};

exports.consultar = (req, res) => {

    Aluno.consultar(req.params.cpf, (erro, resultado) => {

        if (erro) {
            console.error(erro);
            return res.status(500).json({
                erro: erro.message,
                codigo: erro.code
            });
        }

        res.json(resultado);

    });

};

exports.excluir = (req, res) => {

    Aluno.excluir(req.params.cpf, (erro, resultado) => {

        if (erro) {
            console.error(erro);
            return res.status(500).json({
                erro: erro.message,
                codigo: erro.code
            });
        }

        res.json({
            mensagem: "Aluno removido."
        });

    });

};
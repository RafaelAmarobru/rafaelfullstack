const PDFDocument = require('pdfkit');
const fs = require('fs');

// Função para gerar o contrato em PDF baseado nos dados do banco
function gerarContratoPDF(dadosCliente, dadosEvento, caminhoArquivo) {
    const doc = new PDFDocument({ margin: 50 });

    // Salva o arquivo no disco de hospedagem
    doc.pipe(fs.createWriteStream(caminhoArquivo));

    // Cabeçalho do Contrato
    doc.fontSize(20).text('CONTRATO DE PRESTAÇÃO DE SERVIÇOS FOTOGRÁFICOS', { align: 'center' });
    doc.moveDown(2);

    // Corpo do texto com dados dinâmicos
    doc.fontSize(12).text(`CONTRATANTE: ${dadosCliente.nome}, portador do e-mail ${dadosCliente.email}.`);
    doc.text(`CONTRATADO: [Seu Nome/Empresa de Fotografia].`);
    doc.moveDown();
    
    doc.text(`OBJETO: O presente contrato tem como objeto a prestação de serviços de cobertura fotográfica para o evento do tipo "${dadosEvento.tipoEvento}", a ser realizado na data de ${dadosEvento.data}.`);
    doc.moveDown();

    doc.text(`VALOR E PAGAMENTO: Pelo serviço contratado, o CONTRATANTE pagará o valor total de R$ ${dadosEvento.valor.toFixed(2)}.`);
    doc.moveDown(3);

    // Áreas de Assinatura
    doc.text('_____________________________________', { align: 'center' });
    doc.text('Contratante', { align: 'center' });
    doc.moveDown(2);
    doc.text('_____________________________________', { align: 'center' });
    doc.text('Contratado', { align: 'center' });

    doc.end();
}

// Exemplo de uso:
// gerarContratoPDF({nome: "Mariana Silva", email: "mari@email.com"}, {tipoEvento: "Casamento", data: "12/12/2026", valor: 4500.00}, 'contratos/contrato_mariana.pdf');

// script.js
function alterarCores() {
    const corFundo = document.getElementById("bgColor").value;
    const corFaixa1 = document.getElementById("faixa1Color").value;
    const corFaixa2 = document.getElementById("faixa2Color").value;
    const corFaixa3 = document.getElementById("faixa3Color").value;

    // Alterando a cor de fundo
    document.body.style.backgroundColor = corFundo;

    // Alterando as cores das faixas
    document.getElementById("faixa1").style.backgroundColor = corFaixa1;
    document.getElementById("faixa2").style.backgroundColor = corFaixa2;
    document.getElementById("faixa3").style.backgroundColor = corFaixa3;

    // Salvando as cores no localStorage para persistência
    localStorage.setItem("corFundo", corFundo);
    localStorage.setItem("corFaixa1", corFaixa1);
    localStorage.setItem("corFaixa2", corFaixa2);
    localStorage.setItem("corFaixa3", corFaixa3);
}

// Carregando as cores salvas ao carregar a página
window.onload = function() {
    const corFundo = localStorage.getItem("corFundo");
    const corFaixa1 = localStorage.getItem("corFaixa1");
    const corFaixa2 = localStorage.getItem("corFaixa2");
    const corFaixa3 = localStorage.getItem("corFaixa3");

    if (corFundo) {
        document.body.style.backgroundColor = corFundo;
        document.getElementById("bgColor").value = corFundo;
    }

    if (corFaixa1) {
        document.getElementById("faixa1").style.backgroundColor = corFaixa1;
        document.getElementById("faixa1Color").value = corFaixa1;
    }

    if (corFaixa2) {
        document.getElementById("faixa2").style.backgroundColor = corFaixa2;
        document.getElementById("faixa2Color").value = corFaixa2;
    }

    if (corFaixa3) {
        document.getElementById("faixa3").style.backgroundColor = corFaixa3;
        document.getElementById("faixa3Color").value = corFaixa3;
    }
};

import { useState, useEffect } from "react";
import "../css/Carrossel.css";


/* ===========================================================
   IMPORTAÇÃO DAS IMAGENS
   Para adicionar novas imagens:
   1) Coloque a imagem na pasta assets/imagens
   2) Faça um novo import
=========================================================== */

import img01 from "../assets/imagens/img01.png";
import img02 from "../assets/imagens/img02.png";
import img03 from "../assets/imagens/img03.png";
import img04 from "../assets/imagens/img04.png";
import img05 from "../assets/imagens/img05.png";

export default function Carrossel() {

  /* ===========================================================
     VETOR DE SLIDES

     Cada objeto representa um slide.

     imagem     -> imagem apresentada
     titulo     -> título do slide
     descricao  -> texto abaixo do título
     botao      -> texto do botão

     Para adicionar novos slides basta criar outro objeto.
     Não existe limite de slides.
  =========================================================== */

  const slides = [

    {
      imagem: img01,
      titulo: "Mundo Fantástico",
      descricao:
        "Explore paisagens incríveis, castelos e montanhas em uma aventura inesquecível.",
      botao: "Saiba mais",
    },

    {
      imagem: img02,
      titulo: "Floresta Encantada",
      descricao:
        "Descubra um lugar mágico repleto de natureza, mistérios e beleza.",
      botao: "Explorar",
    },

    {
      imagem: img03,
      titulo: "Cidade do Futuro",
      descricao:
        "Tecnologia, inovação e sustentabilidade caminhando juntas.",
      botao: "Conhecer",
    },

    {
      imagem: img04,
      titulo: "Novo Horizonte",
      descricao:
        "Imagine um novo mundo cheio de possibilidades e descobertas.",
      botao: "Viajar",
    },

    {
      imagem: img05,
      titulo: "Natureza Viva",
      descricao:
        "A beleza das florestas e a tranquilidade da natureza em um só lugar.",
      botao: "Entrar",
    }

  ];

  /* ===========================================================
     ESTADO

     Guarda qual slide está sendo exibido.
  =========================================================== */

  const [slideAtual, setSlideAtual] = useState(0);

  /* ===========================================================
     TROCA AUTOMÁTICA

     5000 = 5 segundos

     Para alterar:
     3000 = 3 segundos
     8000 = 8 segundos

     O [] evita criar vários temporizadores.
  =========================================================== */

  useEffect(() => {

    const intervalo = setInterval(() => {
      proximoSlide();
    }, 5000);

    return () => clearInterval(intervalo);

  }, [slideAtual]);

  /* ===========================================================
     AVANÇAR
  =========================================================== */

  function proximoSlide() {

    setSlideAtual((anterior) =>
      anterior === slides.length - 1
        ? 0
        : anterior + 1
    );

  }

  /* ===========================================================
     VOLTAR
  =========================================================== */

  function slideAnterior() {

    setSlideAtual((anterior) =>
      anterior === 0
        ? slides.length - 1
        : anterior - 1
    );

  }

  /* ===========================================================
     INTERFACE
  =========================================================== */

  return (

    <div className="carrossel">

      {/* ======================= IMAGENS ====================== */}

      <div className="carrosselImagem">

        <div
          className="carrosselSlides"
          style={{
            transform: `translateX(-${slideAtual * 100}%)`,
          }}
        >

          {slides.map((item, indice) => (

            <div
              className="carrosselSlide"
              key={indice}
            >

              <img
                src={item.imagem}
                alt={item.titulo}
              />

            </div>

          ))}

        </div>

        {/* Botão Anterior */}

        <button
          className="seta esquerda"
          onClick={slideAnterior}
        >
          ❮
        </button>

        {/* Botão Próximo */}

        <button
          className="seta direita"
          onClick={proximoSlide}
        >
          ❯
        </button>

      </div>

      {/* ======================= TEXTO ====================== */}

      <div className="texto">

        <h2>{slides[slideAtual].titulo}</h2>

        <p>{slides[slideAtual].descricao}</p>

        <button className="botao">
          {slides[slideAtual].botao}
        </button>

      </div>

      {/* ==================== INDICADORES ==================== */}

      <div className="indicadores">

        {slides.map((_, indice) => (

          <span

            key={indice}

            className={
              slideAtual === indice
                ? "indicador ativo"
                : "indicador"
            }

            onClick={() => setSlideAtual(indice)}

          />

        ))}

      </div>

      {/* ======================================================
          ÁREA DIDÁTICA
      ======================================================= */}

      <hr />

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          background: "#f8f9fa",
          border: "1px solid #ccc",
          borderRadius: "10px",
          textAlign: "left",
        }}
      >

        <h2>📖 Guia para Alterações</h2>

        <table
          border="1"
          cellPadding="8"
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >

          <thead>

            <tr>

              <th>Desejo alterar...</th>
              <th>Onde alterar?</th>
              <th>Observações</th>

            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Imagem</td>
              <td>Importações + vetor slides</td>
              <td>A imagem deve existir na pasta assets/imagens.</td>
            </tr>

            <tr>
              <td>Título</td>
              <td>Campo titulo</td>
              <td>Sem limite de caracteres.</td>
            </tr>

            <tr>
              <td>Descrição</td>
              <td>Campo descricao</td>
              <td>Textos menores ficam mais bonitos.</td>
            </tr>

            <tr>
              <td>Texto do botão</td>
              <td>Campo botao</td>
              <td>Pode ser qualquer texto.</td>
            </tr>

            <tr>
              <td>Adicionar slides</td>
              <td>Adicionar um novo objeto</td>
              <td>Não existe limite.</td>
            </tr>

            <tr>
              <td>Tempo da troca automática</td>
              <td>useEffect → 5000</td>
              <td>1000 = 1 segundo.</td>
            </tr>

            <tr>
              <td>Velocidade da animação</td>
              <td>Carrossel.css → transition</td>
              <td>Quanto menor, mais rápido.</td>
            </tr>

            <tr>
              <td>Tamanho das imagens</td>
              <td>Carrossel.css</td>
              <td>Alterar width e height.</td>
            </tr>

            <tr>
              <td>Cores dos botões</td>
              <td>Classe .botao</td>
              <td>Pode alterar fundo, texto e borda.</td>
            </tr>

            <tr>
              <td>Indicadores</td>
              <td>.indicador e .ativo</td>
              <td>Alterar cor, tamanho e bordas.</td>
            </tr>

          </tbody>

        </table>

        <br />

        <h2>⚠ Limitações deste projeto</h2>

        <ul>

          <li>Não utiliza banco de dados.</li>

          <li>Não utiliza API.</li>

          <li>As imagens são locais.</li>

          <li>O botão ainda não possui ação.</li>

          <li>Não faz upload de imagens.</li>

          <li>Não possui legendas diferentes por idioma.</li>

          <li>Não possui animação Fade.</li>

          <li>Não possui efeito de Zoom.</li>

          <li>Não possui miniaturas.</li>

          <li>Não possui pausa ao passar o mouse.</li>

          <li>Não possui suporte para arrastar com o mouse.</li>

          <li>Não possui suporte para toque (Swipe) em celulares.</li>

        </ul>

      </div>

    </div>

  );

}
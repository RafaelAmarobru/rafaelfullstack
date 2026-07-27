import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>W3C - World Wide Web Consortium</h1>

        <p>Organização responsável pelos padrões utilizados na construção da Web.</p>
      </header>

      <nav>
        <a href="#w3c">W3C</a>
        <a href="#semantica">Semântica</a>
        <a href="#seo">SEO</a>
        <a href="#react">React</a>
      </nav>

      <main>

        <section id="w3c">

          <h2>O que é W3C?</h2>

          <article>

            <p>
              O W3C (World Wide Web Consortium) define os padrões da Internet.
              Seu Objetivo é fazer com que os sites funcionem corretamente em qualquer navegador e dispositivo.
            </p>

          </article>

        </section>

        <section>

          <h2>Tecnologias Padronizadas</h2>

          <article>

            <table>

              <thead>
                <tr>
                  <th>Tecnologia</th>
                  <th>Função</th>
                </tr>

              </thead>

              <tbody>
                <tr>
                  <td>HTML</td>
                  <td>Estrutura da Página.</td>
                </tr>

                <tr>
                  <td>CSS</td>
                  <td>Define o estilo.</td>
                </tr>

                <tr>
                  <td>SVG</td>
                  <td>Imagens Vetoriais.</td>
                </tr>

                <tr>
                  <td>XML</td>
                  <td>Troca de Dados.</td>
                </tr>

                <tr>
                  <td>WCAG</td>
                  <td>Acessibilidade.</td>
                </tr>

                <tr>
                  <td>Web Components</td>
                  <td>Componentes reutilizaveis.</td>
                </tr>

              </tbody>
            </table>
          </article>
        </section>

        <section id="semantica">
          <h2>Tags Semânticas</h2>
          <article>
            <ul>
              <li><strong>header</strong> - Cabeçalho.</li>
              <li><strong>nav</strong> - Menu.</li>
              <li><strong>main</strong> - Conteudo principal.</li>
              <li><strong>section</strong> - Agrupa conteudos.</li>
              <li><strong>article</strong> - Conteudo independente</li>
              <li><strong>footer</strong> - Rodapé.</li>

            </ul>
          </article>
        </section>

        <section id="seo">
          <h2>SEO</h2>
          <article>
            <p>SEO significa Search Engine Optimizatio.
              Utilizar HTML semântico ajuda o Google a compreender melhor o conteúdo da página.
            </p>

            <img src="https://picsum.photos/500/250" alt="Exemplo de imagem com descrição para acessibilidade"/>
            </article>
            </section>

            <section id="react">
              <h2>React + W3c</h2>

              <article>
                <p>Mesmo utilizando React continuamos escrevendo HTML através do JSX.</p>
                
                <button>Botão React</button>

                </article>
                </section>
      </main>

      <aside>
        <h3>Curiosidade</h3>

        <p>O inventor da Web, Tim Berners-Lee, também fundou o W3C em 1994.</p>
        </aside>

        <footer>

          <p>Pagina criada para demonstrar os padrões do W3C utilizadndo React.</p>

          <p>@2026 - Professor Ivan Morales</p>

          </footer>
          </>

      );
}

export default App; 
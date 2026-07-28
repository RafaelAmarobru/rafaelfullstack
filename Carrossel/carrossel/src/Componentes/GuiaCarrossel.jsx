import "../css/Guia.css";

export default function GuiaCarrossel(){
    return (
        <section className="guia">
            <h1>Guia Rápido de Personalização</h1>
            <p>
                Consulte a tabela abaixo para saber em qual classe CSS realizar cada alteração.
            </p>

            <table className="tabelaGuia">
                <thead>
                    <tr>
                        <th>Alteração</th>
                        <th>Classe CSS</th>
                        <th>Exemplo</th>
                    </tr>

                    </thead>

                    <tbody>
                        <tr>
                            <td>Largura do Carrossel</td>
                            <td>.carrossel</td>
                            <td>width:1200px;</td>
                        </tr>
                        
                        <tr>
                            <td>Altura da Imagem</td>
                            <td>.carrosselSlide img</td>
                            <td>height:500px;</td>
                        </tr>

                        <tr>
                            <td>Largura da Imagem</td>
                            <td>.carrosselSlide img</td>
                            <td>width:100%;</td>
                        </tr>

                        <tr>
                            <td>Cor de Fundo</td>
                            <td>.carrossel</td>
                            <td>background:#0d6efd;</td>
                        </tr>

                        <tr>
                            <td>Cor do Titulo</td>
                            <td>.texto h2</td>
                            <td>color:#333;</td>
                        </tr>

                        <tr>
                            <td>Tamanho do Titulo</td>
                            <td>.textoh2</td>
                            <td>font-size:18px;</td>
                        </tr>

                        <tr>
                            <td>Tamanho do Texto</td>
                            <td>.texto p</td>
                            <td>font-size:18px</td>
                        </tr>

                        <tr>
                            <td>Borda</td>
                            <td>.carrossel</td>
                            <td>border:1px solid #CCC;</td>
                        </tr>

                        <tr>
                            <td>Cantos Arredondados</td>
                            <td>.carrossel</td>
                            <td>border-radius:12px;</td>
                        </tr>

                        <tr>
                            <td>Sombra</td>
                            <td>.carrossel</td>
                            <td>box-shadow:0 0 15px #999;</td>
                        </tr>

                        <tr>
                            <td>Setas</td>
                            <td>.seta</td>
                            <td>width:55px;</td>
                        </tr>

                        <tr>
                            <td>Indicadores</td>
                            <td>.indicador</td>
                            <td>background:#0d6efd;</td>
                        </tr>

                        <tr>
                            <td>Velocidade da Animação</td>
                            <td>.carrosselSlides</td>
                            <td>transitiona:.7s;</td>
                        </tr>

                        </tbody>
                        </table>

                        <h2>Exercicios</h2>
                        <ol>

                            <li>Altere a largura do carrossel.</li>
                            <li>Troque a altura das imagens.</li>
                            <li>Mude a cor do botão.</li>
                            <li>Troque a cor do titulo.</li>
                            <li>Altere o tamanho do texto.</li>
                            <li>Adicione uma borda azul.</li>
                            <li>Arredonde mais os cantos.</li>
                            <li>Troque a sombra do componente.</li>
                            <li>Altere o tamanho das setas.</li>
                            <li>Mude a velocidade da animação</li>
                            </ol>
                            </section>
    );
}
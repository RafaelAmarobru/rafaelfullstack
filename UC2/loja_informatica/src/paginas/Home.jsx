import teclado from "../assets/imagens/teclado.jpg";
import mouse from "../assets/imagens/mouse.jpg";
import monitor from "../assets/imagens/monitor.jpg";

function Home() {
  return (
    <main className="content"> 
      <div className="produtos-container">

        <div className="produto-card">
          <img src={teclado} alt="Teclado Mecânico RGB" />
          <h2>Teclado Mecânico RGB</h2>
        </div>

        <div className="produto-card">
          <img src={mouse} alt="Mouse Gamer 7200 DPI" />
          <h2>Mouse Gamer 7200 DPI</h2>
        </div>

        <div className="produto-card">
          <img src={monitor} alt='Monitor 24" Full HD' />
          <h2>Monitor 24" Full HD</h2>
        </div>

      </div>
    </main>
  );
}

export default Home;

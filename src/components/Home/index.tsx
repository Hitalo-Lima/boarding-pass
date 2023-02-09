import "./styles.css";
import Card from "../Card";

function Home() {
  return (
    <div className="Home">
      <h2>Cartão de embarque</h2>
      <Card />
      <small>Qualquer problema procure o balcão de atendimento da sua companhia aérea</small>
    </div>
  );
}

export default Home;

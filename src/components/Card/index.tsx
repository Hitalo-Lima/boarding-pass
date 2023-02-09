import "./styles.css"
import airplane from "../../assets/airplane.svg"
import { QRCodeSVG } from 'qrcode.react';


function Card() {
  return <div className="Card">
   <div className="flight-info">
      <div className="container one">
         <div className="flight-number">
            <div className="above">Voo</div>
            <div className="under">RS995</div>
         </div>
         <div className="flight-date">
            <div className="above">Data</div>
            <div className="under">23/05/2023</div>
         </div>
      </div>
      <div className="container two">
         <div className="departure">
            <div className="above">São Paulo, Brasil</div>
            <div className="middle">Gru</div>
            <div className="under">17:00</div>
         </div>
         <img src={airplane} alt="Ícone de um avião" />
         <div className="arrival">
            <div className="above">São Francisco, EUA</div>
            <div className="middle">Sfo</div>
            <div className="under">04:48</div>
         </div>
      </div>
   </div>
   <div className="container passenger-info">
      <div className="passenger">
         <div className="above">Passageiro</div>
         <div className="under">Hítalo Lima</div>
      </div>
      <div className="seat">
         <div className="above">Assento</div>
         <div className="under">28A</div>
      </div>
   </div>
   <div className="container boarding-data">
      <div className="boarding-info">
         <div className="boarding-time">
            <div className="above">Embarque</div>
            <div className="time">16:15</div>
         </div>
         <div className="terminal">
            <div className="above">Terminal</div>
            <div className="under">2</div>
         </div>
         <div className="gate">
            <div className="above">Portão</div>
            <div className="under">15</div>
         </div>
      </div>
      <div className="qr-code">
         <div>
            <QRCodeSVG value="https://github.com/hitalo-lima"/>
         </div>
         <div className="boarding-group">
            Grupo de embarque: 3
         </div>
      </div>
   </div>
   <div className="attention">
      <strong>Atenção: </strong> o portão fecha 16:45
   </div>
  </div>;
}

export default Card;

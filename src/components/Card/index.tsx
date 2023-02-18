type CardProps = {
  name: string;
  departure: string;
  arrival: string;
  cityDeparture: string;
  cityArrival: string;
  seat: string;
  date: string;
  departureTime: string;
  arrivalTime: number | undefined | string;
  boardingTime: number | undefined | string;
  closeTime: number | undefined | string;
};

import "./styles.css";
import airplane from "../../assets/airplane.svg";
import { QRCodeSVG } from "qrcode.react";

function Card(props: CardProps) {
  return (
    <div>
      <h2>Cartão de embarque</h2>
      <div className="Card">
        <div className="flight-info">
          <div className="container one">
            <div className="flight-number">
              <div className="above">Voo</div>
              <div className="under">Lorem Ipsum</div>
            </div>
            <div className="flight-date">
              <div className="above">Cartão gerado às</div>
              <div className="under">{props.date}</div>
            </div>
          </div>
          <div className="container two">
            <div className="departure">
              <div className="above">{props.cityDeparture}</div>
              <div className="middle">{props.departure}</div>
              <div className="under">{props.departureTime}</div>
            </div>
            <img src={airplane} alt="Ícone de um avião" />
            <div className="arrival">
              <div className="above">{props.cityArrival}</div>
              <div className="middle">{props.arrival}</div>
              <div className="under">{props.arrivalTime}</div>
            </div>
          </div>
        </div>
        <div className="container passenger-info">
          <div className="passenger">
            <div className="above">Passageiro</div>
            <div className="under">{props.name}</div>
          </div>
          <div className="seat">
            <div className="above">Assento</div>
            <div className="under">{props.seat}</div>
          </div>
        </div>
        <div className="container boarding-data">
          <div className="boarding-info">
            <div className="boarding-time">
              <div className="above">Embarque</div>
              <div className="time">{props.boardingTime}</div>
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
              <QRCodeSVG value="https://github.com/hitalo-lima" />
            </div>
            <div className="boarding-group">Grupo de embarque: 3</div>
          </div>
        </div>
        <div className="attention">
          <strong>Atenção: </strong> o portão fecha {props.closeTime}
        </div>
      </div>
      ;
      <small>
        Qualquer problema procure o balcão de atendimento da sua companhia aérea
      </small>
    </div>
  );
}

export default Card;

import { useState, useEffect } from "react";
import Card from "../Card";
import InputName from "./InputName"
import LocalSelect from "./LocalSelect";
import SeatSelect from "./SeatSelect";
import Button from "./Button";
import InputHour from "./InputHour";
import "./styles.css";

function Form() {
  const [name, setName] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [cityDeparture, setCityDeparture] = useState("");
  const [cityArrival, setCityArrival] = useState("");
  const [seatLetter, setSeatLetter] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const [seat, setSeat] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState<string | number | undefined>();
  const [boardingTime, setBoardingTime] = useState<
    string | number | undefined
  >();
  const [closeTime, setCloseTime] = useState<string | number | undefined>();
  const [cards, setCards] = useState<any>([]);
  const [date, setDate] = useState("");

  function handleAddCard() {
    const newCard = {
      name: name,
      departure: departure,
      arrival: arrival,
      cityDeparture: cityDeparture,
      cityArrival: cityArrival,
      seat: seat,
      date: date,
      departureTime: departureTime,
      arrivalTime: arrivalTime,
      boardingTime: boardingTime,
      closeTime: closeTime,
    };

    if (
      name === "" ||
      departure === "" ||
      arrival === "" ||
      cityDeparture === "" ||
      cityArrival === "" ||
      seatLetter === "" ||
      seatNumber === "" ||
      departureTime === ""
    ) {
      alert("Preencha os dados corretamente");
      return false;
    } else if (checkIfIsEqual()) {
      alert("Não é possivel selecionar dois estados iguais");
    } else {
      setDate(
        new Date().toLocaleString("pt-br", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setCards(() => [newCard]);
    }
  }

  function handleNamePass(ev: any) {
    setName(ev.target.value.toUpperCase());
  }

  function handleDeparture(ev: any) {
    setDeparture(ev.target.value);
  }

  function handleArrival(ev: any) {
    setArrival(ev.target.value);
  }

  function checkIfIsEqual() {
    if (departure === arrival || arrival === departure) {
      return true;
    }
    return false;
  }

  function handleSeatLetter(ev: any) {
    setSeatLetter(ev.target.value);
  }

  function handleSeatNumber(ev: any) {
    setSeatNumber(ev.target.value);
  }

  function handleSeat() {
    setSeat(seatLetter + seatNumber);
  }

  function handleDepartureTime(ev: any) {
    setDepartureTime(ev.target.value);
    setDate(
      new Date().toLocaleString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );
  }

  function transformToTime(hour: string, operation: number, minutes: string) {
    return Number(hour[0] + hour[1]) + operation + ":" + minutes;
  }

  function handleBoardingTime() {
    setArrivalTime(transformToTime(departureTime, +2, "00"));
    setBoardingTime(transformToTime(departureTime, -1, "15"));
    setCloseTime(transformToTime(departureTime, -1, "45"));
  }

  useEffect(() => {
    handleBoardingTime();
    handleSeat();

    switch (departure) {
      case "SP":
        setCityDeparture("Guarulhos");
        break;
      case "RJ":
        setCityDeparture("Rio de Janeiro");
        break;
      case "PA":
        setCityDeparture("Belém");
        break;
      case "MG":
        setCityDeparture("Belo Horizonte");
        break;
      case "DF":
        setCityDeparture("Brasília");
        break;
      case "MS":
        setCityDeparture("Cuiabá");
        break;
      case "PR":
        setCityDeparture("Curitiba");
        break;
      case "SC":
        setCityDeparture("Florianópolis");
        break;
      case "CE":
        setCityDeparture("Fortaleza");
        break;
      case "AM":
        setCityDeparture("Manaus");
        break;
      case "RN":
        setCityDeparture("Natal");
        break;
      case "RS":
        setCityDeparture("Porto Alegre");
        break;
      case "PE":
        setCityDeparture("Recife");
        break;
      case "BA":
        setCityDeparture("Salvador");
        break;
    }

    switch (arrival) {
      case "SP":
        setCityArrival("Guarulhos");
        break;
      case "RJ":
        setCityArrival("Rio de Janeiro");
        break;
      case "PA":
        setCityArrival("Belém");
        break;
      case "MG":
        setCityArrival("Belo Horizonte");
        break;
      case "DF":
        setCityArrival("Brasília");
        break;
      case "MS":
        setCityArrival("Cuiabá");
        break;
      case "PR":
        setCityArrival("Curitiba");
        break;
      case "SC":
        setCityArrival("Florianópolis");
        break;
      case "CE":
        setCityArrival("Fortaleza");
        break;
      case "AM":
        setCityArrival("Manaus");
        break;
      case "RN":
        setCityArrival("Natal");
        break;
      case "RS":
        setCityArrival("Porto Alegre");
        break;
      case "PE":
        setCityArrival("Recife");
        break;
      case "BA":
        setCityArrival("Salvador");
        break;
    }
  }, [departure, arrival, handleSeatNumber, handleSeatLetter]);
  return (
    <div id="main">
      <form>
        <h2>Preencha os dados para gerar o cartão de embarque</h2>

        <InputName event={handleNamePass}/>
        <LocalSelect text={"partida"} event={handleDeparture} />
        <LocalSelect text={"destino"} event={handleArrival} />
        <SeatSelect
          eventSeatLetter={handleSeatLetter}
          eventSeatNumber={handleSeatNumber}
          eventSeat={handleSeat}
        />
        <InputHour event={handleDepartureTime} />
        <Button text={"Gerar cartão"} event={handleAddCard} />
      </form>
      {cards.map(
        (card: {
          name: string;
          departure: string;
          arrival: string;
          cityDeparture: string;
          cityArrival: string;
          seat: string;
          date: string;
          departureTime: string;
          arrivalTime: string | number | undefined;
          boardingTime: string | number | undefined;
          closeTime: string | number | undefined;
        }) => {
          return (
            <Card
              name={card.name}
              departure={card.departure}
              arrival={card.arrival}
              cityDeparture={card.cityDeparture}
              cityArrival={card.cityArrival}
              seat={card.seat}
              date={card.date}
              departureTime={card.departureTime}
              arrivalTime={card.arrivalTime}
              boardingTime={card.boardingTime}
              closeTime={card.closeTime}
            />
          );
        }
      )}
    </div>
  );
}
<script src="sweetalert2.all.min.js"></script>;

export default Form;

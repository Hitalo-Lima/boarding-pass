type SeatProps = {
  eventSeat: any;
  eventSeatLetter: any;
  eventSeatNumber: any;
};

function SeatSelect(props: SeatProps) {
  return (
    <div className="input-box">
      <label htmlFor="seat-letter">
        Selecione o assento em que deseja ficar
      </label>
      <div id="selects">
        <select
          id="seat-letter"
          defaultValue={"default"}
          onChange={props.eventSeatLetter}
        >
          <option value="default" disabled>
            Letra
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
        <select
          id="seat-number"
          defaultValue={"default"}
          onChange={props.eventSeatNumber}
        >
          <option value="default" disabled>
            Número
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
}

export default SeatSelect;

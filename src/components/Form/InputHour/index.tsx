type HourProps = {
  event: any;
};

function InputHour(props: HourProps) {
  return (
    <div className="input-box" id="dep-time">
      <label htmlFor="departure-time">Horário de partida</label>
      <select
        id="departure-time"
        onChange={props.event}
        defaultValue={"default"}
      >
        <option value={"default"} disabled>
          Selecione um horário
        </option>
        <option value="07:00">07:00</option>
        <option value="12:00">12:00</option>
        <option value="18:00">18:00</option>
      </select>
    </div>
  );
}

export default InputHour;

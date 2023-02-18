type NameProps = {
  event: any;
};

function InputName(props: NameProps) {
  return (
    <div className="input-box">
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        autoComplete="off"
        placeholder="Ex: José S. Sousa"
        maxLength={18}
        required
        onChange={props.event}
      />
    </div>
  );
}

export default InputName;

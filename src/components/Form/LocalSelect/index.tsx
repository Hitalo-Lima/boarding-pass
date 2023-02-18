type LocalProps = {
  text: string;
  event: any;
};

function LocalSelect(props: LocalProps) {
  return (
    <div className="input-box">
      <label htmlFor="local">Local de {props.text}</label>
      <select id="local" defaultValue={"default"} onChange={props.event}>
        <option disabled value="default">
          Selecione o local de {props.text}
        </option>
        <option value="SP">
          Aeroporto Internacional de São Paulo-Guarulhos
        </option>
        <option value="RJ">Aeporto Santos-Dumont (Rio de Janeiro)</option>
        <option value="PA">Aeroporto Internacional de Belém</option>
        <option value="MG">
          Aeroporto Internacional de Belo Horizonte-Confins
        </option>
        <option value="DF">Aeroporto Internacional de Brasília</option>
        <option value="MS">Aeroporto Internacional de Cuiabá</option>
        <option value="PR">Aeroporto Internacional de Curitiba</option>
        <option value="SC">
          Aeroporto Internacional Hercílio Luz (Florianópolis)
        </option>
        <option value="CE">Aeroporto Internacional de Fortaleza</option>
        <option value="AM">Aeroporto Internacional de Manaus</option>
        <option value="RN">
          Aeroporto Internacional Augusto Severo (Natal)
        </option>
        <option value="RS">
          Aeroporto Internacional Salgado Filho (Porto Alegre)
        </option>
        <option value="PE">Aeroporto Internacional do Recife</option>
        <option value="BA">Aeroporto Internacional de Salvador</option>
      </select>
    </div>
  );
}

export default LocalSelect;

type ButtonProps = {
  text: string;
  event: any;
};

function Button(props: ButtonProps) {
  return <input type="button" value={props.text} onClick={props.event} />;
}

export default Button;

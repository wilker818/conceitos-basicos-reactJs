interface Props {
  x: number;
  y: number;
  onEmit: (data: string) => void;
}

const RenderConditionalWithPropsEmitting = ({ x, y, onEmit }: Props) => {
  let mensagem;
  if (x > 10) {
    mensagem = <p>X é maior que 10</p>;
  } else if (x === 10) {
    mensagem = <p>X é igual a 10</p>;
  } else {
    mensagem = <p>X é menor que {y}</p>;
  }

  const handleClick = () => {
    // Emitindo dados para o componente pai
    onEmit("Dados emitidos do componente filho para o pai");
  };

  return (
    <div className="RenderConditionalWithPropsEmitting">
      {/* regra para de validacao do tipo IF */}
      {x > 5 && <p> X é maior que 5</p>}

      {/* regra para de validacao do tipo IF e ELSE */}
      {x < 5 ? <p> X é maior que 5</p> : <p> X é não é que 5</p>}

      {/* regra para de validacao do tipo IF, ELSEIF e ELSE */}
      {mensagem}

      <button onClick={handleClick}>Emitir dados para o pai</button>
    </div>
  );
};

export default RenderConditionalWithPropsEmitting;

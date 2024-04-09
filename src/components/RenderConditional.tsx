const RenderConditional = () => {
  const x = 10;

  let mensagem;
  if (x > 10) {
    mensagem = <p>X é maior que 10</p>;
  } else if (x === 10) {
    mensagem = <p>X é igual a 10</p>;
  } else {
    mensagem = <p>X é menor que 10</p>;
  }

  return (
    <div className="RenderConditional">
      {/* regra para de validacao do tipo IF */}
      {x > 5 && <p> X é maior que 5</p>}

      {/* regra para de validacao do tipo IF e ELSE */}
      {x < 5 ? <p> X é maior que 5</p> : <p> X é não é que 5</p>}

      {/* regra para de validacao do tipo IF, ELSEIF e ELSE */}
      {mensagem}
    </div>
  );
};

export default RenderConditional;

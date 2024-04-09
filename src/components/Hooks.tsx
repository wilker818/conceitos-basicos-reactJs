import { useState } from "react";

const Hooks = () => {
  // logica é a seguinte voce declata a idade e usa um setNovaIdade para atualizar o estado da const criada
  // no final o conceito é parecido com um "ref" do Vue, porem tendo um trabalho a mais para setar 2 coisas
  const [idade, setNovaIdade] = useState(30);

  const AlterarIdade = () => {
    setNovaIdade(31);
  };

  return (
    <div className="Hooks">
      <p>idade: {idade}</p>

      <button onClick={AlterarIdade}>Alterar Idade</button>
    </div>
  );
};

export default Hooks;

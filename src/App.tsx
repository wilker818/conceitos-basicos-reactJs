import { useState } from "react";
import "./App.css";

import AnotherComponent from "./components/AnotherComponent";
import FirstComponet from "./components/FirstComponent";
import Fragment from "./components/Fragment";
import Hooks from "./components/Hooks";
import Images from "./components/Images";
import Lista from "./components/Lista";
import RenderConditional from "./components/RenderConditional";
import RenderConditionalWithPropsEmitting from "./components/RenderConditionalWithPropsEmitting";
import Container from "./components/Container";

function App() {
  const [dadosRecebidos, setDadosRecebidos] = useState("");

  const handleEmit = (dados: string) => {
    // Recebendo os dados do componente filho
    setDadosRecebidos(dados);
  };

  return (
    <>
      <div className="App">mello world</div>
      <br />
      <hr />
      <br />
      <FirstComponet />
      <br />
      <hr />
      <br />
      <AnotherComponent />
      <br />
      <hr />
      <br />
      <Images />
      <br />
      <hr />
      <br />
      <Hooks />
      <br />
      <hr />
      <br />
      <Lista />
      <br />
      <hr />
      <br />
      <RenderConditional />
      <br />
      <hr />
      <br />
      <RenderConditionalWithPropsEmitting x={1} y={30} onEmit={handleEmit} />
      Recebeido do filho: {dadosRecebidos}
      <br />
      <hr />
      <br />
      <Fragment />
      <br />
      <hr />
      <br />
      <Container>
        <p>TESTE de SLOT</p>
      </Container>
    </>
  );
}

export default App;

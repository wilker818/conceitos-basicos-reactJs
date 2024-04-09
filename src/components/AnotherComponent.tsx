const AnotherComponent = () => {
  const eventoClique = () => {
    alert("você clicou né");
  };

  return (
    <div className="anotherComponent">
      {/* Comentario jsx */}
      <p>This is anotherComponent using arrow function</p>
      <button onClick={eventoClique}> Clique aqui</button>
    </div>
  );
};

export default AnotherComponent;

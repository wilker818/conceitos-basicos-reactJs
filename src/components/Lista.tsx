const Lista = () => {
  const itens = [
    { id: 1, name: "wilker" },
    { id: 2, name: "leandro" },
    { id: 3, name: "igor" },
  ];

  return (
    <div className="Lista">
      {/* metodo para fazer um loop de itens */}
      {itens.map((item, index) => (
        <p key={index}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  );
};

export default Lista;

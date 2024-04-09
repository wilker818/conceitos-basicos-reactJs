import reactImage from "../assets/react.svg";

function Images() {
  const name = "wilker";

  return (
    <div className="Images">
      <img src={reactImage} alt={name} />
    </div>
  );
}

export default Images;

'use client';
import React from "react";

export default function IMC() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [imc, setImc] = React.useState("");
  React.useState("");

  function handleClick() { 
    const alturaMetro = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
    setImc(total);
  }

  return (
    <div>
      <h2>Calculo IMC</h2>
      <label htmlFor="peso">Peso em Kg</label>
      <input
        type="number"
        id="peso"
        name="peso"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <label htmlFor="altura">Altura em Cm</label>
      <input type="number"
        id="altura"
        name="altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}/>
      <button onClick={handleClick}>Calcular</button>
      <p>IMC: {imc}</p>
    </div>
  );
}

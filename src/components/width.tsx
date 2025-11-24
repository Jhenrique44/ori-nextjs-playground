"use client";
import React from "react";

export default function Width() {
  const [width, setWidth] = React.useState<number>(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [ativo, setAtivo] = React.useState<boolean>(false);
  return (
    <div>
      <h2 style={{color: ativo ? '#670' : '#b00' }}>Largura da tela: {width} </h2>
      <button onClick={() => setAtivo((b) => !b)}>Ativar</button>
    </div>
  );
}

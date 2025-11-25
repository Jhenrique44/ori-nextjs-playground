"use client";
type Produto = {
  id: number;
  nome: string;
};
import React from "react";

export default function ClientFetch() {
  const [data, setData] = React.useState<Produto[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.origamid.online/produtos");
      const json = (await res.json()) as Produto[];
      setData(json);
    }
    fetchData();
  }, []);
  return (
    <ul>
      {data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  );
}

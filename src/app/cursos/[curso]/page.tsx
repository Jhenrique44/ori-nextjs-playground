import { getCurso } from "@/src/api/server-fetch-courses";
import Link from "next/link";

// cursos/[...slugs]/page.tsx


export default async function CursoPage({
  params,
}: {
  params: { curso: string };
}) {
  const curso = await getCurso(params.curso);
  return (
    <main>
      <h1>Curso: {curso.nome}</h1>
      <p>{curso.descricao}</p>
      <p>Total de aulas: {curso.total_aulas}</p>
      <p>Total de horas: {curso.total_horas}</p>
      <h2>Aulas</h2>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${params.curso}/${aula.slug}`}>
              {aula.nome}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

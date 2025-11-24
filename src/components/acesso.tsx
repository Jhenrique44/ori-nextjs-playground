import fs from 'fs/promises';
export default async function AcessoPage() { 
    fs.appendFile(
    "log.txt",
    `Home page accessed at ${new Date().toISOString()}\n`,
    "utf8"
  );
  const data = await fs.readFile("log.txt", "utf8");
    return (
        <div>{data}</div>
    )
}
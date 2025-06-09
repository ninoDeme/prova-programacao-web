import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import type { UsuarioSimples } from "~/lib/usuario";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  let [usuarios, setUsuarios] = useState<UsuarioSimples[] | null>(null);
  async function buscarUsuarios() {
    let data = await fetch("/api/usuarios");
    if (!data.ok) {
      throw new Error(data.statusText);
    }
    setUsuarios(await data.json());
  }
  useEffect(() => {
    buscarUsuarios();
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-xl mb-4">Lista de usuários</h1>
      {usuarios ? (
        <table>
          <thead>
            <th className="p-0.5 px-2">Id</th>
            <th className="p-0.5 px-2">E-Mail</th>
            <th className="p-0.5 px-2">Acessar</th>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr>
                <td className="p-0.5 px-2">{u.id}</td>
                <td className="p-0.5 px-2">{u.email}</td>
                <td className="p-0.5 px-2">
                  <a className="w-full text-center block" href={`/dados/${u.id}`}>-&gt;</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span>Carregando...</span>
      )}
    </div>
  );
}

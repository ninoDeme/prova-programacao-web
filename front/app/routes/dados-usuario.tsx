import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import type { Usuario, UsuarioSimples } from "~/lib/usuario";
import { useParams } from "react-router";
import "./dados-usuario.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  let [dado, setDado] = useState<Usuario | null>(null);
  let { id } = useParams();
  async function buscarUsuarios() {
    let data = await fetch(`/api/dados/${id}`);
    if (!data.ok) {
      throw new Error(data.statusText);
    }
    setDado(await data.json());
  }
  useEffect(() => {
    buscarUsuarios();
  }, []);
  return (
    <div className="container mx-auto">
      <a href="/">&lt;-Voltar</a>
      <h1 className="text-xl mb-4">Dados do usuário</h1>
      {dado ? (
        <div className="border rounded p-4 flex flex-col items-start *:mb-1">
          <label>Nome</label>
          <span>{dado.nome} {dado.sobrenome}</span>
          <label>E-Mail</label>
          <span>{dado.email}</span>
          <label>Telefone</label>
          <span>{dado.telefone}</span>
          <label>Data de nascimento</label>
          <span>{new Date(dado.data_nasc).toDateString()}</span>
        </div>
      ) : (
        <span>Carregando...</span>
      )}
    </div>
  );
}

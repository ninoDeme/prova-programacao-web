import express from "express";
import { getUsuario } from "./usuario.js";
const app = express();
const port = process.env.PORT ?? 3000;

app.get("/api/usuarios", (req, res) => {
  res.json(new Array(100).fill(null).map((_, i) => getUsuario(i)));
});

app.listen(port, () => {
  console.log(`Aplicativo ouvindo http://localhost:${port}`);
});

import express from "express";
import { getUsuario } from "./usuario.js";
const app = express();
const port = process.env.PORT ?? 3000;

app.use("/", express.static('public'));

app.get("/api/usuarios", (req, res) => {
  res.json(
    new Array(100)
      .fill(null)
      .map((_, i) => getUsuario(i))
      .map((u) => ({ id: u.id, email: u.email })),
  );
});

app.get("/api/dados", (req, res) => {
  res.json(new Array(100).fill(null).map((_, i) => getUsuario(i)));
});

app.get("/api/dados/:id", (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id) || !isFinite(id)) {
    res.status(400);
  } else {
    res.json(getUsuario(id));
  }
});

app.listen(port, () => {
  console.log(`Aplicativo ouvindo http://localhost:${port}`);
});

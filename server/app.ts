import express from "express";
import pkg from "./package.json" with { type: 'json' };
const app = express();
const port = process.env.PORT ?? 3000;

app.get("/version", (req, res) => {
  res.send(pkg.version);
});

app.listen(port, () => {
  console.log(`Aplicativo ouvindo http://localhost:${port}`);
});

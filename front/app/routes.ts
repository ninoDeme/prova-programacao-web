import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx", {id: "index"}),
  route("/usuarios", "routes/home.tsx"),
  route("/dados/:id", "routes/dados-usuario.tsx"),
] satisfies RouteConfig;

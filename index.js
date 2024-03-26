const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const PORT = 3000;

//hbs / config engine
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
  })
);

//static (use = middleware)
app.use(express.static("assets"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist/css"));

//routes

app.get("/", (req, res) => {
  res.render("home", {
    title: 'Productos Disponibles',
    productos_disponibles: ['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate']
  });
});
/* 
app.get("/home", (req, res) => {
  res.render("home", {
    title: "Nuestro Home",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Pagina de Contacto",
  });
});

app.get("/productos", (req, res) => {
  res.render("productos", {
    title: "Productos",
  });
}); */

app.get("*", (req, res) => {
  res.send(
    `<center><h1>ERROR 404 <br> No encontramos esa pagina</h1></center>`
  );
});

//listen
app.listen(PORT, () =>
  console.log(`🥑🍑Mercado WEB🍍🍎 Corriendo en: http://localhost:${PORT}`)
);

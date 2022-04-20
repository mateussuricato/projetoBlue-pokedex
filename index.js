import express from "express";
import path from "path";

const __dirname = path.resolve(path.dirname(""));

const app = express();

const pokedex = [
  {
    id: 1,
    nome: "Bulbasaur",
    descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
    tipo: "Glass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 2,
    nome: "Charmander",
    descricao:
      "A chama que queima na ponta da sua cauda é um indicador de suas emoções. A chama oscila quando Charmander está contente. Se o Pokémon fica com raiva, a chama queima violentamente.",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 3,
    nome: "Squirtle",
    descricao:
      "A carapaça de Squirtle não serve só para sua proteção. As ranhuras em sua superfície e a sua forma arredondada ajudam a minimizar a resistência na água permitindo que nade em alta velocidade.",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
];

app.set("view engine", "ejs"); // reconhecendo o ejs
app.use(express.static(path.join(__dirname, "public"))); //reconhecendo a pasta public
app.use(express.urlencoded());

const port = 3004;

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});

let pokemon = undefined;

app.get("/", (req, res) => {
  res.render("index", { pokedex, pokemon });
});

app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/#cards");
});

app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
  pokemon = pokedex.find((pokemon) => pokemon.id === id);
  res.redirect("/#cadastro");
});

app.post("/update/:id", (req, res) => {
  const id = +req.params.id - 1;
  const newPokemon = req.body;
  newPokemon.id = id + 1;
  pokedex[id] = newPokemon;
  pokemon = undefined;
  res.redirect("/#cards");
});
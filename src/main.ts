import "./style.css";

type Game = {
  Title: string;
  Year: string;
  Poster: string;
};

type OmdbResponse = {
  Search: Game[];
  Response: string;
  totalResults: string;
};

fetch("http://www.omdbapi.com/?apikey=ffeb1c95&type=game&s=alan")
  .then((response) => response.json())
  .then((data: OmdbResponse) => {
    console.log(data);
    createHtml(data.Search);
  });

const createHtml = (games: Game[]) => {
  games.forEach((game) => {
    const gameContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
  });
};

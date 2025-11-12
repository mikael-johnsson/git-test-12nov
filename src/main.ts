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

const getData = async () => {
  fetch("http://www.omdbapi.com/?apikey=ffeb1c95&type=game&s=alan")
    .then((response) => response.json())
    .then((data: OmdbResponse) => {
      console.log(data);
    });
};

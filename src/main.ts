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
  });


  const handleClick = () => {
    const searchInput = document.getElementById("searchSeries");

    searchInput
  }

  const searchButton = document.getElementById("searchButton");

  searchButton?.addEventListener("click", handleClick);
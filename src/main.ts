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

const createHtml = (games: Game[]) => {
  games.forEach((game) => {
    const gameContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
  });
}



  const searchForm = document.getElementById("search");

  searchForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("searchSeries");

    if (searchInput) {
    const search = (searchInput as HTMLInputElement).value;
    
    console.log(search)
    getData()
    }
  });


const getData = async () => {
  fetch("http://www.omdbapi.com/?apikey=ffeb1c95&type=game&s=alan")
    .then((response) => response.json())
    .then((data: OmdbResponse) => {
      console.log(data);
    });
};

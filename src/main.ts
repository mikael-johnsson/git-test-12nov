import "./style.css";

type Show = {
  Title: string;
  Year: string;
  Poster: string;
};

type OmdbResponse = {
  Search: Show[];
  Response: string;
  totalResults: string;
};

const createHtml = (shows: Show[]) => {
  const contentContainer = document.getElementById("content-container");
  if (contentContainer) {
    contentContainer.innerHTML = "";
  }
  shows.forEach((show) => {
    const showContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    img.src = show.Poster;
    img.alt = show.Title;
    title.innerHTML = show.Title;

    imgContainer.appendChild(img);
    showContainer.appendChild(title);
    showContainer.appendChild(imgContainer);

    contentContainer?.appendChild(showContainer);
  });
};

const searchForm = document.getElementById("search");

searchForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = document.getElementById("searchSeries");

  if (searchInput) {
    const search = (searchInput as HTMLInputElement).value;

    getData(search);
  }
});

const getData = async (search: string) => {
  fetch(`http://www.omdbapi.com/?apikey=ffeb1c95&type=series&s=${search}`)
    .then((response) => response.json())
    .then(
      (data: OmdbResponse) => {
        if (data.Search !== undefined) {
          createHtml(data.Search);
        } else {
          console.log("LISTAN ÄR UNDEFINED");
        }
      },
      () => {
        console.log("FAIL");
      }
    );
};

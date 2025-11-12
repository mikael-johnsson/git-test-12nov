import "./style.css";

fetch("http://www.omdbapi.com/?apikey=ffeb1c95&type=game&s=alan")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

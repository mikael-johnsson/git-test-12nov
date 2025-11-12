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

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

export interface IMovieResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguge {
  english_name: string;
  iso_3166_1: string;
  name: string;
}

export interface IMovieDetails extends IMovie {
  genres: IGenre[];
  homepage?: string;
  imdb_id: string;
  origin_country: string[];
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguge[];
  status: string;
  tagline: string;
}

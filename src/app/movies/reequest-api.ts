import axios from "axios";
import { IMovieDetails, IMovieResponse } from "./model/movie";

export async function discoverMovies({ pageParam = 1 }) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies?pageParam=${pageParam}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_AUTH_TOKEN}`,
      },
    }
  );
  return response.data as IMovieResponse;
}

export async function movieDetails(movieId: number) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/details?movieId=${movieId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_AUTH_TOKEN}`,
      },
    }
  );
  return response.data as IMovieDetails;
}

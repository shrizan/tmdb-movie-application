import { IMovieDetails } from "@/app/movies/model/movie";
import axios from "axios";
import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest } from "next/server";

const GET = async (req: NextRequest) => {
  const url = new NextURL(req.url);
  const searchParams = url.searchParams;
  const movieId = searchParams.get("movieId");

  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/movie/${movieId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_AUTH_TOKEN}`,
        },
        params: {
          language: "en-US",
        },
      }
    );
    return Response.json(response.data as IMovieDetails);
  } catch (error) {
    console.log(error);
  }
};

export { GET };

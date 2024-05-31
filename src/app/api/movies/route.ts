import { IMovieResponse } from "@/app/movies/model/movie";
import axios from "axios";
import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest } from "next/server";

const GET = async (req: NextRequest) => {
  const url = new NextURL(req.url);
  const searchParams = url.searchParams;
  const pageParam = searchParams.get("pageParam");

  const response = await axios.get(
    `${process.env.API_BASE_URL}/discover/movie`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_AUTH_TOKEN}`,
      },
      params: {
        include_adult: false,
        include_video: false,
        language: "en-US",
        page: pageParam,
        sort_by: "popularity.desc",
      },
    }
  );
  return Response.json(response.data as IMovieResponse);
};

export { GET };

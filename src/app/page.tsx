import { QueryClient } from "@tanstack/react-query";
import Link from "next/link";
import Movies from "./movies/movie-list";
import { discoverMovies } from "./movies/reequest-api";
import Head from "next/head";

export default async function Home() {
  const queryClient = new QueryClient();


  // fetching data serverside
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['movies'],
    queryFn: discoverMovies,
    initialPageParam: 1
  });



  return (
    <main className="flex justify-center max-w-6xl flex-col mx-auto">
      <Head>
        <title>TMDB movie application</title>
      </Head>
      <Movies />
    </main>
  );
}

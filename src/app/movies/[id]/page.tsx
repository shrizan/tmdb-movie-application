import { QueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { movieDetails } from "../reequest-api";
import HeroSection from "./components/hero-section";
import DetailsSection from "./components/details-section";
import Head from "next/head";

export default async function MovieDetails({ params }: { params: { id: number, name: string } }) {

  const { id } = params;
  const queryClient = new QueryClient();

  const detail = await queryClient.fetchQuery({
    queryKey: ["movie-details", id],
    queryFn: () => movieDetails(id)
  });


  return (
    <main className="flex justify-center max-w-2xl flex-col mx-auto">
      <Head>
        <title>Details about - {detail.title}</title>
      </Head>
      <Link href={"/"} className="mt-5 text-blue-600 hover:underline hover:text-blue-900">Go Back</Link>
      <div className="border my-5 pb-5">
        <HeroSection details={detail} />
        <DetailsSection details={detail} />
      </div>
    </main >
  );

}
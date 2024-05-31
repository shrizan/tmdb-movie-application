import Link from "next/link";
import { IMovie } from "../movies/model/movie";
import Image from "next/image";


export default function MovieItem({ movie }: { movie: IMovie }) {

  return (
    <Link key={`${movie.id}`} href={`/movies/${movie.id}`}>
      <div className="block w-full rounded-lg shadow-sm my-5 border hover:shadow-md hover:shadow-zinc-400">
        <div className="flex flex-col md:flex-row">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_IMAGE_BASE_URL}/${movie.poster_path}`}
            height={100}
            width={100}
            alt={movie.title}
            className="rounded-t-lg w-full md:w-fit md:rounded-none md:rounded-l-lg"
          />
          <div className="p-2 flex-col">
            <div key={`${movie.id}`}>

              <h3 className="text-cyan-950 font-bold">{movie.original_title}</h3>
              <p className="font-light text-sm text-zinc-600">{movie.overview}</p>
              <div className="text-xs text-zinc-400 mt-5">
                <p >{movie.release_date.substring(0, 4)} &nbsp;&nbsp;&nbsp;</p>
                <p >Rating:{movie.vote_average} ({movie.vote_count})</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

}
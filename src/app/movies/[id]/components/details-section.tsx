import Chip from "@/app/components/chip";
import { IMovieDetails } from "../../model/movie";

export interface IDetailsSection {
  details: IMovieDetails;
}

export default function DetailsSection({ details }: IDetailsSection) {
  return (
    <div className="px-2 pt-2">
      <p className="group-hover:text-cyan-700 font-bold sm:text-2xl line-clamp-2">
        {details.original_title}
      </p>
      <span className="text-slate-400 pt-2 font-semibold">

        ({details.release_date.substring(0, 4)})
      </span>
      <div className="h-28">
        <span className="line-clamp-4 py-2 text-sm font-light leading-relaxed">
          {details.overview}
        </span>
      </div>
      <div className=" grid-cols-2 flex group justify-between">
        <div className="font-black flex flex-col">
          <span className="text-yellow-500 text-xl">Score</span>
          <span className="text-xl flex gap-x-1 items-center group-hover:text-yellow-600">
            {details.vote_average}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <div className="h-7" />
          <span className="text-xl  font-bold  gap-x-2 text-slate-300">
            #{Math.trunc(details.popularity)}
          </span>
        </div>
      </div>
      <div>
        <hr className="bg-zinc-400 my-3" />
        <span className="text-xl font-medium">
          Genres
        </span>
        <div className="flex">
          {
            details.genres.map(genre => <Chip title={genre.name} key={genre.id} />)
          }
        </div>
      </div>
      <div>
        <hr className="bg-zinc-400 my-3" />
        <span className="text-xl font-medium">
          Production Companies
        </span>
        <div className="flex">
          {
            details.production_companies.map(company => <Chip title={company.name} key={company.id} />)
          }
        </div>
      </div>

      <div>
        <hr className="bg-zinc-400 my-3" />
        <span className="text-xl font-medium">
          Orgin
        </span>
        <div className="flex">
          {
            details.origin_country.map(origin => <Chip title={origin} key={origin} />)
          }
        </div>
      </div>

      <div>
        <hr className="bg-zinc-400 my-3" />
        <span className="text-xl font-medium">
          Spoken Language
        </span>
        <div className="flex">
          {
            details.spoken_languages.map(lang => <Chip title={lang.english_name} key={lang.english_name} />)
          }
        </div>
      </div>


    </div>
  );
}
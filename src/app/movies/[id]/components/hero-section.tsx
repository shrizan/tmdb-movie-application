import Image from "next/image";
import { IMovieDetails } from "../../model/movie";

export interface IHeroSection {
  details: IMovieDetails;
}

export default function HeroSection({ details }: IHeroSection) {

  return (
    <Image src={`${process.env.NEXT_PUBLIC_API_IMAGE_BASE_URL}/${details.backdrop_path}`}
      alt={details.title}
      width={500}
      height={500}
      className="w-full"
    />
  );
}
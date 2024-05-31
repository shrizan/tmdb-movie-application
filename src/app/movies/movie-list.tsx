'use client';
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useDetectScrollEndReached } from "../hooks/use-detect-sroll-end-reached";
import MovieItem from "../components/movie-item";
import MovieItemSkeleton from "../components/movie-item-skeleton";
import ErrorMessage from "../components/error";
import { discoverMovies } from "./reequest-api";

export default function Movies() {
  const scrollNode = useRef<HTMLInputElement>(null);

  const { isBottom } = useDetectScrollEndReached(scrollNode);


  const {
    data,
    error,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: discoverMovies,
    enabled: true,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.page + 1
  });

  useEffect(() => {
    if (isBottom) {
      fetchNextPage();
    }
  }, [isBottom, fetchNextPage]);

  if (error) {
    return (
      <ErrorMessage error={error.message} />
    );
  }

  return (
    <div ref={scrollNode} style={{ height: "100vh", overflowY: "scroll" }} className="px-10">
      {
        data?.pages?.flatMap(item => item).flatMap(item => item.results).map(item => <MovieItem key={item.id} movie={item} />)
      }
      {(isBottom || isFetching) && Array.from(Array(20).keys()).map(item => <MovieItemSkeleton key={item} />)}
    </div>
  );
}
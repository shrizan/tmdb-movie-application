/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useCallback, useEffect, useState } from "react";

export const useDetectScrollEndReached = (targetNode: any) => {


  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = targetNode.current;
    if (scrollTop + clientHeight === scrollHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  }, [targetNode]);


  useEffect(() => {
    if (targetNode && targetNode.current) {
      targetNode.current.addEventListener("scroll", handleScroll);
      return () => {
        if (targetNode.current) {
          return targetNode.current.removeEventListener("scroll", handleScroll)
        }
      }
    }
  }, [targetNode, handleScroll]);
  return { isBottom };
};
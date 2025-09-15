import { useParams } from "react-router";
import { fetchItem } from "@/api/qiita";
import { useEffect, useState } from "react";
import type { Item } from "@/types";

export const useItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getItem = async () => {
      setIsLoading(true);
      const item = await fetchItem(id);
      setItem(item);
      setIsLoading(false);
    };
    getItem();
  }, [id]);

  console.log(item);

  return { item, isLoading };
};

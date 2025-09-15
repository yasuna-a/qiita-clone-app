import { useEffect, useState } from "react";
import { fetchItems } from "@/api/qiita";
import type { Item } from "@/types";

export const useHome = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const items = await fetchItems();
      setItems(items);
    };
    getItems();
  }, [fetchItems]);

  return { items };
};

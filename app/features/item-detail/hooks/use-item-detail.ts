import { useParams } from "react-router";
import { fetchItem, fetchUser } from "@/api/qiita";
import { useEffect, useState } from "react";
import type { Item, User } from "@/types";

export const useItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!id) return;

    const getItem = async () => {
      setIsLoading(true);
      const item = await fetchItem(id);
      setItem(item);
      const user = await fetchUser(item.user.id);
      setUser(user);
      setIsLoading(false);
    };
    getItem();
  }, [id]);

  console.log(item);

  return { item, user, isLoading };
};

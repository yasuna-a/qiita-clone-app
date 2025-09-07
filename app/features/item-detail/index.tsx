import { useParams } from "react-router";
import { fetchItem } from "@/api/qiita";
import { useEffect, useState } from "react";
import type { Item } from "@/types";

export function ItemDetail() {
  const { id } = useParams();
  if (!id) return;

  const [item, setItem] = useState<Item>();

  useEffect(() => {
    const getItem = async () => {
      const item = await fetchItem(id);
      setItem(item);
      console.log(item);
    };
    getItem();
  }, [id]);

  return (
    <div>
      <h1>{item?.title}</h1>
      <p>{item?.user.name}</p>
      <p>{item?.created_at}</p>
      <div dangerouslySetInnerHTML={{ __html: item?.body ?? "" }} />
    </div>
  );
}

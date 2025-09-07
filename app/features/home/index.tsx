import { Button } from "@/components/ui";
import { fetchItems } from "@/api/qiita";
import { useEffect, useState } from "react";
import { Link } from "react-router";

type Item = {
  id: string;
  title: string;
  user: {
    name: string;
  };
  created_at: string;
  likes_count: number;
};

export function Home() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const items = await fetchItems();
      setItems(items);
    };
    getItems();
  }, [fetchItems]);

  return (
    <div>
      <h1>記事一覧</h1>
      {items.map((item) => (
        <article key={item.id}>
          <Link to={`/items/${item.id}`}>
            <h2>{item.title}</h2>
            <p>{item.user.name}</p>
            <p>{item.created_at}</p>
            <p>{item.likes_count}</p>
          </Link>
        </article>
      ))}
    </div>
  );
}

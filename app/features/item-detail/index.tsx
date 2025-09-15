import type { Item } from "@/types";

type ItemDetailProps = {
  item?: Item;
  isLoading: boolean;
};

export function ItemDetail({ item, isLoading }: ItemDetailProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>記事が見つかりません</div>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.user.name}</p>
      <p>{item.created_at}</p>
      <div dangerouslySetInnerHTML={{ __html: item.body ?? "" }} />
    </div>
  );
}

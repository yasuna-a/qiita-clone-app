import type { Item } from "@/types";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
    <div className="bg-gray-100 p-4">
      <article className="bg-white py-10 px-6 rounded-md max-w-screen-md mx-auto">
        <header>
          <p className="text-base font-bold text-black">{item.user.name}</p>
          <h1 className="text-3xl font-bold text-black">{item.title}</h1>
          <p className="text-sm text-black/60 mt-2">
            <time dateTime={item.created_at}>{item.created_at}</time>
          </p>
        </header>

        <div className="detail">
          <Markdown remarkPlugins={[remarkGfm]}>{item.body ?? ""}</Markdown>
        </div>
      </article>
    </div>
  );
}

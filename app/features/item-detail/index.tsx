import type { Item, User } from "@/types";
import { Detail, Profile } from "./components";

type ItemDetailProps = {
  item: Item | null;
  user: User | null;
  isLoading: boolean;
};

export function ItemDetail({ item, user, isLoading }: ItemDetailProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!item || !user) {
    return <div>記事が見つかりません</div>;
  }

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex flex-col gap-6 max-w-screen-md mx-auto">
        <Detail user={user} item={item} />
        <Profile user={user} />
      </div>
    </div>
  );
}

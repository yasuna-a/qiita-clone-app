import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui";
import type { User, Item } from "@/types";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type DetailProps = {
  user: User;
  item: Item;
};

export const Detail = ({ user, item }: DetailProps) => {
  return (
    <article className="bg-white py-10 px-6 rounded-md">
      <header>
        <div className="inline-flex items-center flex-row-reverse gap-2">
          <p className="text-base font-bold text-black">
            @{user.id}
            {user.name ? ` (${user.name})` : ""}
          </p>
          <Avatar>
            <AvatarImage src={user.profile_image_url} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-3xl font-bold text-black">{item.title}</h1>
        <p className="text-sm text-black/60 mt-2">
          <time dateTime={item.created_at}>{item.created_at}</time>
        </p>
      </header>

      <div className="detail">
        <Markdown remarkPlugins={[remarkGfm]}>{item.body ?? ""}</Markdown>
      </div>
    </article>
  );
};

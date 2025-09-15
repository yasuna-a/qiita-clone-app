import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui";
import type { User } from "@/types";

type ProfileProps = {
  user: User;
};

export const Profile = ({ user }: ProfileProps) => {
  return (
    <article className="bg-white py-10 px-6 rounded-md">
      <div className="flex start-items justify-between gap-4 flex-row-reverse">
        <div className="grow">
          <h3 className="text-base font-bold text-black">
            @{user.id}
            {user.name ? ` (${user.name})` : ""}
          </h3>
          {user.description && (
            <p className="text-sm text-black/60 mt-2">{user.description}</p>
          )}
        </div>
        <div className="shrink-0">
          <Avatar className="size-14">
            <AvatarImage src={user.profile_image_url} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </article>
  );
};

import { Home as Presenter } from "@/features/home";
import { useHome } from "@/features/home/hooks/use-home";

export default function Home() {
  const { items } = useHome();
  return <Presenter items={items} />;
}

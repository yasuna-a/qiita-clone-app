import { ItemDetail as Presenter } from "@/features/item-detail";
import { useItemDetail } from "@/features/item-detail/hooks/use-item-detail";

export default function ItemDetail() {
  const { item, isLoading } = useItemDetail();
  return <Presenter item={item} isLoading={isLoading} />;
}

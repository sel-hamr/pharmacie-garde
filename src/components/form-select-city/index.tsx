import { getListCity } from "@/lib/action";
import { FormSelect } from "./form-select";
import { Skeleton } from "../ui/skeleton";

export const FormSelectCity = async () => {
  const cities = await getListCity();

  return <FormSelect cities={cities || []} />;
};

export const SkeletonForm = () => {
  return <Skeleton className="h-10 w-full" />;
};

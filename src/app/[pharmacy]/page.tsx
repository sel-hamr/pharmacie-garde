import { getListPharmacies } from "@/lib/action";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LoadingLink } from "@/components/ui/loading-link";

export default async function Pharmacies({
  params,
}: {
  params: { pharmacy: string };
}) {
  const pharmacies = await getListPharmacies(`/${params.pharmacy}`);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center  max-w-7xl mx-auto px-4 py-8">
      {pharmacies?.map((pharmacy, key: number) => (
        <Card key={key} className="h-full flex flex-col">
          <CardHeader className=" bg-muted/50">
            <CardTitle className="text-primary">{pharmacy.label}</CardTitle>
            <CardDescription className="line-clamp-4">
              {pharmacy.address}
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="grid grid-cols-1 py-3 ">
              <div className="font-bold text-muted-foreground md:text-xl text-base relative before:absolute before:top-2 before:-left-4 ml-3 before:w-2 before:h-2 before:bg-[#619b07] before:rounded-full">
                {pharmacy.gardeStatus}
              </div>
              <Separator className="my-3" />
              <div className="flex items-center justify-between ">
                <span className="font-medium text-lg">City</span>
                <span className="text-base">{pharmacy.city}</span>
              </div>

              <Separator className="my-2" />
              <div className="flex items-center justify-between">
                <span className="font-medium text-lg">telephone</span>
                <span className="text-base">{pharmacy.phone}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="w-full flex mt-auto">
            <LoadingLink href={`pharmacy${pharmacy.link}`} className="w-full">
              <Button className="rounded-sm w-full text-lg">view more</Button>
            </LoadingLink>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

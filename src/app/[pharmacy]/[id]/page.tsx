import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDetailPharmacy } from "@/lib/action";
import { Map } from "lucide-react";
import Link from "next/link";

export default async function Dashboard({
  params,
}: {
  params: { id: string };
}) {
  const pharmacy = await getDetailPharmacy(`/${params.id}`);

  if (!pharmacy) {
    return null;
  }

  return (
    <div className="flex  w-full max-w-7xl mx-auto px-4 py-8 flex-col">
      <div className="md:grid-cols-3 grid-cols-1 grid gap-5">
        <div className="md:col-span-2 flex flex-col gap-5 col-span-1">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-primary mb-3">
                {pharmacy.name}
              </CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                {pharmacy.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Link href={pharmacy.location}>
                <Button variant="outline">
                  <Map size={16} className="mr-2" />
                  Voir sur la map
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-start bg-muted/50">
              <CardTitle className="text-primary">
                Historique de garde de {pharmacy.name}
              </CardTitle>
            </CardHeader>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Date Début</TableHead>
                  <TableHead className="font-bold"> Date Fin</TableHead>
                  <TableHead className="font-bold">Garde</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pharmacy.listGuard.map((guard, key) => (
                  <TableRow key={key}>
                    <TableCell>{guard.startDate}</TableCell>
                    <TableCell>{guard.endDate}</TableCell>
                    <TableCell>{guard.guard}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
        <div className="col-span-1 row-start-1 md:row-auto">
          <Card>
            <CardHeader className="flex flex-row items-start bg-muted/50">
              <CardTitle className="text-primary">Adresse et Contact</CardTitle>
            </CardHeader>
            <CardContent className="p-3 text-sm">
              <div className="grid gap-1">
                <div className="flex flex-col gap-1">
                  <div className="font-semibold">Adresse</div>
                  <span className="text-muted-foreground">
                    {pharmacy.address}
                  </span>
                </div>
                <Separator className="my-2" />
                <div className="flex flex-col gap-1">
                  <div className="font-semibold">N° Téléphone</div>
                  <span className="text-muted-foreground">
                    {pharmacy.phone}
                  </span>
                </div>
                <Separator className="my-2" />
                <div className="flex flex-col gap-1">
                  <div className="font-semibold">Ville</div>
                  <span className="text-muted-foreground">
                    {pharmacy.country}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

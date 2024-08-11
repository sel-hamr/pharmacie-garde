import { FormSelectCity, SkeletonForm } from "@/components/form-select-city";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-3 ">
      <Card className="md:w-[450px] w-full mt-8 md:mt-0">
        <CardHeader>
          <CardTitle>Pharmacie de Garde au Maroc</CardTitle>
          <CardDescription>
            Liste des pharmacies de garde ouvertes Aujourd&apos;hui au Maroc
          </CardDescription>
        </CardHeader>
        <CardContent>
          <React.Suspense fallback={<SkeletonForm />}>
            <FormSelectCity />
          </React.Suspense>
        </CardContent>
      </Card>
      <div className="w-64 h-1/2 lg:w-[350px] lg:h-[350px] absolute bottom-1/2 left-full -translate-x-full lg:top-1/2 lg:left-[60%] lg:-translate-x-1/2 lg:-translate-y-1/2 rounded-3xl bg-primary blur-[150px] shadow z-[-1] animate-scale"></div>
    </main>
  );
}

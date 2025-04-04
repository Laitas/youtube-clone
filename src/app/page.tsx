import { HydrateClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Homepage from "./page-client";
import { FilterCarouselSuspense } from "@/components/filter-carousel";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    categoryId?: string;
  }>;
}) {
  const { categoryId } = await searchParams;
  void trpc.categories.getMany.prefetch();
  return (
    <HydrateClient>
      <Suspense fallback={<FilterCarouselSuspense />}>
        <ErrorBoundary fallback={<div>Error</div>}>
          <Homepage categoryId={categoryId} />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}

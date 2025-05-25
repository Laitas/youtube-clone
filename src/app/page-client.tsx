"use client";

import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";

const Homepage = ({ categoryId }: { categoryId?: string }) => {
  const [data] = trpc.categories.getMany.useSuspenseQuery();
  const categories = data.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  return (
    <div className="mx-auto mb-10 flex max-w-[2400px] flex-col gap-y-6 px-4 pt-2.5">
      <FilterCarousel data={categories} value={categoryId} />
    </div>
  );
};

export default Homepage;

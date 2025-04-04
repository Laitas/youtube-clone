"use client";

import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";

const Homepage = ({ categoryId }: { categoryId?: string }) => {
  const router = useRouter();
  const [data] = trpc.categories.getMany.useSuspenseQuery();
  const categories = data.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const onSelect = (value: string) => {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }
    router.push(url.toString());
  };

  return (
    <div className="mx-auto mb-10 flex max-w-[2400px] flex-col gap-y-6 px-4 pt-2.5">
      <FilterCarousel
        onSelect={onSelect}
        data={categories}
        value={categoryId}
      />
    </div>
  );
};

export default Homepage;

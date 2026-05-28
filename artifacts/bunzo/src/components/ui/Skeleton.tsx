import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200/80",
        className
      )}
    />
  );
}

export function BurgerCardSkeleton() {
  return (
    <div className="relative flex flex-col justify-between gap-4 rounded-3xl p-3 w-full h-full max-w-80 bg-white border border-gray-100 shadow-md">
      <div className="flex flex-col gap-4">
        <Skeleton className="rounded-2xl w-full h-44" />
        <div className="flex flex-col gap-2 px-1">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <div className="flex gap-2 px-1">
        <Skeleton className="h-7 w-20 rounded-full" />
        <Skeleton className="h-7 w-24 rounded-full" />
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="relative flex flex-col sm:flex-row gap-4 items-center rounded-3xl p-3 sm:p-4 bg-white border border-gray-100 shadow-md">
      <Skeleton className="flex-shrink-0 w-44 h-36 rounded-2xl" />
      <div className="flex flex-col justify-between gap-3 w-full py-1">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="flex items-center gap-2 mt-1">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>
  );
}

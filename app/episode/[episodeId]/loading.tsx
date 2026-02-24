import SkeletonCharacterCard from "@/src/components/SkeletonCharacterCard";

export default function Loading() {
  const skeletonArray = Array.from({ length: 8 });

  return (
    <div 
      className="
        grid grid-cols-1 sm:grig-cols-2 md:grid-cols-3 2xl:grid-cols-4
        gap-6 justify-center p-10
      ">
      {
        skeletonArray.map((_, index) => {
          return (
            <SkeletonCharacterCard key={index} />
          );
        })
      }
    </div>
  );
}

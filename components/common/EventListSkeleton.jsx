const EventSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526] animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-[250px] bg-gray-700" />

      <div className="p-3">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-700 rounded w-3/4 mb-2" />

        {/* Location Skeleton */}
        <div className="h-4 bg-gray-700 rounded w-1/2 mb-3" />

        {/* Info Text Skeleton */}
        <div className="flex gap-2 mb-4">
          <div className="h-4 bg-gray-700 rounded w-1/4" />
          <div className="h-4 bg-gray-700 rounded w-1/4" />
        </div>

        {/* Buttons Skeleton */}
        <div className="flex gap-4 mt-4">
          <div className="h-10 bg-gray-700 rounded w-full" />
          <div className="h-10 bg-gray-700 rounded w-full" />
        </div>
      </div>
    </div>
  );
};

const EventListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {[...Array(6)].map((_, index) => (
        <EventSkeleton key={index} />
      ))}
    </div>
  );
};

export default EventListSkeleton;

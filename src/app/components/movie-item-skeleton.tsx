export default function MovieItemSkeleton() {
  return (
    <div role="status" className="p-4 my-5 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-2/12"></div>
        <div className="w-8/12">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
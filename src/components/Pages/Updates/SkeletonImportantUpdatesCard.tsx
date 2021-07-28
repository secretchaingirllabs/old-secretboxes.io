export const SkeletonImportantUpdatesCard = () => (
  <div className="flex items-center justify-between p-6 space-x-10 transition shadow-md hover:shadow-lg">
    <div>
      <div className="flex flex-grow mb-2 space-x-2">
        <div className="w-5 h-5 rounded-full bg-gray-bg" />
        <div className="h-[20px] w-[80px] bg-gray-bg" />
      </div>
      <div className="w-[350px] mb-2 bg-gray-bg h-[20px]" />
      <div className="w-[350px] mb-4 bg-gray-bg h-[20px]" />
      <div className="flex h-5 w-[100px] bg-gray-bg" />
    </div>
    <div
      className="flex items-center justify-center flex-none bg-gray-bg"
      style={{ width: '244px', height: '177px' }}
    />
  </div>
)

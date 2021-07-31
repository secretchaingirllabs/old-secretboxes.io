export const UploadDataAndReadTime: React.FC<{ uploadDate: string; readTime: string }> =
  ({ uploadDate, readTime }) => (
    <div className="flex mb-1 space-x-2 text-sm text-gray-body">
      <span>{uploadDate}</span>
      <span className="text-xl leading-5 text-gray-primary">&bull;</span>
      <span>{readTime}</span>
    </div>
  )

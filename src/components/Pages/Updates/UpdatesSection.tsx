import { ReactNode } from 'react'

export const UpdatesSection: React.FC<{ title: string; icon: ReactNode }> = ({
  children,
  title,
  icon,
}) => (
  <section>
    <div className="flex items-center space-x-3 mb-9">
      {icon}
      <h1 className="font-semibold">{title}</h1>
    </div>
    {children}
  </section>
)

import { MainLayout } from '@/components/Layouts/MainLayout'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="p-4 bg-gray-700 font-display text-7xl">404 Page Not Found</div>
      <Link href="/">
        <a className="text-2xl underline font-body text-primary">Return Home</a>
      </Link>
    </div>
  )
}

Home.Layout = MainLayout

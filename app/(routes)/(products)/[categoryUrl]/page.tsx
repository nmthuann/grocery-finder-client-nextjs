import Loading from '@/app/loading'
import { Suspense } from 'react'
import BouncingIcon from './components/bouncing-ring'

const CategoryPage = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CategoryExplorer categories={categories} productCards={productCards} />
      </Suspense>

      <BouncingIcon />
    </div>
  )
}

export default CategoryPage

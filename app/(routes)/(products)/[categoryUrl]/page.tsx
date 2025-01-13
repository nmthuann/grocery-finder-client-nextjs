import Loading from '@/app/loading'
import { Suspense } from 'react'
import BouncingIcon from './components/bouncing-ring'
import CategoryExplorer from './components/category-explorer'
import { getCategories } from '@/actions/get-categories'
import NotFoundComponent from '@/components/errors/not-found-component'
import { ProductResponse } from '@/types/responses/product-card.response.type'
import { getProductsByCategory } from '@/actions/get-products-by-category'

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  try {
    if (params.category === undefined) {
      return <NotFoundComponent />
    }
    let productCards: ProductResponse[] = []
    const categories = await getCategories()
    const findCategory = categories.find(cat => cat.categoryUrl === `/${params.category}`)

    if (findCategory) {
      productCards = await getProductsByCategory(findCategory.categoryName)
      return (
        <div>
          <Suspense fallback={<Loading />}>
            <CategoryExplorer categories={categories} productCards={productCards} />
          </Suspense>

          <BouncingIcon />
        </div>
      )
    } else {
      return <NotFoundComponent />
    }
  } catch (error) {
    return (
      <ErrorComponent page='Category Page' message='Failed to load Categories or Products. Please try again later.' />
    )
  }
}

export default CategoryPage

export default CategoryPage

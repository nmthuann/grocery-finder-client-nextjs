'use client'

import { useEffect, useState } from 'react'
import { createMenuFromLeftRight, SideNavItem } from '@/constants/constants'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'
import { KanbanSquareDashed, Undo } from 'lucide-react'
import { Category } from '@/types/products.type'
import { ProductResponse } from '@/types/responses/product-card.response.type'
import { SideNavBar } from './side-navbar'
import CategoryBreadcumb from './category-breadcumb'
import CategoryFilter from './category-filter'

interface CategoryComponentProps {
  categories: Category[]
  productCards: ProductResponse[]
}

const CategoryExplorer: React.FC<CategoryComponentProps> = ({ categories, productCards }) => {
  const router = useRouter()
  const [items, setItems] = useState<SideNavItem[]>([])

  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { title: 'Trang chủ', path: '/' },
    { title: 'Danh mục sản phẩm', path: '/danh-muc-san-pham' }
  ])

  const handleCategorySelect = (category: SideNavItem) => {
    const newBreadcrumbs = [
      { title: 'Trang chủ', path: '/' },
      { title: category.categoryName, path: category.path }
    ]
    setBreadcrumbItems(newBreadcrumbs)
  }

  useEffect(() => {
    const convertedItems = createMenuFromLeftRight(categories)
    setItems(convertedItems)
  }, [categories])

  return (
    <div className='flex flex-col md:flex-row h-auto rounded-3xl'>
      {/* Phần tử 1: Chiếm 1/4 */}
      <div className=' hidden md:flex-[1] mt-4 rounded-3xl md:block'>
        <SideNavBar items={items} onCategorySelect={handleCategorySelect} />
      </div>

      {/* Phần tử 2: Chiếm 3/4 */}
      <div className='flex-1 md:flex-[3] rounded-3xl mt-8 space-y-4'>
        <div className='ml-4'>
          <CategoryBreadcumb items={breadcrumbItems} />
        </div>
        <div className='ml-4'>
          <CategoryFilter />
        </div>

        <div
          className='
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-2 
                ml-10 sm:ml-8 md:ml-8 lg:ml-5
                '
        >
          {productCards.length > 0 ? (
            productCards.map((productCard: ProductCardResponse) => (
              <ProductCard key={productCard.skuId} data={productCard} />
            ))
          ) : (
            <div
              className='
                        flex flex-col items-center justify-center
                        col-span-full text-center py-20
                        '
            >
              <KanbanSquareDashed className='text-gray-500 w-16 h-16 mb-4' />
              <p className='text-lg text-gray-600'>Hiện tại không có sản phẩm nào.</p>
              <Button
                color='warning'
                size='lg'
                className='mt-6 font-semibold text-base'
                onClick={() => router.push('/')}
                endContent={<Undo />}
                aria-label='Quay lại trang chủ'
              >
                Quay lại trang chủ
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryExplorer

'use client'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'

interface CategoryBreadcumbProps {
  items: { title: string; path: string }[]
}

const CategoryBreadcumb: React.FC<CategoryBreadcumbProps> = ({ items }) => {
  return (
    <Breadcrumbs>
      {items.map(item => (
        <BreadcrumbItem key={item.path} href={item.path}>
          {item.title}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  )
}

export default CategoryBreadcumb

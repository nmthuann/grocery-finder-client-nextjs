'use client'

import React, { useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SideNavItem } from '@/constants/constants'
import { Icon } from '@iconify/react'
import { Store } from 'lucide-react'
import { Button, ScrollShadow } from '@nextui-org/react'

interface SideNavBarProps {
  items: SideNavItem[]
  onCategorySelect: (category: SideNavItem) => void
}

export const SideNavBar: React.FC<SideNavBarProps> = ({ items, onCategorySelect }) => {
  return (
    <div className='w-80 h-screen border rounded-xl mb-5'>
      <div className='flex flex-col h-full'>
        <ScrollShadow className='flex-1 overflow-auto rounded-md'>
          <Link
            href='/'
            className='flex flex-row space-x-3 items-center 
                        justify-center md:justify-start md:px-6 border-b h-12 w-full'
          >
            <Store />
            <span className='font-bold text-lg hidden md:flex'>Danh mục sản phẩm</span>
          </Link>

          <div className='flex flex-col mt-4 space-y-2 md:px-6'>
            {items.map((item: SideNavItem) => (
              <MenuItem key={item.categoryName} item={item} onCategorySelect={onCategorySelect} />
            ))}
          </div>
        </ScrollShadow>
      </div>
    </div>
  )
}

const MenuItem = ({
  item,
  onCategorySelect
}: {
  item: SideNavItem
  onCategorySelect: (category: SideNavItem) => void
}) => {
  const pathname = usePathname()
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }
  return (
    <div>
      <Button
        variant='light'
        onPress={() => {
          toggleSubMenu()
          onCategorySelect(item)
        }}
        className={`
                    flex items-center 
                    p-2 rounded-lg w-full justify-between
                    hover:bg-slate-600 hover:dark:bg-slate-400 ${
                      pathname.includes(item.path) ? 'dark:bg-slate-700' : ''
                    }`}
      >
        <span className='font-semibold text-sm flex whitespace-nowrap overflow-hidden text-ellipsis'>
          {item.categoryName}
        </span>
        <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
          <Icon icon='lucide:chevron-down' width='20' height='20' />
        </div>
      </Button>

      {subMenuOpen && (
        <div className='my-2 ml-12 flex flex-col space-y-4'>
          {item.subMenuItems?.map(subItem => (
            <Link
              key={subItem.categoryName}
              href={subItem.path}
              className={`${subItem.path === pathname ? 'font-bold' : ''}`}
            >
              <span>{subItem.categoryName}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

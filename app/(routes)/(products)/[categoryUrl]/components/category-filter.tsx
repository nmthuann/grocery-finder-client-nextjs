'use client'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { ChevronDownIcon } from 'lucide-react'
import { useMemo, useState } from 'react'

const CategoryFilter = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['Sản phẩm bán chạy']))

  const selectedValue = useMemo(() => Array.from(selectedKeys).join(', ').replaceAll('_', ' '), [selectedKeys])

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button className='capitalize' endContent={<ChevronDownIcon />}>
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label='Single selection example'
          variant='flat'
          disallowEmptySelection
          selectionMode='single'
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <DropdownItem key='Sản phẩm bán chạy'>Sản phẩm bán chạy</DropdownItem>
          <DropdownItem key=' Giá thấp đến cao'>Giá thấp đến cao</DropdownItem>
          <DropdownItem key='Giá cao đến thấp'>Giá cao đến thấp</DropdownItem>
          <DropdownItem key='Khuyến mãi sốc'>Khuyến mãi sốc</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default CategoryFilter

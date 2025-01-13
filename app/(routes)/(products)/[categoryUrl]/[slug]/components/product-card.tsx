'use client'
import { Button, Card, CardBody, CardFooter, Chip, Image, useDisclosure } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { truncateText } from '@/lib/utils'
import { CircleCheck, Heart } from 'lucide-react'
import { ProductResponse } from '@/types/responses/product-card.response.type'
import Currency from '@/components/utilities/currency'
import ConfirmProductModal from './confirm-product-modal'

interface ProductCardProps {
  data: ProductResponse
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const truncatedSkuName = truncateText(data.productName, 35)
  const discountPercentage = data.importPrice
    ? Math.round(((data.importPrice - data.salePrice) / data.salePrice) * 100)
    : null
  return (
    <Card
      radius='lg'
      className='
            md:w-full lg:w-full xl:w-full 
            h-96
            p-4 
            rounded-2xl cursor-pointer relative 
            border-none bg-background/70 dark:bg-default-100/60 
            '
      isBlurred
      shadow='sm'
    >
      <CardBody
        className='
                relative
            overflow-visible p-0 transition-opacity duration-300 '
      >
        <Image
          isZoomed
          radius='lg'
          width='100%'
          alt={data.productName}
          className='w-full object-cover h-[140px] '
          src={data.productThumb}
          loading='lazy'
        />
        <Button
          isIconOnly
          aria-label='Like'
          color='danger'
          className='absolute top-2 right-2 z-10 bg-slate-500/50 rounded-full'
        >
          <Heart className='text-white' />
        </Button>
      </CardBody>
      <CardFooter className='flex flex-col justify-between h-full'>
        <h1 className='text-left text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300'>
          {truncatedSkuName}
        </h1>
        <div className='flex w-full'>
          <Chip
            startContent={<CircleCheck size={16} />}
            variant='bordered'
            className={`${data.isActive ? 'dark:text-[#64FF4B] text-green-500 text-sm' : 'text-red-600 text-sm'}`}
          >
            {data.isActive ? 'Còn hàng' : 'Tạm hết hàng'}
          </Chip>
        </div>
        <div className='flex flex-row items-baseline justify-between w-full mt-2'>
          <div className='flex flex-col items-start'>
            <Currency value={data.salePrice.toString()} />
            {data.importPrice > data.salePrice && (
              <div className='flex items-center gap-2'>
                <span className='text-tiny text-default-400 line-through'>{data.importPrice} đ</span>

                <Chip color='danger' size='sm' variant='flat'>
                  <p className='font-bold'>-{discountPercentage}%</p>
                </Chip>
              </div>
            )}
          </div>
          <div className='flex justify-end '>
            <p className='text-tiny text-right text-slate-700 dark:text-slate-300'>{`Đã bán ${data.sold}`}</p>
          </div>
        </div>

        <Button
          className='
                    w-full
                    text-white font-medium
                    bg-gradient-to-r from-lime-400  to-green-600 mt-2 
                    '
          onPress={onOpen}
        >
          Mua Ngay
        </Button>
        <ConfirmProductModal skuDetailSelected={data} isOpen={isOpen} onOpenChange={onOpenChange} />
      </CardFooter>
    </Card>
  )
}

export default ProductCard

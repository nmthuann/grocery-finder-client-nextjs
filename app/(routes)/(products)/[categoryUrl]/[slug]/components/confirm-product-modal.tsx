'use client'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  Spinner
} from '@nextui-org/react'
import Price from '@/components/utilities/price'
import { MinusCircleIcon, PlusCircleIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import axios from 'axios'
import { ProductResponse } from '@/types/responses/product-card.response.type'
import ProductOptionCheckbox from './product-option-checkbox'

const URL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products`

interface ConfirmProductModalProps {
  skuDetailSelected: ProductResponse
  isOpen: boolean
  onOpenChange(): void
}

const ConfirmProductModal: React.FC<ConfirmProductModalProps> = ({ skuDetailSelected, isOpen, onOpenChange }) => {
  const router = useRouter()
  const pathname = usePathname()

  const [loading, setLoading] = useState(false)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [productCardList, setProductCardList] = useState<ProductResponse[]>([])
  const [optionSelected, setOptionSelected] = useState<ProductResponse>(skuDetailSelected)
  const [hasFetched, setHasFetched] = useState(false)

  useEffect(() => {
    if (skuDetailSelected) {
      setTotalPrice(skuDetailSelected.salePrice * quantity)
    }
  }, [quantity, skuDetailSelected])

  const fetchProductOptions = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.get<ProductResponse[]>(`${URL}/${skuDetailSelected.id}/skus`, {
        headers: {
          'X-Rest-Api-Version': `${process.env.NEXT_PUBLIC_BACKEND_VERSION_API}`
        }
      })
      setProductCardList(response.data)
      setHasFetched(true)
    } catch (error) {
      toast.error('Không thể tải dữ liệu sản phẩm.')
      console.error('Error fetching product options:', error)
    } finally {
      setLoading(false)
    }
  }, [skuDetailSelected.id])

  useEffect(() => {
    if (isOpen && !hasFetched) {
      fetchProductOptions()
    }
  }, [isOpen, hasFetched, fetchProductOptions])

  const onAddToCart = async () => {
    if (quantity > skuDetailSelected?.stock) {
      toast.error('Bạn đã thêm quá số lượng hiện có ở cửa hàng.')
    } else {
      // cart.addItem(optionSelected as ProductCardResponse, quantity);
      toast.success('Bạn đã thêm sản phẩm vào giỏ hàng thành công.')
    }
  }

  const increaseQuantity = () => {
    if (skuDetailSelected && quantity < skuDetailSelected.stock) {
      setQuantity(quantity + 1)
    } else {
      toast.error('Bạn không thể thêm quá số lượng hiện có.')
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleButtonClick = () => {
    setButtonLoading(true)
    router.push(`${pathname}${skuDetailSelected.slug}`)
  }

  const handleOptionChange = (option: ProductResponse) => {
    setOptionSelected(option)
    setQuantity(1)
  }
  const handleConfirm = () => {
    onAddToCart() // Thêm sản phẩm vào giỏ hàng
    onOpenChange() // Đóng modal
  }
  return (
    // (loading ? (): ())
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isKeyboardDismissDisabled={true}
      placement='center'
      size='3xl'
      className='top-10 bottom-5'
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className='text-xl font-bold'>Xác nhận Sản phẩm</ModalHeader>
            <ModalBody>
              <h3 className='font-semibold'>{optionSelected.productName}</h3>

              {/* Danh sách option */}
              <ScrollShadow className='max-w-full max-h-auto'>
                <div className='grid grid-flow-col auto-cols-max gap-4 overflow-x-auto'>
                  {productCardList.map((productCard: ProductResponse) => (
                    <ProductOptionCheckbox
                      key={productCard.id}
                      option={productCard}
                      isSelected={optionSelected.id === productCard.id}
                      onOptionChange={() => handleOptionChange(productCard)}
                    />
                  ))}
                </div>
              </ScrollShadow>

              {/* Tăng - giảm số lượng */}
              <hr className='my-4' />
              <div className='flex items-center justify-between'>
                <h3 className='font-semibold '>Số lượng muốn mua:</h3>
                <div className='flex items-center gap-x-2'>
                  <Button size='sm' isIconOnly radius='full' onPress={decreaseQuantity}>
                    <MinusCircleIcon />
                  </Button>
                  <div className='text-base font-medium'>{quantity}</div>
                  <Button size='sm' isIconOnly radius='full' onPress={increaseQuantity}>
                    <PlusCircleIcon />
                  </Button>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                className='font-medium 
                                border-[#64ff4b] border-2 text-[#64ff4b] bg-[#18181B] hover:bg-slate-500/50'
                onPress={handleButtonClick}
                isDisabled={buttonLoading}
              >
                {buttonLoading ? <Spinner color='success' size='sm' /> : 'Xem chi tiết sản phẩm'}
              </Button>
              <Button
                color='primary'
                className='font-medium text-white
                                bg-gradient-to-r from-lime-400  to-green-600'
                onPress={handleConfirm}
              >
                <Price amount={skuDetailSelected.salePrice} />
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
export default ConfirmProductModal

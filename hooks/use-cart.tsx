"use client";
import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductCardResponse } from "@/types/responses/product-card.response.type";

interface CartStore {
    items: { productCard: ProductCardResponse; cartQuantity: number }[];
    addItem: (productCard: ProductCardResponse, quantity: number) => void;
    removeItem: (id: number) => void;
    removeAll: () => void;
    updateQuantity: (id: number, newQuantity: number) => void;
}

const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],
            addItem: (productCard: ProductCardResponse, quantity: number) => {
                // Ensure data exists and has an id property
                if (!productCard || typeof productCard.skuId !== "number") {
                    toast.error("Không hợp lệ.");
                    return;
                }
                if (get().items.length > 10) {
                    toast.error(
                        "Giỏ hàng đầy!. Vui lòng thanh toán trước khi thêm."
                    );
                    return;
                }
                const currentItems = get().items;
                const existingItemIndex = currentItems.findIndex(
                    (item) => item.productCard?.skuId === productCard.skuId
                );

                if (existingItemIndex !== -1) {
                    // Item already in cart, increment cartQuantity
                    set((state) => {
                        const updatedItems = [...state.items];
                        updatedItems[existingItemIndex].cartQuantity +=
                            quantity;
                        return { items: updatedItems };
                    });
                } else {
                    // Item not in cart, add to items array with cartQuantity of 1
                    set((state) => {
                        return {
                            items: [
                                ...state.items,
                                {
                                    productCard: productCard,
                                    cartQuantity: quantity,
                                },
                            ],
                        };
                    });
                }

                toast.success(
                    `${productCard.skuName} đã được thêm vào giỏ hàng`
                );
            },
            removeItem: (id: number) => {
                set({
                    items: [
                        ...get().items.filter(
                            (item) => item.productCard.skuId !== id
                        ),
                    ],
                });
                toast.success("Đã xóa sản phẩm ra khỏi giỏ hàng.");
            },
            removeAll: () => set({ items: [] }),
            updateQuantity: (id: number, newQuantity: number) => {
                set((state) => {
                    const updatedItems = state.items.map((item) => {
                        if (item.productCard.skuId === id) {
                            return { ...item, cartQuantity: newQuantity };
                        }
                        return item;
                    });
                    return { items: updatedItems };
                });
            },
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useCart;

import { create } from "zustand"

export const useCart = create((set) => ({
    products: [],
    addCart: item => set(state => ({
        products: [...state.products, item]
    })),
    remove: id => set(state => ({
        products: state.products.filter(item => item.id !== id)   
    })),
}))
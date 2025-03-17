import { create } from 'zustand'

const useGlobalStore = create((set) => ({
    email: "",
    isLoggedIn: false,
    currentUser: {},
    cards: [],
    setIsLoggedIn: (val) => set((state) => ({ isLoggedIn: val })),
    setEmail: (val) => set((state) => ({ email: val })),
    setCurrentUser: (val) => set((state) => ({ currentUser: val })),
    setCards: (val) => set((state) => ({ cards: val })),
}))

export default useGlobalStore
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SearchHistoryStore {
    searchHistory: string[];
    addSearchTerm: (term: string) => void;
    clearHistory: () => void;
}

const useSearchHistory = create(
    persist<SearchHistoryStore>(
        (set, get) => ({
            searchHistory: [],
            addSearchTerm: (term: string) => {
                // Lưu từ khóa vào lịch sử tìm kiếm
                set((state) => {
                    const updatedHistory = [...state.searchHistory, term];
                    // Giới hạn tối đa 5 từ khóa
                    return { searchHistory: updatedHistory.slice(-5) };
                });
            },
            clearHistory: () => set({ searchHistory: [] }),
        }),
        {
            name: "search-history-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
export default useSearchHistory;

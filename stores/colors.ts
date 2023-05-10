import { create } from "zustand";

type ColorStore = {
	colors: string[];
};

const useColorStore = create<ColorStore>((set) => ({
	colors: [],
}));

export default useColorStore;

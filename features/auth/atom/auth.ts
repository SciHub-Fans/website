import { atomWithStorage } from "jotai/utils";

export const isLoginAtom = atomWithStorage<boolean>("isLogin", false, {
    getItem: async (key, initialValue) => {
        return localStorage.getItem(key) === "true" || initialValue;
    },
    setItem: async (key, value) => {
        localStorage.setItem(key, value.toString());
    },
    removeItem: async (key) => {
        localStorage.removeItem(key);
    }
}, {getOnInit: false});
export const tokenAtom = atomWithStorage<string>("token", "");
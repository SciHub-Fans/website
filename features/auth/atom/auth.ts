import { atomWithStorage } from "jotai/utils";

export const isLoginAtom = atomWithStorage<boolean>("isLogin", false);
export const tokenAtom = atomWithStorage<string>("token", "");
import { createContext } from "react";

/**
 * ユーザ名（文字列）を管理するコンテキスト
 */
export const AuthContext = createContext<string>("");
console.log("AuthContext - init");

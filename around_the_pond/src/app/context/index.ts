import { createContext } from "react";


interface SkyContextType {
    color: string;
    setColor: ( color: string) => void;
}

export const SkyContext = createContext<SkyContextType | "light blue">("light blue");
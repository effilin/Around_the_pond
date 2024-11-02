'use client'

import { ReactNode } from "react";
import { SkyContext } from "../context";
import { useState } from "react";

export const SkyProvider = ({children}: { children: ReactNode}) => {
    const [color, setColor] = useState<string>("light-blue");


    return (
        <SkyContext.Provider value={{color, setColor}}>
            {children}
        </SkyContext.Provider>
    );
}
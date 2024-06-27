import { createContext, useCallback, useContext, useState } from "react"
import { IAppDrawerContextProps, IDrawerContextProps } from "../types/contexts"

const DescricaoDrawerContext = createContext({} as IDrawerContextProps)

export const useDescricaoDrawerContext = () => {
    return useContext(DescricaoDrawerContext)
}

export const DescricaoDrawerProvider = ({ children }: IAppDrawerContextProps) => {

    const [isDrawerOpen, setisDrawerOpen] = useState(false);
    
    const toggleDrawerOpen = useCallback(() => {
        setisDrawerOpen(drawerSituation => !drawerSituation)
    }, [])

    return (
        <DescricaoDrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DescricaoDrawerContext.Provider>
    )
}
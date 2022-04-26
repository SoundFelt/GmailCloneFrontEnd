import { createContext, useState } from "react";

const SentEmailContext = createContext({})

export const SentEmailProvider = ({children}) => {
    const [emailJustSent, setEmailJustSent] = useState()

    return (
        <SentEmailContext.Provider value={{emailJustSent, setEmailJustSent}}>{children}</SentEmailContext.Provider>
    )
}

export default SentEmailContext
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);


    fetch("https://api-verdularia.08edgar.daw.iesevalorpego.es/api/categories", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
        .then(response => response.json())
        .then(function (response) {
            if(response.code === undefined) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
        }
        )



    return (
        <UserContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </UserContext.Provider>
    )

}


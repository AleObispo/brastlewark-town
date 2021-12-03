import React, { createContext, useState, useEffect}  from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    //provider state
    const [ idgnome, setIdGnome ] = useState(null);
    const [ gnomeinfo, setGnomeInfo] = useState({})

    //call API
    useEffect(() => {
        const getGnomeInfo = async () => {
            if(!idgnome) return;

            const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

            const Data = await axios.get(url);
             console.log(Data.data.Brastlewark); 

             const options = Data.data.Brastlewark.map((data) => {
                return data
        }) 
           
        const result = options.filter((id)=> id.id === idgnome)
        
            console.log(result[0]);
            setGnomeInfo(result[0]);
        }
        getGnomeInfo()
    }, [idgnome])

    return (
        <ModalContext.Provider
            value={{
                gnomeinfo,
                setIdGnome,
                setGnomeInfo
            }}
        >
            {props.children}
        </ModalContext.Provider>

      );
}
 
export default ModalProvider;
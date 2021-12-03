import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SelectedContext = createContext();

const SelectedProvider = (props) => {
    
    const [ gnomes, setGnomes] = useState ([])
    const [ search, searchGnomes] = useState ({
        haircolor:''
    })
    const [ consulting, setConsulting ] = useState(false)

   
    useEffect(() => {
        if(consulting){
        const getGnomes = async ()=>{
            const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

                const Data = await axios.get(url);
                 console.log(Data.data.Brastlewark); 

                 const options = Data.data.Brastlewark.map((data) => {
                    return data
            }) 
                   
            const result = options.filter((dat) => dat.hair_color === search.haircolor)
            
                console.log(result);
                setGnomes(result)
            
        
        }
        getGnomes();
        }

    }, [search]);// eslint-disable-line

    return ( 
        <SelectedContext.Provider
            value={{
                gnomes,
                setConsulting,
                searchGnomes
            }}
        
        >
            {props.children}
        </SelectedContext.Provider>

     );
}
 
export default SelectedProvider;
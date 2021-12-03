import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const HairColorContext = createContext();

const HairColorProvider = (props)=> {

    const [hairColors, setHairColors] = useState([]);
    

    useEffect(() => {

        
            const getHairColors = async () =>{  
           
            const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
                        
            const Data = await axios.get(url);
                 console.log(Data.data.Brastlewark);
                             
          
             const options = Data.data.Brastlewark.map((dat) => {
                    return dat.hair_color
            }) 
                                   
            console.log(options); 

                           
             const colors = options.reduce((acc,item)=>{
               if(!acc.includes(item)){
               acc.push(item)
             }
               return acc;
            }, []) 

            console.log(colors);


            setHairColors(colors);

        }
        getHairColors();
    }, [])

    

    return(
        <HairColorContext.Provider
            value={{
                
                hairColors
            }}
        >
            {props.children}
        </HairColorContext.Provider>
    )

}

export default HairColorProvider
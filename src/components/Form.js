import React, {useContext, useState} from 'react';
import { HairColorContext } from '../context/HairColorContext';
import { SelectedContext } from '../context/SelectedContext';


const Form = () => {


const [ search, setSearch ] = useState({
    haircolor:''

})   

const { hairColors } = useContext(HairColorContext)
const { searchGnomes, setConsulting } = useContext(SelectedContext)

const getSearch = e => {
    setSearch({
        ...search,
        [e.target.name] : e.target.value
    })
}


    return ( 
        <form 
            className='col-12'
            onSubmit={e => {
                e.preventDefault();
                searchGnomes(search)
                setConsulting(true)
            }}
            
       >
           <fieldset className='text-center'>
               <legend><b>Search Inhabitants by Hair Color</b></legend>
           </fieldset>

           <div className='row mt-4'>
                
                <div className='col-md-4' >
                    <select
                        id='pro'
                        className='form-control'
                        name='haircolor'
                        onChange={getSearch}
                    >
                        <option value=''>-- Select Hair Color --</option>
                        
                       
                        {hairColors.map(haircolor => (
                            <option
                                id='pro'
                                key={haircolor}
                                value={haircolor}
                            
                            >{haircolor}</option>
                        ))}           
                           
                          
                        
                    </select> 
                             
                </div>    
                
                <div className='col-md-4'>
                    <input
                        
                        type='submit'
                        className='btn btn-block btn-primary'
                        value=' F i l t e r '
                        
                    />

                </div>
           </div>      
       </form>
     );
}
 
export default Form;
import React, {useContext} from 'react';
import { SelectedContext } from '../context/SelectedContext';
import Gnome from './Gnome';

const GnomesList = () => {

    const { gnomes } = useContext(SelectedContext)

    console.log(gnomes);
    return ( 
        <div className='row mt-5'>
            {gnomes.map(gnome =>(
                <Gnome 
                   key={gnome.id}
                   gnome={gnome} 
                />
            ))}
        </div>
     );
}
 
export default GnomesList;
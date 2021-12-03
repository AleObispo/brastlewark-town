import React, {useContext, useState} from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

                //MODAL
                function getModalStyle() {
                    const top = 50 ;
                    const left = 50;
                
                    return {
                    top: `${top}%`,
                    left: `${left}%`,
                    transform: `translate(-${top}%, -${left}%)`,
                    };
                }

                const useStyles = makeStyles(theme => ({
                    paper: {
                    position: 'absolute',
                    width: 310,
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: theme.shadows[5],
                    padding: theme.spacing(2, 4, 3),
                    },
                }));

                                    

const Gnome = ({gnome}) => {

                    //material UI modal config
                    const [ modalStyle] = useState(getModalStyle);
                    const [ open, setOpen] = useState(false);

                    const classes = useStyles();

                    const handleOpen = () => {
                        setOpen(true)
                    }
                    const handleClose = () => {
                        setOpen(false)
                    }


    //context values
    const { gnomeinfo,setIdGnome,setGnomeInfo } = useContext(ModalContext);
    console.log(gnomeinfo);
    
    const friends = gnome.friends.map((fr) => {
         return fr
    })
    const integrate = friends.join(', ');
    
    return (
        
        <div className='col-md-4 mb-3'>
            
            <div className='card'>
                <h2 id='cat2'className='card-header'>{gnome.name}</h2>
                
                <img className='card-img-top img-fluid my4' rel="prefetch" src={gnome.thumbnail} alt={`imag of ${gnome.name}`} />

                <div className='card-body'>
                    <button
                        type='button'
                        className='btn btn-block btn-primary'
                        onClick={()=>{
                            setIdGnome(gnome.id);
                            handleOpen();
                        }}
                    >
                        Display Information
                    </button>
                        <Modal
                            open={open}
                            onClose={()=>{
                                setIdGnome(null);
                                setGnomeInfo({})
                                handleClose();
                            }}
                        >
                            <div style={modalStyle} className={classes.paper}>
                                        <h2 id='cat3'className='card-header'>{gnomeinfo.name}</h2>
                                <h4 className='mt-4'><u>Personal Information</u></h4>
                                            <p><b>Professions:</b></p>
                                <p id='cat' className='card-text ml3'>{gnome.professions.map(prof =>(
                                <li>{prof}</li>
                                ))}</p>
                                 <p><b>Age:</b>  {gnome.age}</p>
                                 <p><b>Weight:</b>  {gnome.weight.toFixed(2)} kg</p>
                                 <p><b>Height:</b>  {gnome.height.toFixed(2)} cm</p>
                                 <p><b>Hair Color:</b>  {gnome.hair_color}</p>
                                        <p><b>Friends:</b> {integrate}</p>
                               
                            </div>
                        </Modal>

                </div>
            </div>
            
        </div>
        
     );
}
 
export default Gnome;
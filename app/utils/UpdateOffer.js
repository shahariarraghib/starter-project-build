import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import "../utils/style.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,

    
  };


const UpdateOffer = ({open,handleClose,sentModalData}) => {

    console.log("modalvalue:", sentModalData)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);

    fetch("https://app-optimumsolutions.ch/api/contratoffre/active", {
        method: "PUT",
        headers: {
            'content-type': 'application/json',
             Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        
        });
    }






    return (
        <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"

          closeAfterTransition
          // BackdropComponent={Backdrop}
          // BackdropProps={{
          //   timeout: 500,
          // }}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
             Update Offer
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}> 
               
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>prixOffre:</label>
           <input defaultValue="" {...register("prixOffre")} />

            <label>Operation:</label>
           {/* <input defaultValue={sentModalData.operation} {...register("operation")} /> */}

            <select {...register("operation")}>
            <option value="">Please choose an operation</option>
            <option value="Traité">Traité</option>
            <option value="En traitement">En traitement</option>
          </select>
           
           {/* <label>packoffre_id:</label> */}
           <input defaultValue={sentModalData.packoffre?.id}  {...register("packoffre_id")} type="hidden"/>
           {/* <label>user_id:</label> */}
           <input defaultValue={sentModalData?.user?.id}  {...register("user_id")} type="hidden"/>
           {/* <label>idContrat:</label> */}
           <input defaultValue={sentModalData.id} {...register("idContrat")} type="hidden"/>
           
          <Box sx={{ mt: 5 }}>
          <input type="submit" />
          </Box>
         </form>
                    
    
             </Typography>
          </Box>
        </Modal>
      </div>
    );
};

export default UpdateOffer;
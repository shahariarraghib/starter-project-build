import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import FormData from 'form-data';
import "../utils/style.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    // border: '2px solid #e6fbff',
    boxShadow: 24,
    p: 4,
  };

const UpdateInsurance = ({open,handleClose,sentModalData}) => {
    console.log(sentModalData)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [adminAction, setAdminAction] = useState(0)
    const [fileName, setFileName] = useState("")

    const onSubmit = (data) => {

    console.log('submit file',data.document[0]);
    const files = data.document

    const formData = new FormData()
    formData.append('document', files[0])

    fetch("https://app-optimumsolutions.ch/api/files/documents/create", {
        method: "POST",
        headers: {
            // 'content-type': 'application/pdf',
             Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.filename)
          setFileName(data.filename)
          setAdminAction(1)
        });
    
 

  }

  const onSubmit1 = data => {
    console.log(data);

fetch("https://app-optimumsolutions.ch/api/contratassurance/active", {
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
      setAdminAction(1)
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
             Update Insurance
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}> 
          
          {adminAction?<form onSubmit={handleSubmit(onSubmit1)}>
          {/* <label>pdfContratAssurance:</label> */}
           <input defaultValue={fileName} {...register("pdfContratAssurance")} type="hidden"/>

           {/* <label>Operation:</label>
           <input defaultValue="" {...register("operation")} /> */}
           <label>Prix Assurance:</label>
           <input defaultValue="" {...register("prixAssur")} />

           <label>Operation:</label>
           {/* <input defaultValue={sentModalData.operation} {...register("operation")} /> */}

            <select {...register("operation")}>
            <option value="">Please choose an operation</option>
            <option value="Traité">Traité</option>
            <option value="En traitement">En traitement</option>
          </select>


           {/* <label>packassur_id:</label> */}
           <input defaultValue={sentModalData?.packassurance?.id} {...register("packassur_id")} type="hidden"/>
           {/* <label>user_id:</label> */}
           <input defaultValue={sentModalData?.user?.id} {...register("user_id")} type="hidden"/>
           {/* <label>idContrat:</label> */}
           <input defaultValue={sentModalData?.id} {...register("idContrat")} type="hidden"/>
           
           <Box sx={{ mt: 5 }}>
          <input type="submit" />
          </Box>

         </form> :<form onSubmit={handleSubmit(onSubmit)}>
          <label>Select PDF:</label>
          <input defaultValue="" type="file" {...register("document")}  webkitdirectory/>
           
          <Box sx={{ mt: 5 }}>
          <input type="submit" />
          </Box>

          </form>

          }
    
             </Typography>
          </Box>
        </Modal>
      </div>
    );
};

export default UpdateInsurance;
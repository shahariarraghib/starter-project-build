import React, { useEffect, useState, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@mui/material/Button';
import UpdateInsurance from '../../../utils/UpdateInsurance';


function BasicTable(props) {
  const title = brand.name + ' - Table';
  const description = brand.desc;
  const [sentData, setSentData] = useState([])
  const [users, setUsers] = useState([])
  console.log(users)
  // console.log(sentData)
  useEffect(() => {

    fetch("https://app-optimumsolutions.ch/api/contratassurance/getAll",{
      method: 'GET',
      headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      
  })
      .then((res) => res.json())
      .then((data) => {
   
    setUsers(data.data)
  
      });
  }, []);


  const [sentModalData, setSentModalData] = useState([])
// console.log(sentData)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
   <>
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock title="User Insurance" whiteBg icon="ion-ios-menu-outline" desc="Managing User Insurance">
        <div>
          {/* <StrippedTable /> */}
        </div>
     
      
      
      <div>
    <Fragment>
    
    
      <div >
        <Table >
          <TableHead>
            <TableRow>
            <TableCell align="left">No.</TableCell>

            <TableCell align="left">First name</TableCell>
              <TableCell align="left">Last name</TableCell>
              <TableCell align="left">Email</TableCell>

              <TableCell align="left">packAssurance</TableCell>
              <TableCell align="left">Company</TableCell>
              <TableCell align="left">Signature</TableCell>
              <TableCell align="left">Prix Assurance</TableCell>
              <TableCell align="left">operation</TableCell>
            
             
            </TableRow>
          </TableHead>
          <TableBody>
           

             {users.map((user, index) => ( 
              <TableRow >
              <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{user.user.nomUser}</TableCell>
              <TableCell align="left">{user.user.prenomUser}</TableCell>
              <TableCell align="left">{user.user.emailUser}</TableCell>

              <TableCell align="left">{user.packassurance.nomAssur}</TableCell>
              <TableCell align="left">{user.packassurance?.compagnie?.nomCompagnie}</TableCell>
              <TableCell align="left"><img src={user.signature} className="w3-left w3-circle w3-margin-right" width="100px" /></TableCell>
              <TableCell align="left">{user.prixAssur}</TableCell>
              <TableCell align="left">{user.operation}</TableCell>
              
         
              
              <TableCell align="left">

              <Button
              onClick={() => handleOpen(setSentModalData(user))} >
              
              Update Insurance
            </Button>
              </TableCell>
              
              </TableRow>
            
       
           
             ))

             }
          </TableBody>
        </Table>
      </div>
    </Fragment>

<UpdateInsurance 
      handleClose={handleClose}
      open={open}
      sentModalData={sentModalData}
      >

</UpdateInsurance>
     
    

   
    
      </div>
      </PapperBlock>
    </div></>
  );
}

export default BasicTable;

import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from 'dan-components/Tables/tableStyle-jss';
import Button from '@mui/material/Button';
import UpdateUserInfo from '../../../utils/UpdateUserInfo';





function StrippedTable(props) {
  const { classes } = props;
  const {users} = props
  console.log('users',users[0])
  

const [sentData, setSentData] = useState([])
// console.log(sentData)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Fragment>
    
    
      <div className={classes.rootTable}>
        <Table className={classNames(classes.table, classes.stripped)}>
          <TableHead>
            <TableRow>
            <TableCell align="left">No.</TableCell>

              <TableCell align="left">First name</TableCell>
              <TableCell align="left">Last name</TableCell>
              <TableCell align="left">Email</TableCell>

              <TableCell align="left">adrUser</TableCell>
              <TableCell align="left">telUser</TableCell>
              <TableCell align="left">validiteAdresse</TableCell>
              <TableCell align="left">typeusers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           

             {users.map((user, index) => (
              <TableRow>
              <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{user.nomUser}</TableCell>
              <TableCell align="left">{user.prenomUser}</TableCell>
              <TableCell align="left">{user.emailUser}</TableCell>

              <TableCell align="left">{user.adrUser}</TableCell>
              <TableCell align="left">{user.telUser}</TableCell>
              <TableCell align="left">{user.validiteAdresse}</TableCell>
              <TableCell align="left">{user?.typeusers?.nomTypeUser}</TableCell>
              <TableCell align="left">
               
            <Button
              onClick={() => handleOpen(setSentData(user))}
             
            >
              
              update user info 
            </Button></TableCell>

              </TableRow>
            
       
           
             ))

             }
          </TableBody>
        </Table>
      </div>
    </Fragment>


   
      <UpdateUserInfo       
      handleClose={handleClose}
      open={open}
      sentData={sentData}
      
    ></UpdateUserInfo>
    

   
    </>
  );
}

StrippedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StrippedTable);

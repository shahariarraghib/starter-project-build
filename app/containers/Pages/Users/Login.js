import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm } from 'dan-components';
import styles from 'dan-components/Forms/user-jss';
import axios from 'axios';
import SnackbarComponent from '../../../utils/Snackbar';

function Login(props) {
  const [valueForm, setValueForm] = useState(null);
  // console.log(valueForm)
  const clickRef = useRef()

  const submitForm = values => {
     // simulate server latency

    axios.post("https://app-optimumsolutions.ch/api/authentication/login", values )
      .then((res) => {
        console.log('res',res.data.token);
        setTimeout(() => {
          setValueForm(values);
          console.log(`You submitted:\n\n${valueForm}`);
          window.location.href = '/app';
        }, 500);
        localStorage.setItem('token', res.data.token);


      }).catch(err => {
        clickRef.current.click()
        // alert("please check email and password")
      });
      
      
    };
    
    const title = brand.name + ' - Login';
    const description = brand.desc;
    const { classes } = props;
    return (
      <div className={classes.root}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
    <div >
      <SnackbarComponent clickRef = {clickRef}/>
    </div>
      <div className={classes.container}>
        <div className={classes.userFormWrap}>
          <LoginForm onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);

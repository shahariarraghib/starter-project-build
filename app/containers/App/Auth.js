import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Outer from '../Templates/Outer';
import {
  Login,
  Register,
  ResetPassword,
  ComingSoon,
  Maintenance,
  NotFound,
} from '../pageListAsync';
// import SentCodeOtp from '../../components/Forms/SendCodeOtp';
// import ResetPasswordAfterCode from '../../components/Forms/ResetPasswordAfterCode';
import SendCodeOtpComponent from '../Pages/Users/SendCodeOtpComponent';
import ResetPasswordafterCodeComponent from '../Pages/Users/ResetPasswordafterCodeComponent';

function Auth() {
  return (
    <Outer>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/send-code" component={SendCodeOtpComponent} />
        <Route path="/reset-password-code" component={ResetPasswordafterCodeComponent} />
        {/* <Route path="/maintenance" component={Maintenance} /> */}
        {/* <Route path="/coming-soon" component={ComingSoon} /> */}
        <Route component={NotFound} />
      </Switch>
    </Outer>
  );
}

export default Auth;

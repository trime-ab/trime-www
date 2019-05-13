import l from "../Logger";

class MailChimp {

  init = ():void => {
    l.log(process.env.REACT_APP_MAILCHIMP_SECRET);
  }

}

const mailChimp = new MailChimp();
export default mailChimp;

import * as EmailValidator from 'email-validator';
import stringUtils from '../StringUtils/StringUtils';
import l from '../Logger/Logger';

class EmailService {
  validateEmail = (email: string): boolean => {
    return !stringUtils.hasValue(email) || EmailValidator.validate(email);
  };
}

const emailService = new EmailService();
export default emailService;

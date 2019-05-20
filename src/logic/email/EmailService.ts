import * as EmailValidator from 'email-validator';

import stringUtils from '../StringUtils/StringUtils';

class EmailService {
  validateEmail = (email: string): boolean => {
    return !stringUtils.hasValue(email) || EmailValidator.validate(email);
  };
}

const emailService = new EmailService();
export default emailService;

import { parsePhoneNumberFromString, PhoneNumber } from 'libphonenumber-js';
import stringUtils from '../StringUtils/StringUtils';
import { number } from 'prop-types';

class PhoneService {
  parsePhoneNumber = (numberStr: string): PhoneNumber => {
    try {
      return parsePhoneNumberFromString(numberStr, 'SE');
    } catch (error) {
      throw new Error(error.message);
    }
  };

  validatePhoneNumber = (numberStr: string): boolean => {
    if (!stringUtils.hasValue(numberStr)) {
      return true;
    }
    const phoneNumber = this.parsePhoneNumber(numberStr);
    return !!phoneNumber && phoneNumber.isValid();
  };
}

const phoneService = new PhoneService();
export default phoneService;

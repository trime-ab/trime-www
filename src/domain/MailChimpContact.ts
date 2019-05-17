import { observable } from 'mobx';

import MailChimpMergeFields from './MailChimpMergeFields';
import ContactStatus from './ContactStatus';

class MailChimpContact {
  email_address: string;
  status: ContactStatus;
  merge_fields: MailChimpMergeFields = new MailChimpMergeFields();
}

export default MailChimpContact;

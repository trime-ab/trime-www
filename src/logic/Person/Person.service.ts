import MailChimpContact from '../../domain/MailChimpContact';
import Person from '../../domain/Person';

class PersonService {
  private readonly MERGE_FIELDS_MAPPING: { [key: string]: string } = {
    city: 'MMERGE5',
    type: 'MMERGE7',
    phone: 'PHONE',
    firstName: 'FNAME',
    lastName: 'LNAME',
  };

  transformToMailChimpContact = (person: Person): MailChimpContact => {
    const mailChimpContact = new MailChimpContact();

    Object.keys(person).forEach(fieldName => {
      if (this.isMergeField(fieldName)) {
        this.setMergeField(fieldName, person, mailChimpContact);
      } else {
        this.setField(fieldName, person, mailChimpContact);
      }
    });
    return mailChimpContact;
  };

  private setField = (
    fieldName: string,
    person: Person,
    mailChimpContact: MailChimpContact
  ): void => {
    const value = person[fieldName];
    mailChimpContact[fieldName] = value;
  };

  private setMergeField = (
    personFieldName: string,
    person: Person,
    mailChimpContact: MailChimpContact
  ): void => {
    const mergeFieldName = this.MERGE_FIELDS_MAPPING[personFieldName];
    const value = person[personFieldName];
    mailChimpContact.merge_fields[mergeFieldName] = value;
  };

  private isMergeField = (personFieldName: string): boolean => {
    return Object.keys(this.MERGE_FIELDS_MAPPING).includes(personFieldName);
  };
}

const personService = new PersonService();
export default personService;

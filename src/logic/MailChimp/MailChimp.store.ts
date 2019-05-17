class MailChimpStore {
  readonly API_ROOT: string = 'https://us19.api.mailchimp.com/3.0';
  readonly LIST_ID: string = 'bf793ff84a';
}

const mailChimpStore = new MailChimpStore();
export default mailChimpStore;

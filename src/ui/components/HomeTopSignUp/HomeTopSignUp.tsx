import './HomeTopSignUp.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';

import classnames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import React from 'react';

import PersonType from '../../../domain/PersonType';
import { PersonStore } from '../../../logic/Person/Person.store';
import ResponsiveProps from '../../../logic/Responsive/Responsive.props';
import homeTopSignUpService from './HomeTopSignUp.service';
import { HomeTopSignUpState } from './HomeTopSignUp.state';
import l from '../../../logic/Logger/Logger';
import ValidationError from '../ValidationError/ValidationError';
import mailChimp from '../../../logic/MailChimp/MailChimp';
import trimeImg from '../../assets/trime.png';
import pointingDude from '../../assets/pointing-dude.png';
import responsiveState from '../../../logic/Responsive/Responsive.state';
interface HomeTopSignUpProps extends ResponsiveProps {
  personStore?: PersonStore;
  homeTopSignUpState?: HomeTopSignUpState;
}

@inject('responsiveState', 'personStore', 'homeTopSignUpState')
@observer
class HomeTopSignUp extends React.Component<HomeTopSignUpProps> {
  render() {
    const state = this.props.homeTopSignUpState;
    const getClassNames = this.getClassNames;
    const personStore = this.props.personStore;
    const person = this.props.personStore.person;
    const isMobile = responsiveState.isMobile;
    const permissionLabelClassNames = classnames('permissions-label', {
      weak: !personStore.hasAgreed,
    });

    return (
      <div className={getClassNames('top-sign-up-container')}>
        {isMobile ? null : (
          <div className="pointing-dude-container">
            <img src={pointingDude} alt="Trime" className="pointing-dude" />
          </div>
        )}
        <form>
          <div className="trime-container">
            <img
              src={trimeImg}
              alt="Trime"
              className={getClassNames('trime')}
            />
          </div>
          <input
            type="text"
            value={person.email_address}
            placeholder="Email*"
            className={this.getClassNames('email text-input')}
            onChange={e => person.setEmailAddress(e.target.value)}
            onBlur={() => state.addTouched('email_address')}
          />
          <ValidationError
            isInvalid={state.isEmailInvalid}
            message="This is not a valid email address"
          />
          <ValidationError
            isInvalid={state.isEmailEmpty}
            message="Email address must be filled in"
          />
          <input
            type="text"
            value={person.phone}
            placeholder="Phone"
            className={this.getClassNames('text-input')}
            onChange={e => person.setPhone(e.target.value)}
            onBlur={() => state.addTouched('phone')}
          />
          <ValidationError
            isInvalid={state.isPhoneInvalid}
            message="This is not a valid phone number"
          />
          <input
            type="text"
            value={person.firstName}
            placeholder="First name*"
            className={this.getClassNames('text-input')}
            onChange={e => person.setFirstName(e.target.value)}
            onBlur={() => state.addTouched('firstName')}
          />
          <ValidationError
            isInvalid={state.isFirstNameEmpty}
            message="First name must be filled in"
          />
          <input
            type="text"
            value={person.lastName}
            placeholder="Last name*"
            className={this.getClassNames('text-input')}
            onChange={e => person.setLastName(e.target.value)}
            onBlur={() => state.addTouched('lastName')}
          />
          <ValidationError
            isInvalid={state.isLastNameEmpty}
            message="Last name must be filled in"
          />
          <input
            type="text"
            value={person.city}
            placeholder="City*"
            className={this.getClassNames('text-input')}
            onChange={e => person.setCity(e.target.value)}
            onBlur={() => state.addTouched('city')}
          />
          <ValidationError
            isInvalid={state.isCityEmpty}
            message="City must be filled in"
          />
          <div className="form-group">
            <p>Are you a Trainee or Trainer?*</p>

            <div className="input-group">
              <RadioButton
                value={PersonType.TRAINEE}
                name="type"
                checked={personStore.isTypeTrainee}
                className={this.getClassNames('radio-input')}
                onChange={e => person.setType(e.value)}
              />
              <label className={personStore.isTypeTrainee ? '' : 'weak'}>
                I'm a trainee
              </label>
              <RadioButton
                value={PersonType.TRAINER}
                name="type"
                checked={personStore.isTypeTrainer}
                className={this.getClassNames('radio-input')}
                onChange={e => person.setType(e.value)}
              />
              <label className={personStore.isTypeTrainer ? '' : 'weak'}>
                I'm a trainer
              </label>
            </div>
            <ValidationError
              isInvalid={state.isTypeEmpty}
              message="One of trainee or trainer must be selected"
              isRadio
            />
          </div>
          <div className="form-group">
            <div className="input-group">
              <Checkbox
                className={this.getClassNames('checkbox-input')}
                checked={personStore.hasAgreed}
                onChange={() => homeTopSignUpService.toggleAgreeToPermissions()}
              />
              <label className={permissionLabelClassNames}>
                Yes, I want to receive email updates from Trime
              </label>
            </div>
            <small className={getClassNames('terms')}>
              By signing up you acknowledge that your information will be
              transferred to Mailchimp for processing. Learn more about
              Mailchimp's privacy practices here.
            </small>
            <small className={getClassNames('terms')}>
              You can unsubscribe at any time by clicking the link in the footer
              of our emails. For information about our privacy practices, please
              contact us at info@trime.app.
            </small>
          </div>
          <div
            onMouseOver={() => state.setSubmitHovered()}
            className={getClassNames('button-container')}
          >
            <button
              className={this.getClassNames('button')}
              onClick={() => mailChimp.add(personStore.person)}
              disabled={!personStore.isValid}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }

  private getClassNames = (className: string): string => {
    const isMobile = this.props.responsiveState.isMobileClassNames;
    return classnames(className, isMobile);
  };
}

export default HomeTopSignUp;

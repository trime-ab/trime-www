import './HomeTopSignUp.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';

import classnames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import React, { createRef, RefObject } from 'react';

import PersonType from '../../../domain/PersonType';
import l from '../../../logic/Logger/Logger';
import mailChimp from '../../../logic/MailChimp/MailChimp';
import { PersonStore } from '../../../logic/Person/Person.store';
import ResponsiveProps from '../../../logic/Responsive/Responsive.props';
import responsiveState from '../../../logic/Responsive/Responsive.state';
import pointingDude from '../../assets/pointing-dude.png';
import trimeImg from '../../assets/trime.png';
import signUpResultState, {
  SignUpResultState,
} from '../SignUpResult/SignUpResult.state';
import ValidationError from '../ValidationError/ValidationError';
import { HomeTopSignUpState } from './HomeTopSignUp.state';

interface HomeTopSignUpProps extends ResponsiveProps {
  personStore?: PersonStore;
  homeTopSignUpState?: HomeTopSignUpState;
  signUpResultState?: SignUpResultState;
}

@inject(
  'responsiveState',
  'personStore',
  'homeTopSignUpState',
  'signUpResultState'
)
@observer
class HomeTopSignUp extends React.Component<HomeTopSignUpProps> {
  private emailInputRef = createRef<HTMLInputElement>();
  private phoneInputRef = createRef<HTMLInputElement>();

  componentDidMount() {
    this.setFocus();
  }

  render() {
    const state = this.props.homeTopSignUpState;
    const getClassNames = this.getClassNames;
    const personStore = this.props.personStore;
    const person = this.props.personStore.person;
    const isMobile = responsiveState.isMobile;
    const permissionLabelClassNames = classnames('permissions-label', {
      weak: !personStore.hasAgreed,
    });
    const isMobileClassName = this.props.responsiveState.isMobileClassNames;
    const containerClassNames = classnames(
      'top-sign-up-container',
      isMobileClassName,
      {
        'signing-up': state.signUpInProgress,
      }
    );

    return (
      <div className={containerClassNames}>
        {isMobile ? null : (
          <div className="pointing-dude-container">
            <img src={pointingDude} alt="Trime" className="pointing-dude" />
          </div>
        )}
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <div className="trime-container">
            <img
              src={trimeImg}
              alt="Trime"
              className={getClassNames('trime')}
            />
          </div>
          <input
            ref={this.emailInputRef}
            type="text"
            value={person.email}
            placeholder="Email*"
            className={this.getClassNames('email text-input')}
            onChange={e => person.setEmail(e.target.value)}
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
            ref={this.phoneInputRef}
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
                onChange={() => state.toggleAgreeToPermissions()}
              />
              <label className={permissionLabelClassNames}>
                Yes, I want to receive updates from Trime
              </label>
            </div>
            <small className={getClassNames('terms')}>
              You can unsubscribe at any time by clicking the link in the footer
              of our emails. For information about our privacy practices, please
              contact us at info@trime.app.
            </small>
            <small className={getClassNames('terms')}>
              By signing up you acknowledge that your information will be
              transferred to Mailchimp for processing. Learn more about
              Mailchimp's privacy practices here.
            </small>
          </div>
          <div
            onMouseOver={() => state.setSubmitHovered()}
            className={getClassNames('button-container')}
          >
            <button
              type="submit"
              className={this.getClassNames('button')}
              disabled={!personStore.isValid}
            >
              {state.signUpInProgress ? 'Signing up...' : 'Sign Up'}
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

  private handleFormSubmit = async e => {
    e.preventDefault();
    this.props.homeTopSignUpState.toggleSigningUpInProgress();
    try {
      const result = await mailChimp.add(this.props.personStore.person);
      this.props.signUpResultState.setResult(result);
    } catch (error) {
      this.props.signUpResultState.setError(error);
      this.props.homeTopSignUpState.toggleSigningUpInProgress();
    }
  };

  private setFocus = (): void => {
    let ref;
    switch (this.props.homeTopSignUpState.focusField) {
      case 'email':
        ref = this.emailInputRef;
        break;
      default:
        ref = this.phoneInputRef;
    }
    ref.current!.focus();
  };
}

export default HomeTopSignUp;

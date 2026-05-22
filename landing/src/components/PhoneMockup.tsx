import HealitWordmarkDark from '@app-svg/healit-wordmark-dark.svg?react';

import { PhoneFrame } from './PhoneFrame';
import { SvgIcon } from './SvgIcon';
import './PhoneMockup.css';

/** Login screen preview inside the device frame. */
export function PhoneMockup() {
  return (
    <PhoneFrame tilt="left" className="login-mock" aria-hidden>
      <div className="app-preview">
        <div className="app-preview__status">
          <span>9:41</span>
        </div>

        <div className="app-preview__hero">
          <div className="app-preview__cards">
            <article className="app-preview__card app-preview__card--a">
              <img src="/icon.png" width={32} height={32} alt="" />
              <div>
                <span>Amoxicillin</span>
                <strong>₹129</strong>
              </div>
            </article>
            <article className="app-preview__card app-preview__card--b">
              <img src="/icon.png" width={32} height={32} alt="" />
              <div>
                <span>Paracetamol</span>
                <strong>₹49</strong>
              </div>
            </article>
          </div>
        </div>

        <div className="app-preview__body">
          <SvgIcon icon={HealitWordmarkDark} width={88} height={34} className="app-preview__logo" />
          <p className="app-preview__headline">We Deliver Care</p>
          <p className="app-preview__sub">Log in or sign up</p>

          <div className="app-preview__field">
            <span className="app-preview__prefix">+91</span>
            <span className="app-preview__input">Mobile number</span>
          </div>
          <div className="app-preview__cta">Log in</div>
        </div>
      </div>
    </PhoneFrame>
  );
}

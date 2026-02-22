import './footer.css';
import {
  IconLocation,
  IconPhone,
  IconEmailInfo,
  IconFacebook,
  IconInstagram,
} from '@/assets/icons';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <section>
        <div className="faq">
          <span className="span-name">FAQ</span>
          <div className="links">
            <Link to="/">Size Chart</Link>
            <Link to="/">Shipping Policy</Link>
            <Link to="/">Terms and Conditions</Link>
          </div>
        </div>
        <div className="policy">
          <div className="faq">
            <span className="span-name">Policy</span>
            <div className="links">
              <Link to="/">Privacy and Policy</Link>
              <Link to="/">Shipping Policy</Link>
            </div>
          </div>
        </div>
        <div className="contact">
            <span className="span-name">Contact</span>
            <div className="links">
              <div className="contact-info">
                <IconLocation />
                <span>Tbilisi, Dighmis 2nd block</span>
              </div>
              <div className="contact-info">
                <IconPhone />
                <span>+995 112233445</span>
              </div>
              <div className="contact-info">
                <IconEmailInfo />
                <span>kartozianikoloz1@gmail.com</span>
              </div>
              <map
                key="Map"
              >
                <iframe
                  key="Iframe"
                  src="https://www.google.com/maps?q=41.788072,44.756767&amp;z=15&amp;output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </map>
          </div>
        </div>
        <div className="mail-notifications">
          <span className="span-name">Add adventure to your inbox</span>
          <form className="email-submit">
            <input
              id="email-input-submit-footer"
              name="email"
              type="email"
              placeholder="Email address"
            />
            <button type="submit" id="button-submit">
              <img
                key="Img"
                src="https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi692710b8/c16e4fe8-3b80-45ad-bf28-d35abe23d410-debdd4b5-8a04-4607-aa3d-bd132d48ce52-6f7d43a4-8cce-4a56-bdb5-b047b7f8d961.svg"
              ></img>
            </button>
          </form>
        </div>
      </section>
      <div className="copyright-footer">
        <span>Copyright policy by nkcell/2026</span>

        <div className="socials-footer">
          <IconFacebook/>
          <IconInstagram/>
        </div>
      </div>

    </footer>
  );
}

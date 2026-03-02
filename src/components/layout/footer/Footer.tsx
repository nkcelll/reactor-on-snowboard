import './footer.css';
import {
  IconLocation,
  IconPhone,
  IconEmailInfo,
  IconFacebook,
  IconInstagram,
  IconSendToEmail
} from '@/assets/icons';
import { BurgerItemsButton } from '@/components/header';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface footerProps {
  hidden: boolean
}

export default function Footer({hidden}: footerProps) {
  // store multiple open sections
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggle = (sectionName: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((s) => s !== sectionName)
        : [...prev, sectionName],
    );
  };

  return (
    <footer className="footer-main_container" style={{display: hidden ? "none" : 'block'}}>
      <section className="footer-section">
        <div className="faq">
          <span className="span-name">FAQ</span>
          <BurgerItemsButton
            name="FAQ"
            className="epxand-footer"
            isOpen={openSections.includes('faq')}
            onClick={() => toggle('faq')}
            data-attribute="faq"
            style={{
              fontSize: '16px',
              fontWeight: '600',
              letterSpacing: '1.25px',
            }}
          />
          <div
            className={`links ${openSections.includes('faq') ? 'expand-links' : ''}`}
          >
            <Link to="/">Size Chart</Link>
            <Link to="/">Shipping Policy</Link>
            <Link to="/">Terms and Conditions</Link>
          </div>
        </div>

        <div className="policy">
          <div className="faq">
            <span className="span-name">Policy</span>
            <BurgerItemsButton
              name="Policy"
              className="epxand-footer"
              isOpen={openSections.includes('policy')}
              onClick={() => toggle('policy')}
              style={{
                fontSize: '16px',
                fontWeight: '600',
                letterSpacing: '1.25px',
              }}
            />
            <div
              className={`links ${openSections.includes('policy') ? 'expand-links' : ''}`}
            >
              <Link to="/">Privacy and Policy</Link>
              <Link to="/">Shipping Policy</Link>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="faq ">
            <span className="span-name">Contact</span>
            <BurgerItemsButton
              name="Contact"
              className="epxand-footer"
              isOpen={openSections.includes('contact')}
              onClick={() => toggle('contact')}
              style={{
                fontSize: '16px',
                fontWeight: '600',
                letterSpacing: '1.25px',
              }}
            />
            <div
              className={`links ${openSections.includes('contact') ? 'expand-links' : ''}`}
            >
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
              <map key="Map">
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
        </div>

        {/* Mail subscription */}
        <div className="mail-notifications">
          <span className="span-name">Add adventure to your inbox</span>
          <span className="span-name-email-footer">
            Add adventure to your inbox
          </span>
          <div className="email-submit-container">
            <form className="email-submit">
              <input
                id="email-input-submit-footer"
                name="email"
                type="email"
                placeholder="Email address"
              />
              <button type="submit" className="footer-button-submit">
                <IconSendToEmail/>
              </button>
            </form>
          </div>
          
        </div>
      </section>

      {/* Footer bottom */}
      <div className="copyright-footer">
        <span>Copyright policy by nkcell/2026</span>
        <div className="socials-footer">
          <IconFacebook />
          <IconInstagram />
        </div>
      </div>
    </footer>
  );
}

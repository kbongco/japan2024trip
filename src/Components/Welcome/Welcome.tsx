import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import welcomeImage from '../../assets/welcome.jpg'
import './Welcome.scss';

export default function Welcome() {
  return (
    <>
      <div className='chbi-test-container'>
        <div className='chbi-welcome-container'>
          <img className='chbi-welcome-pic' src={welcomeImage} alt="Welcome" />
        </div>
        <div className='chbi-welcome-txt-parent'>
          <div className='chbi-welcome-txt-container'>
            <div className='chbi-welcome-txt'>
              <h1 className='chbi-welcome'>Welcome!</h1>
              <div className='chbi-description-txt'>
                <p className='chbi-description'>
                  This is a mini project I
                  created in React to show the
                  expenditure of my most recent
                  trip to Japan during October/November 2024.
                </p>
                <p className='chbi-description'>
                  If you are interested in seeing the source code
                  or you would like to connect with me via LinkedIn
                  Click on the icons below!
                </p>
              </div>
            </div>
            <div className='chbi-contact-icons-container'>
              <div className='chbi-github-icon-container'>
                <a href='http://github.com/kbongco'>
                  <FontAwesomeIcon icon={faGithubAlt} />
                </a>
              </div>
              <div className='chbi-linkedin-icon-container'>
                <a href='https://www.linkedin.com/in/kathleen-bongco-11843197/'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

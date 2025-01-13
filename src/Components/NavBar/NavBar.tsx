import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function NavBar() {
  return (
    <>
      <div className='chbi-jpn-nav'>
        <p className='chbi-nav-text'>Chibi Japan Viz</p>
        <FontAwesomeIcon icon={faBars} />
        <div className='chbi-nav-text-display'>
        <p className='chbi-nav-text-desktop'>Stats</p>
        <p className='chbi-nav-text-desktop'>Food</p>
        <p className='chbi-nav-text-desktop'>Transport</p>
         </div>
      </div>
    </>
  )
}
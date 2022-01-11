import { ReactComponent as GitIcon} from 'assets/img/Vector.svg';
import './styles.css';

function Navbar() {

  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1><a href="/" className="dsmovie-contact-home">DSMovie</a></h1>
            <a href="https://github.com/Smylle3" className="teimoso" target="_blank" rel="noreferrer">
              <div className="dsmovie-contact-container">
                <GitIcon />
                <p className="dsmovie-contact-link">/Smylle3</p>
              </div>
            </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
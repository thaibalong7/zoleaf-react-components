import { useEffect, useState } from 'react'
import Logo from 'assets/imgs/logo.png';
import AppleWatch from 'assets/imgs/apple-watch.png';
import classNames from 'classnames';

function Header(props: any) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (<header
    id="header"
    className='header'
    style={{
      backgroundImage: `url(/imgs/header-background.jpg)`
    }}>
    <div className={classNames(
      'header__nav__container',
      { 'header__nav--scrolled': scrollPosition > 48 })}>
      <nav className='container navbar navbar-expand-lg navbar-light'>
        <div className='row'>
          <div className='col-4'>
            <a href='#header'>
              <img src={Logo} alt="Logo" className='header__logo-img' />
            </a>
          </div>

          <div className="col-8 collapse navbar-collapse header__nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>

            <button className='btn header__pre-order-btn'>
              PRE-ORDER NOW
            </button>
          </div>
        </div>
      </nav>
    </div>

    <div className='header__banner'>
      <div className='container'>
        <h1>The future of tech is here</h1>
        <p>
          Holisticly incentivize revolutionary collaboration and idea sharing before cost effective users. Actual focused services before highly efficient human capital.
        </p>

        <a className='btn header__banner__playvideo-btn' href='https://vimeo.com/142705963' target="_blank">
          Play{`   `}|{'>'} {`   `}Video
        </a>
        <br />
        <img src={AppleWatch} alt="watch" className='header__banner__watch-img' />
      </div>
    </div>
  </header>
  )
}

Header.propTypes = {}

export default Header

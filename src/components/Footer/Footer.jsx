import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import "./_footer.scss"

const Footer = () => (
  <div className="home-bgImg-container">
    <footer className="horizontal">
      <div className="social-icons">
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGithub} className="fa-2x" />
        </a>
      </div>
      <div className="copyright">&copy; Copyright 2023</div>
    </footer>
  </div>
)

export default Footer


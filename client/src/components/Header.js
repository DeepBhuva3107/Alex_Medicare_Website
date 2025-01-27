import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#ededed', color: '#ffffff', margin: '0' }}>
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand className="fs-6 m-0">
            welcome to Alex Medicare
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            <a href="mailto:info.alexmedicare@example.com" className="d-flex align-items-center text-dark text-decoration-none">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              info.alexmedicare@example.com
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
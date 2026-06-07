import { Container } from 'react-bootstrap';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wizardgames py-4 mt-auto">
      <Container className="text-center">
        <p className="footer-brand mb-1">WizardGames</p>
        <p className="footer-copy mb-0">
          © {year} WizardGames - Tu tienda de videojuegos
        </p>
      </Container>
    </footer>
  );
}

export default Footer;

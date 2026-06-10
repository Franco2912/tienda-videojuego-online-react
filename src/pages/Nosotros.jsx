import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FiShield, FiZap, FiSmile, FiGithub, FiLinkedin } from 'react-icons/fi';

const Nosotros = ({ temaActual }) => {
  // Clases de contraste según el modo claro u oscuro
    const claseTitulo = temaActual === 'light' ? 'text-dark' : 'text-white';
    const claseTexto = temaActual === 'light' ? 'text-secondary' : 'text-white-50';
    const claseTarjeta = temaActual === 'light' ? 'bg-white text-dark border-light-subtle shadow-sm' : 'bg-black text-white border-secondary carousel-info-card';

    const integrantes = [
        {
        nombre: "Franco Gabriel Rojas",
        rol: "Estudiante en Tecnicatura en Programacion - Unahur",
        github: "https://github.com/Franco2912",
        linkedin: "https://www.linkedin.com/in/rojas-franco-054052333/",
        avatar: "public/Integrantes/FrancoRojas.jpg"
        },
        {
        nombre: "Lucía Ramírez",
        rol: "UI/UX Designer",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
        },
        {
        nombre: "Diego Fernández",
        rol: "Backend Developer",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
        },
        {
        nombre: "Natalia Gómez",
        rol: "Frontend Developer",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
        },
        {
        nombre: "Mauro Silva",
        rol: "QA y Testing",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
        }

    ];

    return (
        <Container className="mt-4 pb-5">
        
        {/* 1. SECCIÓN PRINCIPAL: Quiénes Somos */}
        <Row className="mb-5 align-items-center">
            <Col lg={10} className="mx-auto">
            <Badge bg="success" className="text-uppercase font-monospace mb-2 px-2 py-1 fs-6">
                Nuestra Historia
            </Badge>
            <h1 className={`display-4 fw-bold mb-3 ${claseTitulo}`}>
                Quiénes somos en <span className="text-success">NeonGames</span>
            </h1>
            <p className={`lead ${claseTexto}`}>
                Somos un equipo de estudiantes de informática apasionados por la tecnología y el gaming que se unieron con un objetivo claro: redefinir la experiencia de adquirir videojuegos de forma digital.
            </p>
            <p className={claseTexto}>
                Este sitio nace como nuestro proyecto troncal para la materia <strong>Interfaz de Usuario (CIU) en la Universidad Nacional de Hurlingham</strong>. Diseñamos cada vista desde cero enfocándonos en la usabilidad, la velocidad de respuesta y en crear una estética visual atractiva que se adapte perfectamente tanto a pantallas de escritorio como a dispositivos móviles.
            </p>
            </Col>
        </Row>

        {/* 2. SECCIÓN: Pilares de la plataforma */}
        <h3 className={`mb-4 text-uppercase fs-5 border-bottom border-secondary pb-2 ${temaActual === 'light' ? 'text-muted' : 'text-white-50'}`}>
            Nuestros Pilares Informativos
        </h3>
        <Row className="g-4 mb-5">
    
            {/* Pilar 1 */}
            <Col md={4}>
                <Card className={`h-100 p-3 text-center ${claseTarjeta}`}>
                <Card.Body>
                    <div className="text-success mb-3 fs-1"><FiZap /></div>
                    <Card.Title className="fw-bold fs-4">Rendimiento y Carga Asíncrona</Card.Title>
                    <Card.Text className={`small ${claseTexto}`}>
                    Optimizamos la experiencia de usuario mediante renderizado dinámico y manejo eficiente de estados. El procesamiento de compras y la actualización de la biblioteca se ejecutan de forma inmediata y fluida.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            {/* Pilar 2 */}
            <Col md={4}>
                <Card className={`h-100 p-3 text-center ${claseTarjeta}`}>
                <Card.Body>
                    <div className="text-info mb-3 fs-1"><FiShield /></div>
                    <Card.Title className="fw-bold fs-4">Persistencia de Datos</Card.Title>
                    <Card.Text className={`small ${claseTexto}`}>
                    Garantizamos la consistencia de la información implementando almacenamiento local y flujos de datos unidireccionales, protegiendo el estado del carrito y el perfil del usuario ante cualquier ciclo de vida de la app.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

            {/* Pilar 3 */}
            <Col md={4}>
                <Card className={`h-100 p-3 text-center ${claseTarjeta}`}>
                <Card.Body>
                    <div className="text-warning mb-3 fs-1"><FiSmile /></div>
                    <Card.Title className="fw-bold fs-4">Diseño Centrado en el Usuario</Card.Title>
                    <Card.Text className={`small ${claseTexto}`}>
                    Estructurado bajo las heurísticas de Nielsen. Proveemos feedback inmediato en las acciones, consistencia estética global con el feature de modo claro/oscuro y una navegación intuitiva y accesible.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>

    </Row>

        {/* 3. SECCIÓN: El Equipo */}
        <h3 className={`mb-4 text-uppercase fs-5 border-bottom border-secondary pb-2 ${temaActual === 'light' ? 'text-muted' : 'text-white-50'}`}>
            Desarrolladores del Proyecto
        </h3>
        
        <Row className="g-4 justify-content-center">
            {integrantes.map((dev) => (
            <Col key={dev.nombre} xs={12} sm={6} md={4}>
                <Card className={`text-center p-3 h-100 ${claseTarjeta}`}>
                <div className="d-flex justify-content-center mt-2">
                    <img 
                    src={dev.avatar} 
                    alt={dev.nombre} 
                    className="rounded-circle border border-secondary shadow"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                </div>
                <Card.Body className="px-1 pb-1">
                    <Card.Title className="fw-bold mb-1 fs-5">{dev.nombre}</Card.Title>
                    <Card.Text className="text-success small mb-3 font-monospace">
                    {dev.role || dev.rol}
                    </Card.Text>
                    
                    {/* Redes del Desarrollador */}
                    <div className="d-flex justify-content-center gap-3 fs-5">
                    <a href={dev.github} target="_blank" rel="noreferrer" className="text-reset opacity-75 opacity-100-hover">
                        <FiGithub />
                    </a>
                    <a href={dev.linkedin} target="_blank" rel="noreferrer" className="text-reset opacity-75 opacity-100-hover">
                        <FiLinkedin />
                    </a>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>

        </Container>
    );
};

Nosotros.propTypes = {
    temaActual: PropTypes.string.isRequired 
};

export default Nosotros;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <Container className="footer">
            <Row className="footer-titles">
                <Col><h3>HELP</h3></Col>
                <Col><h2>STAY IN THE KNOW</h2></Col>
                <Col><h3>MORE</h3></Col>
            </Row>
            <Row className="footer-options">
                <Col>
                <p>return policy</p>
                <p>start a return</p>
                <p>track order</p>
                <p>track return</p>
                <p>size guides</p>
                <p>bra calculator</p>
                <p>ordering</p>
                <p>shipping</p>
                <p>international</p>
                <p>FAQs</p>
                <p>contact us</p>
                </Col>
                <Col>
                <p>Be the first one to recieve new releases, special offers, and more</p>
                <br />
                <p>Text SKIMS to 68805 to never miss a drop!</p>
                </Col>
                <Col>
                <p>about</p>
                <p>skims rewards (US Only)</p>
                <p>influencers</p>
                <p>stockists</p>
                <p>careers</p>
                <p>e-gift card</p>
                <p>SKIMS TV</p>
                <p>blog</p>
                </Col>
            </Row>
        </Container>
    );
}
export default Footer;
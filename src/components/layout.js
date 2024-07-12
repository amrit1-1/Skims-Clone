import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bestsellers from './bestsellers.jpg';
import spring from './spring.jpg';
import lingerie from './lingerie.jpg';
import joggers from "./joggers.jpg";
import bodysuit from "./bodysuit.jpg";
import zipup from "./zipup.jpg";
import shorts from "./shorts.jpg";
import bras from "./bras.jpg";
import swim from "./swim.jpg";
import tees from "./tees.jpg";
import shapewear from "./shapewear.jpg";

function Layout(props) {
    return (
        <Container className="container">
            <Row>
                <Col>
                <div className="pic-element">
                    <div>
                        <img src={bestsellers} className="main-image"/>
                    </div>
                    <div className="text-on-image">
                        <h3>{props.mainTitle}</h3>
                        <p className="type2">{props.mainMessage}</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                </Col>
            </Row>

            <Row className="row">
                <Col className="col">
                <div className="secondary-pic-element">
                    <div>
                        <img src={spring} className="secondary-images"/>
                    </div>
                    <div className="text-on-image">
                        <h4>THE SPRING SHOP</h4>
                        <p>Refresh for spring with new buttery basics, ultra-soft sweats, and more seasonal SKIMS staples</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                </Col>
                <Col className="col">
                <div className="secondary-pic-element">
                    <div>
                        <img src={lingerie} className="secondary-images"/>
                    </div>
                    <div className='text-on-image'>
                        <h4>LINGERIE</h4>
                        <p>Lacy, lust-worthy lingerie that will have you in the mood for love</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                </Col>
            </Row>

            <h3>JUST IN</h3>

            <Row>
                <Col>
                <div className="item">
                    <div>
                        <img src={zipup}/>
                    </div>
                    <div>
                        COTTON FLEECE ZIP UP HOODIE
                    </div>
                </div>
                </Col>
                <Col>
                <div className="item">
                    <div>
                        <img src={joggers}/>
                    </div>
                    <div>
                        COTTON FLEECE CLASSIC JOGGER
                    </div>
                </div>
                </Col>
                <Col>
                <div className="item">
                    <div>
                        <img src={shorts}/>
                    </div>
                    <div>
                        COTTON FLEECE SHORT
                    </div>
                </div>
                </Col>
                <Col>
                <div className="item">
                    <div>
                        <img src={bodysuit}/>
                    </div>
                    <div>
                        ESSENTIAL OFF THE SHOULDER BODYSUIT
                    </div>
                </div>
                </Col>
            </Row>

            <Row>
                <Col>
                <div className="text-element">
                    <h1>BELIEVE THE HYPE</h1>
                    <h1>OUR COLLECTIONS HAVE OVER 115,000 FIVE STAR REVIEWS, AND COUNTING!</h1>
                </div>
                </Col>
            </Row>

            <Row>
                <Col>
                <div className="item">
                    <div>
                        <img src={tees}/>
                    </div>
                    <div>
                        <p>TEES & TANKS</p>
                    </div>
                </div>
                </Col>
                <Col>
                <div className="item">
                    <div>
                        <img src={bras}/>
                    </div>
                    <div>
                        <p>BRAS</p>
                    </div>
                </div>
                </Col>
                <Col>
                <div className="item">
                    <div>
                        <img src={shapewear}/>
                    </div>
                    <div>
                        <p>SHAPEWEAR</p>
                    </div>
                </div>
                </Col>
                <Col>
                <div className="item">
                    <div>
                        <img src={swim}/>
                    </div>
                    <div>
                        <p>SWIM</p>
                    </div>
                </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="text-element">
                        <h1>SKIMS IS A SOLUTIONS ORIENTED BRAND CREATING THE NEXT GENERATION OF
                        UNDERWEAR, LOUNGEWEAR AND SHAPEWEAR.</h1>
                        <h3>FOR YOU</h3>
                        <br />
                        <br />
                        <a href="https://skims.com/">ORIGINAL WEBSITE</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Layout;
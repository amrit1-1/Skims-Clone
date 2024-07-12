import React from "react";
import logo from "./Skims_Logo.png";
import hButtons from "./header-buttons.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(props) {
    return (
        <div>
            <header className="secondary-header">
                <p>{props.offer}</p>
            </header>

            <header className="main-header">
                <Container>
                    <Row>
                        <Col xs={8}>
                            <img src={logo} alt="SKIMS logo" className="header-logo"/>
                        </Col>
                        <Col>
                            <img src={hButtons} className="header-buttons"/>
                        </Col>
                    </Row>
                </Container>
            </header>

        </div>
    );
}
export default Header;
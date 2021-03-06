import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.less';
import {SectionsContainer, Section} from 'react-fullpage';

class App extends Component {
    render() {
        let options = {
            anchors:              ['Welcome', 'Venue', 'About', 'Message'],
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        false,
            sectionPaddingTop:    '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation:      true
        };

        return (
            <SectionsContainer className="TwoSouls" {...options}>
                <Section className="app-page bg-color-gray">
                    <div className="center-wrapper">
                        <Container>
                            <Row>
                                <Col>Invitation</Col>
                                <Col>Picture</Col>
                            </Row>
                        </Container>
                    </div>
                </Section>
                <Section className="app-page">
                    <div className="center-wrapper">
                        <Container>
                            <Row>
                                <Col>About Venue</Col>
                            </Row>
                            <Row>
                                <Col>Pre Wedding Party</Col>
                                <Col>Wedding Ceremony</Col>
                                <Col>Reception</Col>
                            </Row>
                        </Container>
                    </div>
                </Section>
                <Section className="app-page bg-color-gray">
                    <div className="center-wrapper">
                        <Container>
                            <Row>
                                <Col>About Bride and Groom</Col>
                            </Row>
                            <Row>
                                <Col sm="6">Bride Picture</Col>
                                <Col sm="6">Bride Info</Col>
                                <Col sm="6">Groom Info</Col>
                                <Col sm="6">Groom Picture</Col>
                            </Row>
                        </Container>
                    </div>
                </Section>
                <Section className="app-page">
                    <div className="center-wrapper">
                        <Container>
                            <Row>
                                <Col>Message from Groom's parents</Col>
                            </Row>
                            <Row>
                                <Col sm="6">Groom's Parents Message</Col>
                                <Col sm="6">Groom's Parents Picture</Col>
                            </Row>
                            <Row>
                                <Col>Message from Bride's parents</Col>
                            </Row>
                            <Row>
                                <Col sm="6">Bride's Parents Picture</Col>
                                <Col sm="6">Bride's Parents Message</Col>
                            </Row>
                        </Container>
                    </div>
                </Section>
            </SectionsContainer>
        );
    }
}

export default App;

import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function StoresList() {
    return (
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Browse stores in Chicago</h2>
            <Container style={{ marginTop: "50px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery & Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.marianos.com/content/v2/binary/image/marianos_svg_logo-desktop-1556242659761.svg" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h5 style={{ fontWeight: "bold" }}>Mariano's</h5>
                            <p>Delivery & Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://images.albertsons-media.com/is/content/ABS/JewelOsco_Vert_Oval_RGB" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h5 style={{ fontWeight: "bold" }}>Jewel Osco</h5>
                            <p>Delivery & Pickup</p>
                        </Col>
                    </Row>

                    <Row >
                        <Col xs=".5" >
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="http://fiestamarket.com//wp-content/uploads/2018/10/logo-header.jpg" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "left"}}>
                           <h5 style={{ fontWeight: "bold" }}>Fiesta Market</h5>
                            <p>Coming soon!</p>
                        </Col>
                    </Row>

                </Row>


            </Container>
        </div >
    )
}
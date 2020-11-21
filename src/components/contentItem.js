import { Row, Col, Card } from 'react-bootstrap';
import '../index.css';


const ContentItem = ({item}) => (
    <Row className="ContentItem">
        <Col xs="3"></Col>
        <Col xs="12" sx="6">
            <Card>   
            <Card.Img variant ="top" src={item.image} />     
                <Card.Body>                                
                    <Card.Title>
                        {item.title}
                    </Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>                            
                </Card.Body>             
            </Card>
        </Col>
    </Row>             
)

export default ContentItem;
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card.css"


const ComicCard = ({ data }) => {
    const { image, name, deck, description, api_detail_url, id } = data

    return (
        <Card className="m-3 card-style" style={{ width: '18rem', height: '26rem' }}>
            <Link to={`/cardDetail/${id}`} state={{ path_detail: api_detail_url }} >
                <Card.Img className="pt-3 img-card" variant="top" src={image.medium_url || image} />
            </Link>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {deck}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card >
    );
}

export default ComicCard;
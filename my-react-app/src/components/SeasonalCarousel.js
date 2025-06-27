import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


//taken from react bootstrap carousel example, adjusted to fit donut shop promotional banners
function IndividualIntervalsExample() {
  return (
    <Carousel>

      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="/banner.png"
          alt="First slide"
          style={{ objectFit: 'cover'}}
        />
        <Carousel.Caption style={{ color: 'black' }}>
          <h2>Your sweetest destination for delightful and fresh donuts.</h2>
          <Link to="/donuts">
            <Button variant="outline-secondary" className="mt-2">
                Explore Our Donuts
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/summerbanner.png"
          alt="Second slide"
          style={{ objectFit: 'cover'}}
        />
        <Carousel.Caption>
          <h1>Summer Donuts</h1>
          <h3>Fresh, fruity flavors perfect for the sunny season!</h3>
          <Link to="/category/Summer">
            <Button variant="outline-secondary" className="mt-2">
              Shop Summer Donuts
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/sanriobanner.png"
          alt="Third slide"
          style={{ objectFit: 'cover'}}
        />
        <Carousel.Caption style={{ color: 'black' }}>
          <h1>Sanrio Collection</h1>
          <h3>Adorable donuts inspired by your favorite characters.</h3>
          <Link to="/category/Sanrio">
            <Button variant="outline-secondary" className="mt-2">
                Explore Sanrio Donuts
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/matchabanner.png"
          alt="Fourth slide"
          style={{ objectFit: 'cover'}}
        />
        <Carousel.Caption>
          <h1>Matcha Magic</h1>
          <h3>Rich green tea flavors that’ll win your heart.</h3>
          <Link to="/category/Matcha">
            <Button variant="outline-secondary" className="mt-2">
              Try Matcha Donuts
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;

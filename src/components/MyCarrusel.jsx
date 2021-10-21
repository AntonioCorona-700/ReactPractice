import {Carousel} from "react-bootstrap"

function MyCarousel() {
    return (
        
        <Carousel>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SOCCER_VIBES.jpg/800px-SOCCER_VIBES.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
              <h3>Futbol</h3>
              <p> I love play and watch futbol...
                
                
                
                 </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.gamersrd.com/wp-content/uploads/2019/11/557195-AOEII_definitive_003.jpg"
              alt="Second slide"
            />
      
            <Carousel.Caption>
              <h3>Age of Empires 2</h3>
              <p>I don't play many games, but I really enjoy play AOE...</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Mountain_bike_downhill_05.jpg/800px-Mountain_bike_downhill_05.jpg"
              alt="Third slide"
            />
      
            <Carousel.Caption>
              <h3>Ride Bicycle</h3>
              <p>I like ride bicycle on mountains. Explore new towns...</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.fltcdn.net/contents/3284/original_1475797484381_2276gjeb3xr.jpeg"
              alt="Third slide"
            />
      
            <Carousel.Caption>
              <h3>Beers</h3>
              <p>I like drink differents types of beers...</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel> 

    )
}

export default MyCarousel
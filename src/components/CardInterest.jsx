import {Card} from "react-bootstrap"

export default function MediaCard() {
  return (
    
<div class="row">
    <div class="col-3 mb-2">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SOCCER_VIBES.jpg/800px-SOCCER_VIBES.jpg" width="400" 
     height="300" />
    <Card.Body>
      <Card.Title>Futbol</Card.Title>
      <Card.Text>
      The world's oldest football competition is the FA Cup, which was founded by the footballer and cricketer Charles W. Alcock, and has been contested by English teams since 1872. The first official international football match also took place in 1872, between Scotland and England in Glasgow, again at the instigation of C.W. Alcock. England is also home to the world's first football league, which was founded in Birmingham in 1888 by Aston Villa director William McGregor. The original format contained 12 clubs from the Midlands and Northern England.
        </Card.Text>
      </Card.Body>
  </Card>
    </div>
    <div class="col-3 mb-2">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.gamersrd.com/wp-content/uploads/2019/11/557195-AOEII_definitive_003.jpg" width="400" 
     height="300" />
    <Card.Body>
      <Card.Title>Age of Empires </Card.Title>
      <Card.Text>
      Age of Empires is a series of historical real-time strategy video games, originally developed by Ensemble Studios and published by Xbox Game Studios. The first game was Age of Empires, released in 1997. Eight total games within the series have been released so far (more specifically as of August 2021).
      </Card.Text>
      </Card.Body>
  </Card>
    </div>
    <div class="col-3 mb-2">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Mountain_bike_downhill_05.jpg/800px-Mountain_bike_downhill_05.jpg" width="400" 
     height="300" />
    <Card.Body>
      <Card.Title>Bicycle</Card.Title>
      <Card.Text>
      Vehicles that have two wheels and require balancing by the rider date back to the early 19th century. The first means of transport making use of two wheels arranged consecutively, and thus the archetype of the bicycle, was the German draisine dating back to 1817. The term bicycle was coined in France in the 1860s, and the descriptive title "penny farthing", used to describe an "ordinary bicycle", is a 19th-century term.
      </Card.Text>
      </Card.Body>
  </Card>
    </div>
    <div class="col-3 mb-2">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://i.fltcdn.net/contents/3284/original_1475797484381_2276gjeb3xr.jpeg" width="400" 
     height="300"/>
    <Card.Body>
      <Card.Title>Westvleteren</Card.Title>
      <Card.Text>
      The brewery's three beers have acquired an international reputation for taste and quality; Westvleteren 12 is considered by some to be the best beer in the world. The beers are not brewed to normal commercial demands but are sold in small quantities weekly from the doors of the monastery itself to individual buyers on an advance-order basis.
      </Card.Text>
      </Card.Body>
  </Card>
    </div>
</div>    

    
  );
}
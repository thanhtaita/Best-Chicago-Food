import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="cards">
      <div className="card-each">
        <Card
          name="Lou Malnati's"
          location="1120 N. State St"
          link="https://www.loumalnatis.com/"
          img="https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/lous-pizza.png"
        />
      </div>
      <div className="card-each">
        <Card
          name="AI's Italian Beef"
          location="548 N Wells St Chicago, IL"
          link="https://www.alsbeef.com/"
          img="https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/als-beef.png"
        />
      </div>
      <div className="card-each">
        <Card
          name="Do-Rite Donut"
          location="181 N Morgan St"
          link="http://doritedonuts.com/"
          img="https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/dorite.png"
        />
      </div>
      <div className="card-each">
        <Card
          name="Harold's Chicken Shack"
          location="1501 W Madison St"
          link="http://ww38.haroldschicken88.com/"
          img="https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/harolds.png"
        />
      </div>
      <div className="card-each">
        <Card
          name="Portillo’s"
          location="100 W. Ontario St"
          link="https://www.portillos.com/"
          img="https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/portillos.png"
        />
      </div>
      <div className="card-each">
        <Card
          name="Kuma’s Corner"
          location="852 W Fulton Market"
          link="https://kumascorner.com/"
          img="https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/kumas.png"
        />
      </div>
      <div className="card-each">
        <Card
          name="Papa’s Cache Sabroso"
          location="2517 W Division St"
          link="http://www.papascache.com/"
          img="https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/jibarito.png"
        />
      </div>
      <div className="card-each">
        <Card
          name="The Fudge Pot"
          location="2517 W Division St"
          link="http://thefudgepotchicago.com/"
          img="https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/thefudgepot.png"
        />
      </div>
      <div className="card-each">
        <Card
          name="5411 Empanadas"
          location="2045 W. North Ave"
          link="http://5411empanadas.com/"
          img="https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/empanadas.png"
        />
      </div>
      <div className="card-each">
        <Card
          name="Cemitas Puebla"
          location="3619 W North Ave"
          link="http://www.cemitaspuebla.com/"
          img="https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/cemitas.png"
        />
      </div>
      <div className="card-each">
        <Card
          name="Miko’s Italian Ice"
          location="2236 N Sacramento Ave"
          link="https://www.mikositalianice.com/"
          img="https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/mikos.png"
        />
      </div>
      <div className="card-each">
        <Card
          name="Lao Sze Chuan"
          location="2172 S Archer Ave"
          link="http://laoszechuanusa.com/"
          img="https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/laos.png"
        />
      </div>
    </div>
  );
};

export default Cards;

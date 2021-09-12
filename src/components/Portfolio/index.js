import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/websamples/0.png";


function Portfolio(props) {

    const currentCategory = {
        name: "portfolio",
        description:
          "Screenshoots of the functional developed webpages",
      };


  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div>
      <img
            src={photo}
            alt="Portfolio Samples"
            className="img-thumbnail mx-1"
          />
      </div>

    </section>
  );
}
export default Portfolio;
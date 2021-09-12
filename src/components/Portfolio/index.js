import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Portfolio({ currentCategory }) {
  
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

export default Portfolio;




/// IT'S WORKING WITH SINGLE PICTURE


// import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo from "../../assets/portfolio/0.png";


// function Portfolio(props) {

//     const currentCategory = {
//         name: "portfolio",
//         description:
//           "Screenshoots of the functional developed webpages",
//       };


//   return (
//     <section>
//       <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
//       <p>{currentCategory.name}</p>
//       <div>
//       <img
//             src={photo}
//             alt="Portfolio Samples"
//             className="img-thumbnail mx-1"
//           />
//       </div>

//     </section>
//   );
// }
// export default Portfolio;
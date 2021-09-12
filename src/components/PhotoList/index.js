import React, { useState } from 'react';
// import Modal from '../Modal';

const PhotoList = ({ category }) => {

    const [photos] = useState([
        {
            name: 'echeriri.com',
            category: 'portfolio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'gineerblog',
            category: 'portfolio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'portfolio generator',
            category: 'portfolio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'pizza hunt',
            category: 'portfolio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'taskinator',
            category: 'portfolio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'echeriri.1.0',
            category: 'portfolio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
          <div className="flex-row">
            {currentPhotos.map((image, i) => (
              <img

                src={require(`../../assets/${category}/${i}.png`).default}
                // src={require(`../../assets/${category}/${i}.png`)}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
              />
            ))}
          </div>
        </div>
      );
    };

export default PhotoList;

// import React, { useState } from 'react';
// // import Modal from '../Modal';

// const PhotoList = ({ category }) => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentPhoto, setCurrentPhoto] = useState();

//   const [photos] = useState([
//     {
//                   name: 'echeriri.com',
//                   category: 'portfolio',
//                   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//                 },
//                 {
//                   name: 'gineerblog',
//                   category: 'portfolio',
//                   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//                 },
//                 {
//                   name: 'portfolio generator',
//                   category: 'portfolio',
//                   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//                 },
//                 {
//                   name: 'pizza hunt',
//                   category: 'portfolio',
//                   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//                 },
//                 {
//                   name: 'taskinator',
//                   category: 'portfolio',
//                   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//                 },
//                 {
//                     name: 'echeriri.1.0',
//                     category: 'portfolio',
//                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//                 },
//   ]);

//   const currentPhotos = photos.filter((photo) => photo.category === category);

// //   const toggleModal = (image, i) => {
// //     setCurrentPhoto({ ...image, index: i });
// //     setIsModalOpen(!isModalOpen);
// //   };

//   return (
//     <div>
//       {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
//       <div className="flex-row">
//         {currentPhotos.map((image, i) => (
//           <img

//             src={require(`../../assets/websamples${category}/${i}.jpg`)}
//             // src/assets/small/commercial/0.jpg    // ${category}
//             alt={image.name}
//             className="img-thumbnail mx-1"
//             onClick={() => toggleModal(image, i)}
//             key={image.name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotoList;



// // import React, { useState } from 'react';
// // import Portfolio from '../../components/Portfolio';

// // import photo from '../../assets/websamples/0.png';


// // function PhotoList() {

// //     const [photos] = useState([
// //         {
// //           name: 'echeriri.com',
// //           category: 'portfolio',
// //           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
// //         },
// //         {
// //           name: 'gineerblog',
// //           category: 'portfolio',
// //           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
// //         },
// //         {
// //           name: 'portfolio generator',
// //           category: 'portfolio',
// //           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
// //         },
// //         {
// //           name: 'pizza hunt',
// //           category: 'portfolio',
// //           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
// //         },
// //         {
// //           name: 'taskinator',
// //           category: 'portfolio',
// //           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
// //         },
// //         {
// //             name: 'echeriri.1.0',
// //             category: 'portfolio',
// //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
// //         },
// //     ]);

// //     return (
// //         <div>
// //           <div className="flex-row">
// //             {photos.map((image, i) => (
// //               <img
// //                 src={require(`../../assets/${category}/${i}.jpg`)}
// //                 alt={image.name}
// //                 className="img-thumbnail mx-1"
// //                 key={image.name}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       );
// //     }
// // export default PhotoList;
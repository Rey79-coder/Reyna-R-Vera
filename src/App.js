import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from "./components/Portfolio";



function App() {
    const [categories] = useState([
        {
            name: "portfolio",
            description:
                "Screenshoots of the functional developed webpages",
        },
        {
            name: "resume",
            description: "Click on the image to download resume for more details about me"
        },
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
      <div>
        <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
        ></Nav>
        <main>
          <Portfolio></Portfolio>
          <About></About>
        </main>
      </div>
    );
  }

export default App;
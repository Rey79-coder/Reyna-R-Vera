import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import ContactForm from './components/Contact';
import Resume from './components/Resume';


// import PhotoList from "./components/PhotoList";



function App() {
    const [categories] = useState([
        {
            name: "portfolio",
            description:
                "Screenshoots of the functional developed webpages",
        },
        {
            name: "resume",
            description: "Click on the image to download resume for more details about me",
        },
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    const [contactSelected, setContactSelected] = useState(false);

    return (
        <div>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
            <main>
                {!contactSelected ? (
                    <>
                        <About></About>
                        <Portfolio currentCategory={currentCategory}></Portfolio>
                        <Resume></Resume>

                    </>
                ) : (
                    <ContactForm></ContactForm>
                )}
                <footer class="myFooter">

                        <p class="myName">- 2021 Reyna Ramirez Vera -</p>

                </footer>


            </main>

        </div>
    );
}

export default App;
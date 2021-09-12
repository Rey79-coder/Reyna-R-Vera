import React from 'react';

function categorySelected(name) {
    console.log(`${name} clicked`)
  }

function Nav() {

    const categories = [
        {
            name: "portfolio",
            description:
                "Screenshoots of the functional developed webpages",
        },
        {
            name: "resume",
            description: "Click on the image to download resume for more details about me"
        },
    ];


    return (
        <header>

            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="cool">😎</span> Reyna R Vera
                </a>
            </h2>

            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>



                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                            <span onClick={categorySelected} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>


            </nav>
        </header>
    );
}

export default Nav;
import { useState } from 'react';

import './App.css';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(prev => !prev)
  }

  const contents = [
    {
      h1: "Discover innovative ways to decorate",
      p: "We provide unmatched quality, comfort,and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },

    {
      h1: "We are available all across the globe",
      p: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions Don't hesitate to contact us today."
    },

    {
      h1: "Manufactured with the best materials",
      p: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
  ]

  const [num, setNum] = useState(0)

  const handleSlider = (direction) => {
    if (direction === 'right') {
      setNum(num => num>=2 ? 0 : num+1)
    }
    if (direction === 'left') {
      setNum(num => num<=0 ? 2 : num-1)
    }
  }
  return (
    <div className="container">
      <section className="top">
        <div className='main-img'>
          <header className={`slider${num}`}>
            <nav className={toggleMenu ? 'active-nav' : ''}>
                <img src="./images/icon-hamburger.svg" alt="" className='menu' onClick={handleToggleMenu}/>
                <img src="./images/icon-close.svg" alt="" className='close' onClick={handleToggleMenu}/>
                <img src="./images/logo.svg" alt="" />
              <ul>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            </nav>
          </header>
        </div>
        <div className='img-description'>
          <h1>{contents[num].h1}</h1>
          <p>
            {contents[num].p}
          </p>
          <div className='action'>
            <h3>Shop Now</h3>
            <img src="./images/icon-arrow.svg" alt="" />
          </div>
          <div className="buttons">
            <div className='button left' onClick={() => handleSlider('left')}>
              <img src="./images/icon-angle-left.svg" alt="" />
            </div>
            <div className='button right' onClick={() => handleSlider('right')}>
              <img src="./images/icon-angle-right.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='bottom'>
        <div className='sub-img'>
          <img src="./images/image-about-dark.jpg" alt="" />
        </div>
        <div className='about'>
          <h1>About Our Furniture</h1>
          <p>
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>
        <div className='sub-img-2'>
          <img src="./images/image-about-light.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}

export default App;

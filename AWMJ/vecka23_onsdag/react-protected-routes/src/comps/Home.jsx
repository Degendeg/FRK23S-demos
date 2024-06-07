import React from 'react';

/**
 * Home component represents the home page of the application.
 * It displays an image and provides a button to highlight it.
 * @returns JSX element
 */
const Home = () => {

  /**
   * Highlight function adds a glow effect to the SVG element for 2 seconds.
   */
  const highlight = () => {
    const svgElement = document.getElementById('svg');
    svgElement.parentElement.classList.add('animate-bounce');
    setTimeout(() => { svgElement.parentElement.classList.remove('animate-bounce') }, 3000);
  }

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src="https://www.liltulips.com/cdn/shop/products/wooden-doll-house-outdoor-furniture-accessories-8-pcs-coco-village-lil-tulips-30057843556470.jpg?v=1667153309&width=200" alt="House" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">This is home.</h2>
        <p>Not your home, my home.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral" onClick={highlight}>
            Use {/* Button text */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;
import React from 'react';
import missionImage from '../resources/image1.jpeg'; 
import paintersImage from '../resources/paintersImage.jpeg'; 

const About = () => {
  return (
    <div className="bg-yellow-100 about-page py-16 px-8 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-rose-900 font-yeseva">About the Painters</h1>

      <div className="flex flex-col md:flex-row mb-16 items-center justify-center">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={missionImage}
            alt="Mission"
            className="w-3/4 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left px-4">
          <h2 className="text-4xl font-bold mb-4 text-rose-900 font-yeseva">Mission</h2>
          <p className="text-2xl text-rose-900 font-yeseva">
            Our artists strive to create timeless, captivating artwork that resonates with viewers. 
            The mission is to convey emotions, stories, and beauty through every brushstroke, while 
            fostering a deep connection with art lovers across the globe.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={paintersImage}
            alt="Meet the Painters"
            className="w-3/4 h-80 object-cover rounded-lg shadow-lg" 
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pr-12 text-center md:text-left px-4">
          <h2 className="text-4xl font-bold mb-4 text-rose-900 font-yeseva">Meet the Painters</h2>
          <p className="text-2xl text-rose-900 font-yeseva">
            Behind each masterpiece is a team of talented artists who pour their hearts into every 
            creation. Meet Amita Verma and Swarnima Mathur, best friends with a shared passion for 
            bringing art to life. They have dedicated their lives to perfecting their craft and 
            sharing their love for art with the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

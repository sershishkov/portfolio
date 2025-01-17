import React from 'react';
import { Link } from 'react-router-dom';
import Calculator from '../img/Calculator.jpg';
import imgBurger from '../img/burger_sandwich.png';
import imgHome from '../img/home_for_scss_grid.jpeg';
// import remontOsbb from '../img/remont_7.jpg';
import '../style/main.scss';

const Main = () => {
  return (
    <div className='main'>
      <div className='container'>
        <div className='description'>
          <h1>Hello dear guest!</h1>
          <p> Many in this life are in search of work, which will delight.</p>
          <p>
            {' '}
            I completed the FRONT END courses, but that knowledge only gives an
            understanding of where to go, I studied further on books and UDEMY
            courses. Independently taught courses REACT,NextJS, Redux,Redux
            Toolkit, javaScript,TypeScript, NODE.js MongoDB, Git, Material UI,
            Bootsrap{' '}
          </p>
          <p>
            At the moment I am looking for a job FRONT END, FULLSTACK, BACKEND
          </p>
        </div>
        <h4>
          <Link to='/about' className='text-info my-nav'>
            {' '}
            My CV{' '}
          </Link>
        </h4>
      </div>
      <h2>My portfolio:</h2>
      <div className='container'>
        <div className='row'>
          <div className='card  col-sm-12'>
            <a
              href='https://calc-calc-henna.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={Calculator} alt='calc' className='card-img-top' />
              <div className='card-body'>
                <p className='card-text'>
                  "Speed calculation" REACT, React HOOKS, NextJS,Material-UI,
                  TypeScript, NODE.js, Git, Vercel,
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className='row'>
          <div className='card col-lg-6 col-md-6 col-sm-12'>
            <a
              href='https://sh-burger.firebaseapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={imgBurger} alt='Burger' className='card-img-top' />

              <div className='card-body'>
                <p className='card-text'>
                  "Burger" REACT, Redux, javaScript, NODE.js, Firebase, Git,
                </p>
              </div>
            </a>
          </div>

          <div className='card col-lg-6 col-md-6 col-sm-12'>
            <a
              href='https://sershishkov.github.io/sh_scss_in_react/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={imgHome} alt='SCSS GRID' className='card-img-top' />

              <div className='card-body'>
                <p className='card-text'>"Travelling" REACT SCSS GRID</p>
              </div>
            </a>
          </div>
        </div>
        {/* <div className='row'>
          <div className='card  col-sm-12'>
            <a
              href='https://remont-osbb-nextjs13.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={remontOsbb} alt='calc' className='card-img-top' />
              <div className='card-body'>
                <p className='card-text'>
                  "Remont osbb" NEXTJS 13, MongoDb, Material-UI, TypeScript,
                  NODE.js, Git, Vercel,
                </p>
              </div>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Main;

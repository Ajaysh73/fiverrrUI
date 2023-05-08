import React from 'react';
import './Gig.scss';
import { Slider } from 'infinite-react-carousel/lib';

const Gig = () => {
  return (
    <div className='gig'>
      <div className='container'>
        <div className='left'>
          <span className='breadcrumbs'>
            Fiverr {'>'} Graphics & Design {'>'}
          </span>
          <h1>I will create ai generated art for you</h1>
          <div className='user'>
            <img
              className='pp'
              src='/img/user.jpg'
              alt=''
            />
            <span>John Doe</span>
            <div className='stars'>
              <img
                src='/img/star.png'
                alt=''
              />
              <img
                src='/img/star.png'
                alt=''
              />
              <img
                src='/img/star.png'
                alt=''
              />
              <span>3</span>
            </div>
          </div>
          <Slider
            slidesToShow={1}
            arrowsScroll={1}
            className='slider'>
            <img
              src='/img/a1.jpg'
              alt=''
            />
            <img
              src='/img/a2.jpg'
              alt=''
            />
            <img
              src='/img/a3.jpg'
              alt=''
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            recusandae ea placeat fuga velit nostrum, repellendus, similique
            culpa iure vero ducimus accusantium ipsa earum deserunt laboriosam
            omnis provident dicta expedita! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatem recusandae ea placeat fuga
            velit nostrum, repellendus, similique culpa iure vero ducimus
            accusantium ipsa earum deserunt laboriosam omnis provident dicta
            expedita!
          </p>
          <div className='seller'>
            <h2>About the seller</h2>
            <div className='user'>
              <img
                src='/img/user.jpg'
                alt=''
              />
              <div className='info'>
                <span>John Doe</span>
                <div className='stars'>
                  <img
                    src='/img/star.png'
                    alt=''
                  />
                  <img
                    src='/img/star.png'
                    alt=''
                  />
                  <img
                    src='/img/star.png'
                    alt=''
                  />
                  <span>3</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className='box'>
              <div className='items'>
                <div className='item'>
                  <span className='title'>From</span>
                  <span className='desc'>USA</span>
                </div>
                <div className='item'>
                  <span className='title'>Member since</span>
                  <span className='desc'>Aug 2022</span>
                </div>
                <div className='item'>
                  <span className='title'>Avg. response time</span>
                  <span className='desc'>4 hours</span>
                </div>
                <div className='item'>
                  <span className='title'>Last delivery</span>
                  <span className='desc'>1 day</span>
                </div>
                <div className='item'>
                  <span className='title'>Languages</span>
                  <span className='desc'>English</span>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate eius dolor labore, delectus facilis fugiat
                dignissimos. Assumenda quisquam nobis rerum vero distinctio
                veritatis rem. Commodi, repellat. Maxime aliquam illo facilis.
              </p>
            </div>
          </div>
          <div className='reviews'>
            <h2>Reviews</h2>
            <div className='item'>
              <div className='user'>
                <img
                  className='pp'
                  src='/img/user.jpg'
                  alt=''
                />
                <div className='info'>
                  <span>John Doe</span>
                  <div className='country'>
                    <img
                      src='/img/USflag.jpg'
                      alt=''
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className='stars'>
                <img
                  src='/img/star.png'
                  alt=''
                />
                <img
                  src='/img/star.png'
                  alt=''
                />
                <img
                  src='/img/star.png'
                  alt=''
                />
                <span>3</span>
              </div>
            </div>
          </div>
        </div>
        <div className='right'></div>
      </div>
    </div>
  );
};

export default Gig;

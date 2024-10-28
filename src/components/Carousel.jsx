
import React from 'react';
import styles from './Carousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import amazon from '../images/amazon.webp';
import bakery from '../images/bakery.jpg';
import tictactoe from '../images/tictactoe.jpg';
import calculator from '../images/calculator.jpg';
import rockpaperscissor from '../images/rockpaperscissor.jpg';

const Carousel = () => {
  const clients = [
    {
      img: amazon,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati repellat corrupti placeat eum corporis labore saepe sit suscipit exercitationem voluptatum recusandae, pariatur id ratione at expedita facere eligendi esse. Laudantium quas est quasi ea sapiente.",
      link : "https://student-shivamsharma.github.io/AMAZON-CLONE/",
      name : "Amazon Clone"
    },
    {
      img: calculator,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati repellat corrupti placeat eum corporis labore saepe sit suscipit exercitationem voluptatum recusandae, pariatur id ratione at expedita facere eligendi esse. Laudantium quas est quasi ea sapiente.",
      link : "https://student-shivamsharma.github.io/Calculator/",
      name : "Calculator"
    },
    {
      img: rockpaperscissor,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati repellat corrupti placeat eum corporis labore saepe sit suscipit exercitationem voluptatum recusandae, pariatur id ratione at expedita facere eligendi esse. Laudantium quas est quasi ea sapiente.",
      link : "https://student-shivamsharma.github.io/rockGame/",
      name : "ROCK PAPER SCISSOR"
    },
    {
      img: tictactoe,
      review: "Lorem ipsum dolor sit amet consectetur aceat eum corporis labore saepe sit suscipit exercitaantium quas est quasi ea sapiente.",
      link : "https://student-shivamsharma.github.io/TICtactoe/",
      name : "TIC_TAC_TOE GAME"
    },
    {
      img: bakery,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati repellat corrupti placeat eum corporis labore saepe sit suscipit exercitationem voluptatum recusandae, pariatur id ratione at expedita facere eligendi esse. Laudantium quas est quasi ea sapiente.",
      link : "https://student-shivamsharma.github.io/Second-Task/",
      name : "Login Page"
    },
  ];

  return (
    <div className={styles.wrapper} style={{width : '100vw' , overflow : 'hidden'}} id="Carousel">
      <div className={styles.heading}>
        <span>My Projects Web Dev</span>
        <span>Exceptional Work </span>
        <span> From me..</span>
        </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={{width : '80vw' , height : '60vh'}}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className={styles.test} style={{ "width" : "40vw" , height : '40vh'}}>
              <img src={client.img} height = "200px" alt={`Client ${index + 1}`} />
              <span>{client.review}</span>
              <a href={client.link} className={styles.link}>{client.name}</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export default Carousel;

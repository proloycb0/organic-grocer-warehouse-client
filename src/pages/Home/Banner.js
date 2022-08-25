import React from 'react';
import Slider from 'react-slick';

const Banner = () => {
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#00d084", marginLeft:"1opx" }}
            onClick={onClick}
          />
        );
      }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#00d084", marginRight: "25px" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <Slider {...settings}>
            <div>
                <img src={`https://i.ibb.co/DWtmLq8/slider1.webp`} alt="" className='w-screen bg-cover'/>
            </div>
            <div>
                <img src={`https://i.ibb.co/WWwkwK5/slider2.webp`} alt="" className='w-screen bg-cover'/>
            </div>
        </Slider>
    );
};

export default Banner;
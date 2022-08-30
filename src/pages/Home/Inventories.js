import React from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import Inventory from './Inventory';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Inventories = () => {
    const { data: inventories, isLoading } = useQuery('inventories', () => fetch('https://agile-bastion-22481.herokuapp.com/inventory')
        .then(res => res.json())
    );

    const navigate = useNavigate();

    if (isLoading) {
        return <Loading />
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#00d084", marginLeft: "1opx" }}
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
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='mt-3 mb-8'>
            <h4 className='text-3xl text-center font-bold mb-8 mt-16'>Our Fruits & Vegetable</h4>
            <div className='grid grid-cols-1' >
                <Slider {...settings}>
                    {
                        inventories?.slice(0, 6).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        />)
                    }
                </Slider>
            </div>
            <p className='text-end mt-8'><button onClick={() => navigate('/manage')} className="btn btn-accent text-white">Manage Inventories</button></p>
        </div>
    );
};

export default Inventories;
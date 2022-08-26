import React from 'react';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Blog from './Blog';

const Blogs = () => {
    const { data: blogs, isLoading } = useQuery('blogs', () => fetch('http://localhost:5000/blogs')
        .then(res => res.json())
    );

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
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
            <h4 className='text-3xl text-center font-bold mb-8 mt-16'>Latest Blogs</h4>
            <div className='grid grid-cols-1'>
                <Slider {...settings}>
                    {
                        blogs?.map(blog => <Blog
                            key={blog._id}
                            blog={blog}
                        />)
                    }
                </Slider>
            </div>

        </div>
    );
};

export default Blogs;
import React, {useEffect} from 'react';
import {getSliderRequest} from "../store/actions/slider";
import {useDispatch, useSelector} from "react-redux";
import Carousel from 'nuka-carousel';

function Slider() {
    const dispatch = useDispatch();
    const slider = useSelector(state => state.slides.slides);

    useEffect(() => {
        dispatch(getSliderRequest())
    }, []);

    return (
        <section className='slider'>
            <div className='container'>
                <Carousel
                    defaultControlsConfig={{
                        pagingDotsStyle: {
                            display: 'none'
                        }
                    }}
                    slidesToShow={1}
                    autoplay={true}
                    autoplayInterval={4000}
                    autoplayReverse={true}
                    dragging={true}
                    pauseOnHover={false}
                    swiping={true}
                    renderCenterLeftControls={({previousDisabled, previousSlide}) => (
                        <button className='left__arow' onClick={previousSlide} disabled={previousDisabled}>
                            <i className="ri-arrow-left-circle-line"></i>
                        </button>
                    )}
                    renderCenterRightControls={({nextDisabled, nextSlide}) => (
                        <button className='right__arow' onClick={nextSlide} disabled={nextDisabled}>
                            <i className="ri-arrow-right-circle-line"></i>
                        </button>
                    )}
                >
                    {slider.map((item) => (
                        <div className='slider__wrapper' key={item.id}>
                            <div className='slider__img'>
                                <img src={`http://localhost:4000/${item.imagePath}`} alt='slider'/>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default Slider;

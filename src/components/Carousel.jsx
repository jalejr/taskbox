import React, {useState} from "react";

export default function Carousel({slides}) {
    const [currSlide, setCurrSlide] = useState(0);
    const maxSlides = slides.length;

    const nextSlide = function () {
        if (currSlide === maxSlides - 1) {
            setCurrSlide(0);
        } else {
            setCurrSlide(currSlide + 1);
        }
    }

    const prevSlide = function() {
        if(currSlide === 0) {
            setCurrSlide(maxSlides - 1);
        } else {
            setCurrSlide(currSlide - 1);
        }
    }

    return (<div className="slider">
        {slides && slides.map((image, index) => {
            return <div className={"slide"} style={{transform: `translateX(${100 * (index - currSlide)}%)`}}>
                <img src={image} alt={`Photo-${index + 1}`}/>
            </div>
        })}

        <button onClick={prevSlide} className="slider__btn slider__btn--left">&larr;</button>
        <button onClick={nextSlide} className="slider__btn slider__btn--right">&rarr;</button>
        <div className="dots">{slides && slides.map((_, i) => {
            return <button className={`dots__dot ${i === currSlide && "dots__dot--active"}`} data-slide={i}></button>
        })}</div>
    </div>)
}
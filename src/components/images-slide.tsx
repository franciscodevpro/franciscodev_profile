import { useState, useEffect } from 'react'

export interface ImagesSlideProps {
    images: JSX.Element[]
}

export const ImagesSlide = ({ images }: ImagesSlideProps) => {
    const [slidesPosition, setSlidesPosition] = useState(0);

    const nextSlide = () => {
        if(slidesPosition + 1 >= images.length) return setSlidesPosition(0);

        setSlidesPosition(prev => prev + 1);
    };

    useEffect(() => {
        setTimeout(() => {nextSlide()}, 5000);
    }, [slidesPosition]);

    return (
        <div>{
            images.map( (elm, key) => {return <div key={key} className={"transition-all duration-200 " + (slidesPosition != key? "w-0 h-0" : "w-auto h-56")}>{elm}</div>})
        }</div>
    )
}
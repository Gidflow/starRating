import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import "./Stars.css";

const StarRating = ({ numberOfStars }) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getIndex) => {
        setRating(getIndex);


    }

    const mouseFill = (getIndex) => {

        setHover(getIndex)
    }

    const mouseLeave = () => {
        setHover(rating)

    }

    console.log(`${rating} that's rating`);
    console.log(`${hover} that's hover`);
    return (
        <div className='container'>
            {
                [...Array(numberOfStars)].map((_, index) => {
                    index += 1;
                    return <FaStar key={index} className={index <= (hover || rating) ? "active" : "inactive"}
                        size={40}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => mouseFill(index)}
                        onMouseLeave={() => mouseLeave()}
                    />

                }

                )
            }
        </div>
    )
}

export default StarRating
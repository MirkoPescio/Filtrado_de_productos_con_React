import React from 'react'
import { BsFillBagHeartFill } from 'react-icons/bs';

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className='card-container__card'>
      <img src={img}
        className='card-container__card__img' alt={title} />
      <div className='card-container__card__details'>
        <h3 className='card-container__card__details__card-title'>{title}</h3>
        <section className='card-container__card__details__card-reviews'>
          {star} {star} {star} {star}
        <span className='card-container__card__details__card-reviews__total-reviews'>{reviews}</span>
        </section>
        <section className='card-container__card__details__card-price'>
          <div className='card-container__card__details__card-price__price'>
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className='card-container__card__details__card-price__bag'>
            <BsFillBagHeartFill className='bag-icon' />
          </div>
        </section>
      </div>
    </section>
  )
}

export default Card;

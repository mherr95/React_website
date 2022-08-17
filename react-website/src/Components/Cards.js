import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src='images/img-9.jpeg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/sercvices' />
                     <CardItem 
                    src='images/img-2.jpeg'
                    text='Travel through the Isalnds of Bali in a Private Cruise'
                    label='Luxury'
                    path='/sercvices' />
                     <CardItem 
                    src='images/img-3.jpeg'
                    text='Set Sail in the Altantic Ocean visiting Uncharted Waters'
                    label='Mystery'
                    path='/sercvices' />
                     <CardItem 
                    src='images/img-4.jpeg'
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Sports'
                    path='/products' />
                     <CardItem 
                    src='images/img-8.jpeg'
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Adrenaline'
                    path='/sign-up' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;
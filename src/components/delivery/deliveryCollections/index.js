import React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './deliveryCollections.css';
import DeliveryItem from './deliveryitem';

const deliveryItems = [
    {
        id: 1,
        title: "Biryani",
        cover: "https://b.zmtcdn.com/data/dish_images/2a24c5264606bd78622267d28a3726821634805216.png"
    },
    {
        id: 2,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id: 3,
        title: "Chat",
        cover: "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
    },
    {
        id: 4,
        title: "Paneer",
        cover: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png"
    },
    {
        id: 5,
        title: "Chicken",
        cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id: 6,
        title: "Burger",
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id: 7,
        title: "Rolls",
        cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id: 8,
        title: "Khichadi",
        cover: "https://b.zmtcdn.com/data/o2_assets/2122e9de1fd26063893a1afa0dca748b1632716603.png"
    },
    {
        id: 9,
        title: "Noodles",
        cover: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
    },
    {
        id: 10,
        title: "Fries",
        cover: "https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png"
    },
    {
        id: 11,
        title: "Dal",
        cover: "https://b.zmtcdn.com/data/o2_assets/c5f679b7ce4d7cf0b08f120e77d22e2d1632716660.png"
    },
    {
        id: 12,
        title: "Thali",
        cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },



];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

const DeliveryCollections = () => {
    return (
        <div className="delivery-collections">
            <div className="max-width">
              <div className="collection-title">Eat what makes you happy</div>
              <Slider {...settings}>
              {deliveryItems.map((item)=>{
                  return (
                   <DeliveryItem item={item}/>
                  );
              })}
              </Slider>
            </div>
        </div>
    );
};

export default DeliveryCollections;

import React from 'react';
import CardCarousel from './CardCarousel';
import carouselInfo from './carouselData.example.json';

const Component = {
  title: 'Card Carousel',
  component: CardCarousel,
};

const Template = () => <CardCarousel carouselInfo={carouselInfo} />;

export const Default = Template.bind({});
export default Component;

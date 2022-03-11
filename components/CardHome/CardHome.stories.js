import React from 'react';
import CardHome from './CardHome';
import cardHomeInfo from './cardHomeData.example.json';

const Component = {
  title: 'Card Home',
  component: CardHome,
};

const style = {
  width: '33%',
};

const Template = () => (
  <div style={style}>
    <CardHome {...cardHomeInfo} />
  </div>
);

export const Default = Template.bind({});
export default Component;

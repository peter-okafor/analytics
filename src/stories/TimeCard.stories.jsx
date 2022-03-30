import React from 'react';
import { TimeCard } from '../components/primary';

export default {
  title: 'Analytics/TimeCard',
  component: TimeCard
};

const Template = (args) => <TimeCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  title: 'Average Response Time',
  value: '30 Mins'
};
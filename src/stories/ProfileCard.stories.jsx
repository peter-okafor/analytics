import React from 'react';
import { ProfileCard } from '../components/secondary';

export default {
  title: 'Analytics/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ProfileCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  companyName: 'Metacare',
  userMail: 'adeyinka@metacare.app'
}
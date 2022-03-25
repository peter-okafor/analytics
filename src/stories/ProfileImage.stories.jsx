import React from 'react';
import { ProfileImage } from '../components/primary';

export default {
  title: 'Analytics/ProfileImage',
  component: ProfileImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ProfileImage {...args} />;

export const Primary = Template.bind({});

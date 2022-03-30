import React from 'react';
import { ProfileImage } from '../components/primary';

export default {
  title: 'Analytics/ProfileImage',
  component: ProfileImage
};

const Template = (args) => <ProfileImage {...args} />;

export const Primary = Template.bind({});

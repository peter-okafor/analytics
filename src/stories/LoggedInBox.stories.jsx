import React from 'react';
import { LoggedInBox } from '../components/composite';

export default {
  title: 'Analytics/LoggedInBox',
  component: LoggedInBox
};

const Template = (args) => <LoggedInBox {...args} />;

export const Box = Template.bind({});
Box.args = {
  numberOfNotifications: 5
};
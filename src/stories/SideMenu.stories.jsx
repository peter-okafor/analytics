import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { SideMenu } from '../components/composite';

export default {
  title: 'Analytics/SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <SideMenu {...args} />;

export const Page = Template.bind({});

// export const LoggedIn = Template.bind({});
// LoggedIn.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole('button', { name: /Log in/i });
//   await userEvent.click(loginButton);
// };

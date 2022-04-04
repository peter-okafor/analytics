import React from 'react';
import { FilterSection } from '../sections';

export default {
  title: 'Analytics/FilterSection',
  component: FilterSection,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <FilterSection {...args} />;

export const Section = Template.bind({});
Section.args = {
  title: "Efficiency Analytics"
};
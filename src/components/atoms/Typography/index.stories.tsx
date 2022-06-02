import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";


import Typography from ".";


const TypographyComponent = {
  title: "TypographyComponent",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Header = Template.bind({});
Header.args = {
  children: "Header",
  variant: "header",
};

export const Title = Template.bind({});
Title.args = {
  children: "Title",
  variant: "title",
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  children: "Subtitle",
  variant: "subtitle",
};

export const Body = Template.bind({});
Body.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  variant: "body1",
};

export const Caption = Template.bind({});
Caption.args = {
  children:
    "Lorem.",
  variant: "caption",
};


export default TypographyComponent;

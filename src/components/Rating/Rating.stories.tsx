import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating} from "./Rating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const RatingChanging = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RatingChanging.args = {
    rate:0,
    setRate:()=>{}
};

export const EmptyRating = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyRating.args = {
    rate:0,
    setRate:()=>{}
};

export const Rating1 = Template.bind({});
Rating1.args = {
    rate:1,
    setRate:()=>{}
};

export const Rating2 = Template.bind({});
Rating2.args = {
    rate:2,
    setRate:()=>{}
};

export const Rating3 = Template.bind({});
Rating3.args = {
    rate:3,
    setRate:()=>{}
};
export const Rating4 = Template.bind({});
Rating4.args = {
    rate:4,
    setRate:()=>{}
};
export const Rating5 = Template.bind({});
Rating5.args = {
    rate:5,
    setRate:()=>{}
};
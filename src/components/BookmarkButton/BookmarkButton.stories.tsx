import { Meta, StoryObj } from "@storybook/react";
import BookmarkButton from "./index";
import React from "react";

const meta: Meta<typeof BookmarkButton> = {
    title: "BookmarkButton",
    component: BookmarkButton,
};

export default meta;

type Story = StoryObj<typeof BookmarkButton>;

export const Default: Story = {
    name: "Default",
    render: (args) => <BookmarkButton {...args}>Button</BookmarkButton>,
};


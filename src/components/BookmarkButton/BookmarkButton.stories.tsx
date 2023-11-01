import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import BookmarkButton from "./index";

const meta: Meta<typeof Button> = {
    title: "BookmarkButton",
    component: BookmarkButton,
};

export default meta;

type Story = StoryObj<typeof BookmarkButton>;

export const Default: Story = {
    name: "Default",
    render: (args) => <BookmarkButton {...args} />,
};

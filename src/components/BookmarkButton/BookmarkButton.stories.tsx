import { Meta, StoryObj } from "@storybook/react";
import BookmarkButton from "./index";

const meta: Meta<typeof BookmarkButton> = {
    title: "BookmarkButton",
    component: BookmarkButton,
};

export default meta;

type Story = StoryObj<typeof BookmarkButton>;

export const Default: Story = {
    name: "Default",
    render: (args) => <BookmarkButton {...args} />,
};

import { Meta, StoryObj } from "@storybook/react";
import Typography from "./index";

const meta: Meta<typeof Typography> = {
    title: "Typography",
    component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
    name: "Default",
    render: (args) => <Typography {...args}>Button</Typography>,
};

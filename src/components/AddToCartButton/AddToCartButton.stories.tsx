import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import AddToCartButton from "./index";

const meta: Meta<typeof Button> = {
    title: "AddToCartButton",
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    name: "Default",
    render: (args) => <AddToCartButton />,
};

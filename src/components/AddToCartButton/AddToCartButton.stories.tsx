import { Meta, StoryObj } from "@storybook/react";
import AddToCartButton from "./index";

const meta: Meta<typeof AddToCartButton> = {
    title: "AddToCartButton",
    component: AddToCartButton,
};

export default meta;

type Story = StoryObj<typeof AddToCartButton>;

export const Default: Story = {
    name: "Default",
    render: (args) => <AddToCartButton {...args}/>,
};

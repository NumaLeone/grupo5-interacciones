import { Meta, StoryObj } from "@storybook/react";
import CartItemContainer from "./index";

const meta: Meta<typeof CartItemContainer> = {
  title: "CartItemContainer",
  component: CartItemContainer,
};

export default meta;

type Story = StoryObj<typeof CartItemContainer>;

export const Default: Story = {
  name: "Default",
  render: (args) => <CartItemContainer {...args}></CartItemContainer>,
};

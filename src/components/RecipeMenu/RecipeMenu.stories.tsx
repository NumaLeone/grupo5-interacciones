import { Meta, StoryObj } from "@storybook/react";
import RecipeMenu from "./index";

const meta: Meta<typeof RecipeMenu> = {
  title: "RecipeMenu",
  component: RecipeMenu,
};

export default meta;

type Story = StoryObj<typeof RecipeMenu>;

export const Default: Story = {
  render: (args) => <RecipeMenu {...args}></RecipeMenu>,
};

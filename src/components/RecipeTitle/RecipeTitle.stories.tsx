import { Meta, StoryObj } from "@storybook/react";
import RecipeTitle from "./index";

const meta: Meta<typeof RecipeTitle> = {
  title: "RecipeTitle",
  component: RecipeTitle,
};

export default meta;

type Story = StoryObj<typeof RecipeTitle>;

export const Default: Story = {
  render: (args) => <RecipeTitle {...args}></RecipeTitle>,
};

import { Meta, StoryObj } from "@storybook/react";
import RecipeTimeDifficulty from "./index";

const meta: Meta<typeof RecipeTimeDifficulty> = {
  title: "RecipeTimeDifficulty",
  component: RecipeTimeDifficulty,
};

export default meta;

type Story = StoryObj<typeof RecipeTimeDifficulty>;

export const Default: Story = {
  render: (args) => <RecipeTimeDifficulty {...args}></RecipeTimeDifficulty>,
};

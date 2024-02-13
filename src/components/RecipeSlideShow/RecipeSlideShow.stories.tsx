import { Meta, StoryObj } from "@storybook/react";
import RecipeSlideShow from "./index";

const meta: Meta<typeof RecipeSlideShow> = {
  title: "RecipeSlideShow",
  component: RecipeSlideShow,
};

export default meta;

type Story = StoryObj<typeof RecipeSlideShow>;

export const Default: Story = {
  render: (args) => <RecipeSlideShow {...args}></RecipeSlideShow>,
};

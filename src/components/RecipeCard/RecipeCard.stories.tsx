import { Meta, StoryObj } from "@storybook/react";
import RecipeCard from "./index";
import img from '../../images/img.png'

const meta: Meta<typeof RecipeCard> = {
  title: "RecipeCard",
  component: RecipeCard,
};

export default meta;

type Story = StoryObj<typeof RecipeCard>;

export const Default: Story = {
  name: "Default",
  render: (args) => <RecipeCard {...args} img={img} />,
};

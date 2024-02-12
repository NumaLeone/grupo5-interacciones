import { Meta, StoryObj } from "@storybook/react";
import IngredientCard from "./index";

const meta: Meta<typeof IngredientCard> = {
    title: "IngredientCard",
    component: IngredientCard,
};

export default meta;

type Story = StoryObj<typeof IngredientCard>;

export const Default: Story = {
    name: "Ingredient",
    render: (args) => <IngredientCard {...args} variant="ingredient"/>,
};

export const Recipe: Story = {
    name: "Recipe",
    render: (args) => <IngredientCard {...args} variant="recipe"/>,
};
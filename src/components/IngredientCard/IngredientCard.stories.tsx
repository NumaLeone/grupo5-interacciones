import { Meta, StoryObj } from "@storybook/react";
import IngredientCard from "./index";

const meta: Meta<typeof IngredientCard> = {
    title: "IngredientCard",
    component: IngredientCard,
};

export default meta;

type Story = StoryObj<typeof IngredientCard>;

export const Default: Story = {
    name: "Default",
    render: (args) => <IngredientCard {...args}>Button</IngredientCard>,
};


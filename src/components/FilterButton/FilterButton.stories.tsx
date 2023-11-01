import { Meta, StoryObj } from "@storybook/react";
import FilterButton from "./index";

const meta: Meta<typeof FilterButton> = {
    title: "FilterButton",
    component: FilterButton,
};

export default meta;

type Story = StoryObj<typeof FilterButton>;

export const Default: Story = {
    name: "Default",
    render: (args) => (
        <FilterButton {...args} text={'filter'}/>
    ),
};

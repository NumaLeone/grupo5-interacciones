import { Meta, StoryObj } from "@storybook/react";
import Select from "./index";

const meta: Meta<typeof Select> = {
    title: "Select",
    component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    name: "Default",
    render: (args) => (
        <Select {...args}/>
    ),
};

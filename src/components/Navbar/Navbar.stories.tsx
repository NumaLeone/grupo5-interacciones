import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./index";

const meta: Meta<typeof Navbar> = {
    title: "Navbar",
    component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    name: "Default",
    render: (args) => <Navbar/>,
};


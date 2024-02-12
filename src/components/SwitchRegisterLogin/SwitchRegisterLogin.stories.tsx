import { Meta, StoryObj } from "@storybook/react";
import SwitchRegisterLogin from "./index";

const meta: Meta<typeof SwitchRegisterLogin> = {
    title: "SwitchRegisterLogin",
    component: SwitchRegisterLogin,
};

export default meta;

type Story = StoryObj<typeof SwitchRegisterLogin>;

export const Default: Story = {
    name: "Default",
    render: (args) => <SwitchRegisterLogin {...args}/>,
};

import { Meta, StoryObj } from "@storybook/react";
import TextField from "./index";

const meta: Meta<typeof TextField> = {
  title: "TextField",
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  name: "Default",
  render: (args) => <TextField {...args} />,
};

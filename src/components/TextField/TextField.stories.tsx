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
  render: (args) => <TextField variant={"textField"} {...args}/>,
};

export const TextFieldFilters: Story = {
    name: "TextFieldFilters",
    render: (args) => <TextField variant={"textFieldFilters"} {...args}/>,
};

export const TextFieldError: Story = {
    name: "TextFieldError",
    render: (args) => <TextField variant={"textFieldError"} {...args}/>,
};

export const Searchbar: Story = {
    name: "Searchbar",
    render: (args) => <TextField variant={"searchbar"} {...args} text="Search..."/>,
};

import { Meta, StoryObj } from "@storybook/react";
import TextField from "./index";
import Button from "../Button";

const meta: Meta<typeof TextField> = {
  title: "TextField",
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  name: "Default",
  render: (args) => <TextField text={"text"} variant={"default"}/>,
};

export const Searchbar: Story = {
    name: "Searchbar",
    render: (args) => <TextField text={"text"} variant={"searchbar"}/>,
};

import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "Default",
  render: (args) => <Button {...args}>Button</Button>,
};

// export const Outlined: Story = {
//   name: "Outlined",
//   render: (args) => (
//     <Button {...args} variant={"outlined"}>
//       Button
//     </Button>
//   ),
// };

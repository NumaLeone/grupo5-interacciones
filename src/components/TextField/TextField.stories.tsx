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
    render: (args) => <TextField />,
    // render: (args) => <TextField text={"enter text"}/>,
};
//
// export const SearchBar: Story = {
//     name: "Outlined",
//     render: (args) => (
//         <TextField />,
//         {/*<TextField {...args} variant={"serchbar"} text={"search..."} />*/}
//     ),
// };

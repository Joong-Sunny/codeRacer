import {Meta, StoryObj} from '@storybook/react';
// import Character  from "../components/Character";
import Character from "@/components/Character";
// import {within, waitFor, userEvent} from "@storybook/testing-library";
// import {expect} from "@storybook/jest";

const meta = {
  title: "Components/Character",
  component: Character,
} as Meta;
export default meta;

type Story = StoryObj<typeof meta>;


export const CheckAfterToastClosed: Story = {
  args: {
    character: "A",
  },
};

//
// CheckAfterToastClosed.play = async ({canvasElement}) => {
//   const canvas = within(canvasElement);
//   const button = await canvas.findByRole("button");
//   await userEvent.click(button);
//
//   await waitFor(async () => {
//     await expect(await canvas.findByText("toast")).toBeInTheDocument();
//   });
//
//
//   await waitFor(async () => {
//     const toastElement = canvas.queryByText("toast");
//     expect(toastElement).not.toBeInTheDocument();
//   }, {timeout: 10000})
// }
//
//
// export const CheckBeforeToastClosed: Story = {
//   args: {
//     message: "toast",
//     duration: 2000,
//     fadeIn: false,
//     fadeOut: true,
//   },
// };
//
// CheckBeforeToastClosed.play = async ({canvasElement}) => {
//   const canvas = within(canvasElement);
//   const button = await canvas.findByRole("button");
//   await userEvent.click(button);
//
//   await waitFor(async () => {
//     await expect(await canvas.findByText("toast")).toBeInTheDocument();
//   });
//
//
//   await waitFor(async () => {
//     const toastElement = canvas.queryByText("toast");
//     expect(toastElement).not.toBeInTheDocument();
//   }, {timeout: 1000})
// }
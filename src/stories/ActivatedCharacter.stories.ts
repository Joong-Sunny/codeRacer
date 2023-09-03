import { Meta, StoryObj } from '@storybook/react';
import ActivatedCharacter from '@/components/ActivatedCharacter';

const meta = {
  title: 'Components/ActivatedCharacter',
  component: ActivatedCharacter,
} as Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCase: Story = {
  args: {
    character: 'A',
  },
};

export const CorrectCase: Story = {
  args: {
    character: 'A',
    userInputCharacter: 'A',
  },
};

export const IncorrectCase: Story = {
  args: {
    character: 'A',
    userInputCharacter: 'B',
  },
};

export const UndefinedCase: Story = {
  args: {
    character: 'A',
    userInputCharacter: undefined,
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

import type { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";
import Icon from "@atoms/Icon";

const meta: Meta<typeof ButtonGroup> = {
  title: "Molecules/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "icon"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const iconItems = [
  {
    value: "home",
    label: "Home",
    icon: (
      <Icon
        name="home"
        color="dark-300"
        size="lg"
      />
    ),
  },
  {
    value: "settings",
    label: "Settings",
    icon: (
      <Icon
        name="settings"
        color="dark-300"
        size="lg"
      />
    ),
  },
  {
    value: "profile",
    label: "Profile",
    icon: (
      <Icon
        name="user"
        color="dark-300"
        size="lg"
      />
    ),
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    defaultValue: "1",
  },
};

export const Multiple: Story = {
  args: {
    ...Default.args,
    multiple: true,
    defaultValue: ["1", "2"],
  },
};

export const Mandatory: Story = {
  args: {
    items: defaultItems,
    mandatory: true,
  },
};

export const MandatoryMultiple: Story = {
  args: {
    ...Multiple.args,
    mandatory: true,
    defaultValue: ["1"],
  },
};

export const IconButton: Story = {
  args: {
    items: iconItems,
    variant: "icon",
    defaultValue: "home",
  },
};

export const IconMultiple: Story = {
  args: {
    ...IconButton.args,
    multiple: true,
    defaultValue: ["home", "settings"],
  },
};

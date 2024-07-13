import { Meta, StoryObj } from "@storybook/react";
import { Botao, IBotaoProps } from "./index";
import { withRouter } from 'storybook-addon-remix-react-router';

export default {
  title: "Components/Botao",
  component: Botao,
  decorators: [withRouter],
} as Meta<IBotaoProps>;

export const Default: StoryObj<IBotaoProps> = {
};

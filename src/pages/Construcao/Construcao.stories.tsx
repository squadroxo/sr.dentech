import { Meta, StoryObj } from "@storybook/react/*";
import { withRouter } from 'storybook-addon-remix-react-router';
import ConstrucaoPage from "./index";

export default {
  title: "Pages/Construcao",
  Component: ConstrucaoPage,
  render: () => <ConstrucaoPage />,
  decorators: [withRouter],
} as Meta;

export const Default: StoryObj = {};

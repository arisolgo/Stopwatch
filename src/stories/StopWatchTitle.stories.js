import StopWatchTitle from "../assets/Styles/components/StopWatchTitle";

export default {
  title: "Styled Components/Title",
  component: StopWatchTitle,
  argTypes: { children: { type: "string", defaultValue: "Title" } },
};

const Template = ({ children, ...args }) => (
  <StopWatchTitle {...args}>{children}</StopWatchTitle>
);

export const Default = Template.bind({});
Default.args = {
  color: "white",
};

export const Black = Template.bind({});
Black.args = {
  color: "black",
};

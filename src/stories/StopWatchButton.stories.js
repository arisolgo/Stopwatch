import StopWatchButton from "../assets/Styles/components/StopWatchButton";

export default {
  title: "Styled Components/Button",
  component: StopWatchButton,
  argTypes: { action: { action: "Clicked" } },
};

const Template = (args) => <StopWatchButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const StartButton = Template.bind({});
StartButton.args = {
  skin: "play",
  children: "Start",
};

import { BigText, UserIcon, Text, DividerDot, SmallText } from "../atoms";
import { DateExpanded, TimeStamp } from "../molecules";
import "./MessageContent.css";

export const MessageContent = ({ message }) => {
  console.log(message.content);
  return (
    <div className="MessageContentContainer">
      <BigText>{message.title}</BigText>
      <div className="MessageData">
        <UserIcon />
        <Text>{message.author}</Text>
        <DividerDot />
        <DateExpanded date={message.created_at} />
        <DividerDot />
        <TimeStamp time={message.created_at} />
      </div>
      <div className="MessageContent">
        <SmallText>{message.content}</SmallText>
      </div>
    </div>
  );
};

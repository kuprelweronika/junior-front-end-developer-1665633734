import { NewMessage } from "./NewMessage";
import { OpenMessage } from "./OpenMessage";
import { OldMessage } from "./OldMessage";
import "./MessageBar.css";

export const MessageBar = ({ messages }) => {
  return (
    <div className="messageBarContainer">
      {messages.map(
        (message) =>
          ({
            new: <NewMessage message={message} />,
            open: <OpenMessage message={message} />,
            old: <OldMessage message={message} />,
          }[message.status])
      )}
    </div>
  );
};

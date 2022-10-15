import "./BusinessContext.css";
import { Card, Divider, SectionHeaderTextHighlight } from "../atoms";
import { BusinessContextIcon } from "../atoms/BusinessContextIcon";
import { MessageBar } from "../MessageBar/MessageBar";
import { MessageContent } from "./../MessageContent/MessageContent";

export const BusinessContext = ({ messages }) => {
  console.log(messages);
  return (
    <Card
      backgroundColor={"white"}
      customStyle={{
        bottom: "4%",
        backgroundColor: "var(--background-white)",
        boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
      }}
    >
      <div className="HeaderSection">
        <BusinessContextIcon />
        <SectionHeaderTextHighlight>
          Business Context
        </SectionHeaderTextHighlight>
      </div>
      <Divider />
      <div className="contextContainer">
        <MessageBar messages={messages} />
        <div className="placeholder">
          {messages.map(
            (message) =>
              ({
                open: <MessageContent message={message} />,
              }[message.status])
          )}
        </div>
      </div>
    </Card>
  );
};

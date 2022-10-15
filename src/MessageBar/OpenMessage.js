import "./OpenMessage.css";
import { Card, SectionHeaderText, SmallText, DividerDot } from "../atoms";
import { SmallTextPreview, DateShort } from "../molecules";

export const OpenMessage = ({message}) => {
  return (
    <div className="openMessageWrapper">
      <Card
        backgroundColor={"white"}
        customStyle={{
          bottom: "4%",
          boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        }}
      >
        <div className="messageContainer">
          <div className="messageHeader">
            <div className="textMessageHeader">
              <SmallText>{message.author}</SmallText>
              <DividerDot />
              <DateShort date={message.created_at}></DateShort>
            </div>
          </div>
          <div className="titleContainer">
            <SectionHeaderText>
             {message.title}
            </SectionHeaderText>
          </div>
          <SmallTextPreview
            message={message.content}
          ></SmallTextPreview>
        </div>
      </Card>
    </div>
  );
};

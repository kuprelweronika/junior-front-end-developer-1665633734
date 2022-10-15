import "./OldMessage.css";
import { Card, SectionHeaderText, SmallText, DividerDot } from "../atoms";
import { SmallTextPreview, DateShort } from "../molecules";

export const OldMessage = ({ message }) => {
  return (
    <div className="oldMessageWrapper">
      <Card
        backgroundColor={"var(--background-grey)"}
        customStyle={{
          bottom: "4%",
          paddingTop: "12px",
        }}
      >
        <div className="oldMessageContainer">
          <div className="messageHeader">
            <div className="textMessageHeader">
              <SmallText>{message.author}</SmallText>
              <DividerDot />
              <DateShort date={message.created_at}></DateShort>
            </div>
          </div>
          <div className="titleContainer">
            <SectionHeaderText>{message.title} </SectionHeaderText>
          </div>
          <SmallTextPreview message={message.content}></SmallTextPreview>
        </div>
      </Card>
    </div>
  );
};

import "./NewMessage.css";
import {
  Card,
  SectionHeaderTextHighlight,
  SmallText,
  DividerDot,
  NewBadge,
} from "../atoms";
import { SmallTextPreview, DateShort } from "../molecules";

export const NewMessage = ({ message }) => {
  return (
    <div className="messageWrapper">
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
            <NewBadge />

            <div className="textMessageHeader">
              <SmallText font-color={"blue"}>{message.author}</SmallText>
              <DividerDot />
              <DateShort date={message.created_at}></DateShort>
            </div>
          </div>
          <div className="titleContainer">
            <SectionHeaderTextHighlight>
              {message.title}
            </SectionHeaderTextHighlight>
          </div>
          <SmallTextPreview message={message.content}></SmallTextPreview>
        </div>
      </Card>
    </div>
  );
};

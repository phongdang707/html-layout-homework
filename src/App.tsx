import "./App.css";
import ButtonIcon from "./components/ButtonIcon";
import ButtonText from "./components/ButtonText";
import Input from "./components/Input";
import Item from "./components/Item";
import Text from "./components/Text";
import Title from "./components/Title";
// import AddIcon from '@mui/icons-material/Add';
// import Vinh from "./components/Vinh";

const itemContent: string[] = [
  "Buy a new gaming laptop",
  "Complete task",
  "Swim",
  "Do exercise",
];

function App() {
  return (
    <div className="todo">
      {/* <Vinh /> */}
      <Title></Title>

      {/* Input Search */}
      <div className="container-search">
        <Input></Input>
        <ButtonIcon></ButtonIcon>
      </div>

      {itemContent.map((each) => {
        return <Item label={each} />;
      })}

      {/* Content */}
      {/* <Item label="Buy a new gaming laptop" hiKhoa={123}></Item>
      <Item label="Complete task" hiKhoa={123}></Item>
      <Item label="Swim" hiKhoa={123}></Item>
      <Item label="Do exercise" hiKhoa={123}></Item> */}

      {/* Footer */}
      <div style={{ display: "flex" }}>
        <Text></Text>
        <ButtonText></ButtonText>
      </div>
    </div>
  );
}

export default App;

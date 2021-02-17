import React, { FC } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  HandleCreateForm: () => void;
}
const NavBar: FC<IProps> = ({ HandleCreateForm }) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          ></img>
          My ToDoes
        </Menu.Item>
        <Menu.Item>
          <Button
            className="ui green button"
            content="Add ToDo"
            onClick={() => HandleCreateForm()}
          >
            <FontAwesomeIcon icon={faCalendarPlus} className="ma2 pa2" /> Add
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
export default NavBar;

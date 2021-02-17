import React from "react";
import { Button, Grid, Item, Segment } from "semantic-ui-react";
import { IToDo } from "../../../app/models/todo";
import { faEye, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dashboard.css";

interface IProps {
  ToDoes: IToDo[];
  HandleSelectedActivity: (id: string) => void;
  DeleteActivity: (Id: string) => void;
  SetEditMode: (IsEditMode: boolean) => void;
}
export const ItemList: React.FC<IProps> = ({
  ToDoes,
  HandleSelectedActivity,
  DeleteActivity,
  SetEditMode,
}) => {
  return (
    <Segment clearing>
      <Grid celled="internally">
        {ToDoes.map((todo) => (
          <Grid.Row>
            <Grid.Column>
              <Item key={todo.id}>
                <Item.Content>
                  <Item.Header as="a">
                    <span className="ItemStyle">{todo.title}</span>
                  </Item.Header>
                  <Item.Meta>{todo.date}</Item.Meta>
                  <Item.Description>
                    <div>{todo.description}</div>
                  </Item.Description>
                  <Item.Extra>
                    <Button
                      className="fa fas fa-eye"
                      floated="right"
                      content="Delete"
                      color="red"
                      onClick={() => DeleteActivity(todo.id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>

                    <Button
                      className="ui teal button"
                      floated="right"
                      content="  Edit  "
                      onClick={() => {
                        HandleSelectedActivity(todo.id);
                        SetEditMode(true);
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                      floated="right"
                      content="View"
                      className="ui teal button"
                      onClick={() => HandleSelectedActivity(todo.id)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    </Segment>
  );
};

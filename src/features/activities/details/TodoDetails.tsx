import React, { FC } from "react";
import { Card } from "semantic-ui-react";
import { IToDo } from "../../../app/models/todo";
interface IProps {
  SelectedActivity: IToDo;
  SetEditMode: (IsEditMode: boolean) => void;
  SetSelectedActivity: (Activity: IToDo | null) => void;
}

export const TodoDetails: FC<IProps> = ({
  SelectedActivity,
  SetEditMode,
  SetSelectedActivity,
}) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{SelectedActivity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{SelectedActivity.date}</span>
        </Card.Meta>
        <Card.Description>{SelectedActivity.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

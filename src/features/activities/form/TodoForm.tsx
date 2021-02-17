import React, { ChangeEvent, FC, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IToDo } from "../../../app/models/todo";
import { v4 as uuid } from "uuid";
import { faSave, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  SetEditMode: (IsEditMode: boolean) => void;
  SelectedActivity: IToDo | null;
  EditActivity: (Activity: IToDo) => void;
  CreateActivity: (Activity: IToDo) => void;
}
export const TodoForm: FC<IProps> = ({
  SelectedActivity,
  SetEditMode,
  EditActivity,
  CreateActivity,
}) => {
  const InitialActivity = () => {
    if (SelectedActivity) {
      return SelectedActivity;
    } else {
      return {
        id: "",
        title: "",
        description: "",
        category: "",
        date: "",
      };
    }
  };
  const [activity, setActivity] = useState<IToDo>(InitialActivity);
  const HandleChangeEvent = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };
  const OnSubmitHandler = () => {
    if (activity.id.length === 0) {
      let newActivity = { ...activity, id: uuid() };
      CreateActivity(newActivity);
    } else {
      EditActivity(activity);
    }
  };
  return (
    <Segment clearing>
      <Form onSubmit={OnSubmitHandler}>
        <Form.Input
          placeholder="Title"
          onChange={HandleChangeEvent}
          name="title"
          value={activity.title}
        />
        <Form.TextArea
          rows={2}
          placeholder="Description"
          onChange={HandleChangeEvent}
          name="description"
          value={activity.description}
        />
        <Form.Input
          type="datetime-local"
          placeholder="Date"
          onChange={HandleChangeEvent}
          name="date"
          value={activity.date}
        />
        <Button floated="right" positive type="submit" content="Submit">
          <FontAwesomeIcon icon={faSave} />{" "}
        </Button>
        <Button
          floated="right"
          onClick={() => SetEditMode(false)}
          type="button"
          content="Cancel"
        >
          <FontAwesomeIcon icon={faWindowClose} />
        </Button>
      </Form>
    </Segment>
  );
};

import React, { FC } from "react";
import { IToDo } from "../../../app/models/todo";
import { TodoDetails } from "../details/TodoDetails";
import { TodoForm } from "../form/TodoForm";
import { ItemList } from "./ItemList";
import "./dashboard.css";
interface IProps {
  ToDoes: IToDo[];
  HandleSelectedActivity: (Id: string) => void;
  SelectedActivity: IToDo | null;
  IsEditMode: boolean;
  SetEditMode: (IsEditMode: boolean) => void;
  SetSelectedActivity: (Activity: IToDo | null) => void;
  EditActivity: (Activity: IToDo) => void;
  CreateActivity: (Activity: IToDo) => void;
  DeleteActivity: (Id: string) => void;
}
export const ToDoDashboard: FC<IProps> = ({
  ToDoes,
  HandleSelectedActivity,
  SelectedActivity,
  IsEditMode,
  SetEditMode,
  SetSelectedActivity,
  EditActivity,
  CreateActivity,
  DeleteActivity,
}) => {
  return (
    <div className="container">
      <div className="MainBox">
        {SelectedActivity && !IsEditMode && (
          <TodoDetails
            SelectedActivity={SelectedActivity}
            SetEditMode={SetEditMode}
            SetSelectedActivity={SetSelectedActivity}
          ></TodoDetails>
        )}
        {IsEditMode && (
          <TodoForm
            key={(SelectedActivity && SelectedActivity.id) || 0}
            SetEditMode={SetEditMode}
            SelectedActivity={SelectedActivity!}
            EditActivity={EditActivity}
            CreateActivity={CreateActivity}
          ></TodoForm>
        )}
      </div>
      <div className="MainBox">
        <ItemList
          ToDoes={ToDoes}
          HandleSelectedActivity={HandleSelectedActivity}
          DeleteActivity={DeleteActivity}
          SetEditMode={SetEditMode}
        ></ItemList>
      </div>
    </div>
  );
};

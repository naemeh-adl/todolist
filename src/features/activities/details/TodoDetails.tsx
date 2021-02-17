import React, { FC } from 'react';
//import { Interface } from 'readline';
import { Card} from 'semantic-ui-react';
import { IToDo } from "../../../app/models/todo";
interface IProps {
    SelectedActivity:IToDo;
    SetEditMode: (IsEditMode: boolean) => void;
    SetSelectedActivity:(Activity:IToDo | null)=>void
  }

export const TodoDetails:FC<IProps>  = ({SelectedActivity,SetEditMode,SetSelectedActivity}) => {
    return (
      <Card fluid>
        {/* <Image src={a} wrapped ui={false} /> */}
        <Card.Content>
          <Card.Header>{SelectedActivity.title}</Card.Header>
          <Card.Meta>
            <span className="date">{SelectedActivity.date}</span>
          </Card.Meta>
          <Card.Description>{SelectedActivity.description}</Card.Description>
        </Card.Content>
        {/* <Card.Content extra>
          <Button.Group widths={2} >
            <Button basic color="blue"  floated="right" content="  Edit  " onClick={()=>SetEditMode(true)}/>
            <Button basic color="grey" floated="right" content="Cancel" onClick={()=>SetSelectedActivity(null)} />
          </Button.Group>
          </Card.Content> */}
      </Card>
    );
}

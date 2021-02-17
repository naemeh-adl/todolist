import React, { useState, useEffect, Fragment } from "react";
import { Container } from "semantic-ui-react";
import { IToDo } from "../models/todo";
import NavBar from "../../features/NavBar";
import { ToDoDashboard } from "../../features/activities/dashboard/ToDoDashboard";
import axios from "axios";
import ModalVideo from "react-modal-video";

////////////////////////////////////////
const Aparat=()=>{
  debugger;
  axios({
    method:'GET',
    url:'‏http://api.aparat.com/fa/v1/video/video/mostViewedVideos',
    headers: {
      "content-type": "application/json",
      'x-rapidapi-key':"preview_src",
      "Access-Control-Allow-Origin": "http://api.aparat.com"
    },
  }).then(function (response) {
    
      console.log("sucess!!");
    debugger;
     
  });
}
// var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
//   function doCORSRequest(options:any, printResult:any) {
//     var x = new XMLHttpRequest();
//     x.open(options.method, cors_api_url + options.url);
//     x.onload = x.onerror = function() {
//       printResult(
//         options.method + ' ' + options.url + '\n' +
//         x.status + ' ' + x.statusText + '\n\n' +
//         (x.responseText || '')
//       );
//     };
//     if (/^POST/i.test(options.method)) {
//       x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     }
//     x.send(options.data);
//   }

//   // Bind event
//   const myresult=(function() {
//     // var urlField = document.getElementById('url');
//     // var dataField = document.getElementById('data');
//     // var outputField = document.getElementById('output');
//     // document.getElementById('get').onclick =
//     // document.getElementById('post').onclick = function(e) {
//       // e.preventDefault();
//       doCORSRequest({
//         method: 'GET',
//         url: 'http://localhost:5000/apihttp://api.aparat.com/fa/v1/video/video/mostViewedVideos',
//         data: ''
//       }, function printResult(result:any) {
//         debugger;
//         console.log(result);
//       });
//     //};
//   })();
//   if (typeof console === 'object') {
//     console.log('// To test a local CORS Anywhere server, set cors_api_url. For example:');
//     console.log('cors_api_url = "http://localhost:8080/"');
//   }

//////////////////////////////////////////////

const App = () => {
  const [ToDoes, setToDoes] = useState<IToDo[]>([]);
  const [SelectedTodo, SetSelectedTodo] = useState<IToDo | null>(null);
  const [IsEditMode, SetEditMode] = useState(false);
  const [VideoId, setVideoId] = useState("");
  const [isOpen, setOpeni] = useState(false);
  useEffect(() => {
    // localStorage.clear();
    //Aparat();
    let data = JSON.parse(String(localStorage.getItem("Activities")));
    let mytodoes: IToDo[] = [];
    if (data !== null) {
      data.forEach((x: any) => {
        mytodoes.push(x);
      });
      setToDoes(mytodoes);
    }
  }, []);
  const HandleSelectedToDo = (Id: string) => {
    SetSelectedTodo(ToDoes.filter((x) => x.id === Id)[0]);
    SetEditMode(false);
  };
  const HandleCreateForm = () => {
    SetSelectedTodo(null);
    SetEditMode(true);
  };
  const HandleCreateToDo = (activity: IToDo) => {
    localStorage.removeItem("Activities");
    localStorage.setItem("Activities", JSON.stringify([...ToDoes, activity]));
    setToDoes([...ToDoes, activity]);
    SetSelectedTodo(activity);
    SetEditMode(false);

    //////////Code For Film Opening
    var stored_value =
      localStorage.getItem("count") === null
        ? 0
        : Number(localStorage.getItem("count"));
    localStorage.setItem("count", String(stored_value + 1));
    if ((stored_value + 1) % 5 === 0) {
      debugger;
      onOpenModal();
      axios({
        method: "GET",
        url:
          "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&type=video&key=AIzaSyBASsQ3I4VBn8t9aFnJtmMQcxlSpMVJTFs",
        headers: {
          "content-type": "application/json",
        },
      }).then(function (response) {
        var SelecteVideo = response.data.items.filter(
          (x) => x.snippet.channelTitle !== "NFL"
        )[0];
        try {
          debugger;
          setVideoId(SelecteVideo.id.videoId);
          console.log("sucess!!");
        } catch {
          debugger;
          setVideoId("_6r_1esxE64");
        }
      });
    }
  };
  const HandleEditTodo = (activity: IToDo) => {
    localStorage.removeItem("Activities");
    localStorage.setItem(
      "Activities",
      JSON.stringify([...ToDoes.filter((x) => x.id !== activity.id), activity])
    );
    setToDoes([...ToDoes.filter((x) => x.id !== activity.id), activity]);
    SetSelectedTodo(activity);
    SetEditMode(false);
  };
  const HandleDeleteToDo = (Id: string) => {
    localStorage.removeItem("Activities");
    localStorage.setItem(
      "Activities",
      JSON.stringify([...ToDoes.filter((x) => x.id !== Id)])
    );
    setToDoes([...ToDoes.filter((x) => x.id !== Id)]);
  };
  const onOpenModal = () => {
    setOpeni(true);
  };
  return (
    <Fragment>
      <NavBar HandleCreateForm={HandleCreateForm} />
      <Container style={{ marginTop: "7em" }}>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={VideoId}
          onClose={() => setOpeni(false)}
        />
        <ToDoDashboard
          ToDoes={ToDoes}
          HandleSelectedActivity={HandleSelectedToDo}
          SelectedActivity={SelectedTodo}
          IsEditMode={IsEditMode}
          SetEditMode={SetEditMode}
          SetSelectedActivity={SetSelectedTodo}
          EditActivity={HandleEditTodo}
          CreateActivity={HandleCreateToDo}
          DeleteActivity={HandleDeleteToDo}
        ></ToDoDashboard>
      </Container>
    </Fragment>
  );
};

export default App;

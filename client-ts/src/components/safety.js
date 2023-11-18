import { useEffect } from "react";
import LessonList from "../components/LessonList";
import { getClientLessons } from "../apiService";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { Lesson } from "../types";

interface FormState {
  inputValues: Lesson;
}

const Client = () => {
  const [inputValues, setInputValues] = useState<FormState['inputValues']>({
    name: '',
    resort: '',
    level: '',
    date: '',
    lessons: [],
    weather: []
  })

  const userName = "john"; //harcoded userName will change later
  //to improve, get userName from localStorage. set it in localStorage after login

  useEffect(() => {
    getClientLessons(userName).then((data) => {
      setInputValues(data);
    });
  }, [userName]);
  

  return (
    <div className="Client">
      <NavBar />

      <div className="client-dashboard-container">
        <div className="client-header">
          <h5>Client Dashboard</h5>
        </div>

        <LessonList
          lessons={lessons}
          setLessons={setLessons}
          isClientView={true}
        />
      </div>
    </div>
  );
};

export default Client;
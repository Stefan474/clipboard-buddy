import { useState } from "react";
import Header from "./Components/Header";
import ClipTabs from "./Components/ClipTabs";
import "./App.css";

function App() {
  const [hideHeader, setHideHeader] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const displayContent = () => {
    setHideHeader(true);
  }
  const displayForm = () =>{
    setShowForm(true);
  }
  const hideForm = () =>{
    setShowForm(false);
  }
  return (
    <>
      <Header displayContent={displayContent} displayForm={displayForm}/>
      {hideHeader !== false && <ClipTabs showForm={showForm} hideForm={hideForm}/>}
    </>
  );
}

export default App;

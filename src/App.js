import { useState } from "react";
import Header from "./Components/Header";
import ClipTabs from "./Components/ClipTabs";
import ClipTables from "./Components/ClipTables";
import "./App.css";

function App() {
  const [hideHeader, setHideHeader] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [tab, setTab] = useState(1);
  const [tab1Data, setTab1Data] = useState([{name: 'lol', script: "lol2", tab:1}]);
  const [tab2Data, setTab2Data] = useState('');
  const [tab3Data, setTab3Data] = useState('');
  const [tab4Data, setTab4Data] = useState('');

  const displayContent = () => {
    setHideHeader(true);
  };
  const displayForm = () => {
    setShowForm(true);
  };
  const hideForm = () => {
    setShowForm(false);
  };
  const getActiveTab = (tab) => {
    setTab(tab)
  }
  const getData = (receivedData) => {
    setTab1Data([...tab1Data, receivedData])
  }

  return (
    <>
      <Header displayContent={displayContent} displayForm={displayForm} />
      {hideHeader !== false && (
        <>
        <ClipTabs showForm={showForm} hideForm={hideForm} getActiveTab={getActiveTab} getData={getData}/>
        <button onClick={() => console.log(tab1Data)}>zz</button>
        <ClipTables activeTab={tab}/>
        
        </>
      )}
    </>
  );
}

export default App;

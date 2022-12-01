import { useEffect, useState } from "react";
import Header from "./Components/Header";
import ClipTabs from "./Components/ClipTabs";
import ClipTables from "./Components/ClipTables";
import "./App.css";

function App() {
  const [hideHeader, setHideHeader] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [tab, setTab] = useState(1);
  const [tab1Data, setTab1Data] = useState([
    { scriptName: "", Script: "", id: 99999, tab: 5 },
  ]);
  const [tab2Data, setTab2Data] = useState([
    { scriptName: "", Script: "", id: 99998, tab: 5 },
  ]);
  const [tab3Data, setTab3Data] = useState([
    { scriptName: "", Script: "", id: 99997, tab: 5 },
  ]);
  const [tab4Data, setTab4Data] = useState([
    { scriptName: "", Script: "", id: 99996, tab: 5 },
  ]);
  const [receivedData, setReceivedData] = useState([]);
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    console.log(receivedData);
    receivedData.map((data) => {
      if (data.tab === 1) setTab1Data((previousData) => [...previousData, data]);
      else if (data.tab === 2) console.log(data);
      else if (data.tab === 3) console.log(data);
      else if (data.tab === 4) console.log(data);
    });
  }, [receivedData]);

  useEffect(() => {
    
  }, [])

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
    setTab(tab);
  };
  const getData = (data) => {
    setReceivedData((previousData) => [...previousData, data]);
  };

  return (
    <>
      <Header displayContent={displayContent} displayForm={displayForm} />
      {hideHeader !== false && (
        <>
          <button
            className="btn bnt-primary"
            onClick={() => console.log(receivedData)}
          >
            {" "}
            display data
          </button>
          <button
            className="btn bnt-primary"
            onClick={() => console.log(tab1Data)}
          >
            {" "}
            tab data
          </button>
          <ClipTabs
            showForm={showForm}
            hideForm={hideForm}
            getActiveTab={getActiveTab}
            getData={getData}
          />
          <ClipTables activeTab={tab} />
        </>
      )}
    </>
  );
}

export default App;

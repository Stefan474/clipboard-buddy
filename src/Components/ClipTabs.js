import React, { useState, useEffect } from "react";

const dummy_data2 = [{
    id:99999,
    name:"Hello",
    script:"World",
    tab:5
}]

const ClipTabs = (props) => {
  const [activeTab, setActiveTab] = useState(1); 
  const [passedData, setPassedData] = useState(dummy_data2); //put local saved data here to load data on refresh
  const [enteredName, setEnteredName] = useState();
  const [enteredScript, setEnteredScript] = useState();

  useEffect(() => {
    props.getActiveTab(activeTab);
  }, [activeTab]);

  const nameHandler = (e) => {
    setEnteredName(e.target.value)
  }
  const scriptHandler = (e) => {
    setEnteredScript(e.target.value)
  }



  const hideFormHandler = (e) => {
    e.preventDefault();
    props.hideForm();
    const newData = {
        
        name: enteredName,
        script: enteredScript,
        tab: activeTab
    }
    setPassedData((previousData) => [...previousData, newData])
    setTimeout(props.getData(passedData), 400)
  };

  const enteredData = () => {};

  return (
    <>
      <div className="flex-row text-center bg-base-200 shadow-xl p-7 m-auto">
        {props.showForm !== true && (
          <p>Pro tip: Press Enter to add a clip without clicking the button!</p>
        )}
        {props.showForm == true && (
          <form>
            {" "}
            {/* FORM FOR INPUT, HANDLES DATA FOR THE ITEMS */}
            <input
              type="text"
              placeholder="Clip name"
              className="input input-bordered input-info w-1/3 mb-5"
              onChange={nameHandler}
            />
            <br></br>
            <textarea
              className="textarea textarea-info w-1/3"
              placeholder="Paste your clipboard here."
              onChange={scriptHandler}
            ></textarea>
            <br></br>
            <button className="mt-2 btn btn-primary" onClick={hideFormHandler}>
              Save the clip!
            </button>
          </form>
        )}
      </div>
      <div className="tabs mx-auto w-full flex-row justify-center border-spacing-2 border-l-base-100 border">
        <a
          className={`tab tab-lg tab-lifted ${
            activeTab === 1 ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab(1)}
        >
          General
        </a>
        <a
          className={`tab tab-lg tab-lifted ${
            activeTab === 2 ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab(2)}
        >
          Spec 1
        </a>
        <a
          className={`tab tab-lg tab-lifted ${
            activeTab === 3 ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab(3)}
        >
          Spec 2
        </a>
        <a
          className={`tab tab-lg tab-lifted ${
            activeTab === 4 ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab(4)}
        >
          Spec 3
        </a>
      </div>
    </>
  );
};

export default ClipTabs;

import React, { useState } from "react";

const ClipTabs = (props) => {
  const [activeTab, setActiveTab] = useState(2);
  const hideFormHandler = (e) =>{
    e.preventDefault();
    props.hideForm();
  }
  return (
    <>
      <div className="flex-row text-center bg-base-200 shadow-xl p-7 m-auto">
        {props.showForm == true && <form>
        <input type="text" placeholder="Clip name" className="input input-bordered input-info w-1/3 mb-5" />
        <br></br>
        <textarea className="textarea textarea-info w-1/3" placeholder="Paste your clipboard here."></textarea>
        <br></br>
        <button className="mt-2 btn btn-primary" onClick={hideFormHandler}>Save the clip!</button>
        </form>}
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

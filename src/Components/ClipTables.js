import React, { useEffect, useState } from "react";

const dummy_data = [
  {
    scriptName: "BNR",
    script: "Samalasjdoasjdoiajoiwdjoiasjoidjoaisjdoiasjoidjoiasjdoiasiod",
    id: 1,
    tab: 2,
  },
  {
    scriptName: "BCR",
    script: "najjaci sam BCR",
    id: 2,
    tab: 3,
  },
];

const ClipTables = (props) => {
  const [passedData, setPassedData] = useState(dummy_data);


  return (
    <>
      <div className="bg-base-200 h-screen">
        <div className="overflow-x-auto border-l-primary">
          <table className="table w-3/5 justify-center flex-row mx-auto">
            <thead>
              <tr>
                <th></th>
                <th>Script name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {passedData.map((data) => {
                return (
                  <tr>
                    <th>{data.id}</th>
                    <td>{data.scriptName}</td>
                    <td>
                      <button
                        className="btn btn-secondary"
                        onClick={() => {
                          navigator.clipboard.writeText(data.script);
                        }}
                      >
                        {" "}
                        Clip It{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}

              {}
            </tbody>
          </table>
        </div>

        {props.activeTab == 1 && <p>hi 1</p>}
        {props.activeTab == 2 && <p>hi 2</p>}
        {props.activeTab == 3 && <p>hi 3</p>}
        {props.activeTab == 4 && <p>hi 4</p>}
      </div>
    </>
  );
};

export default ClipTables;

import React, { useState, useEffect } from "react";

function Header(props) {
  const [displayHeader, setDisplayHeader] = useState(true);
  useEffect(() => {
    document.addEventListener("keydown", openForm, true);
  }, []);

  const openForm = (e) => {
    if (e.keyCode === 13) {
      props.displayForm();
    }
  };

  const hideHandler = () => {
    setDisplayHeader(false);
    props.displayContent();
  };

  return (
    <>
      {displayHeader == true && (
        <div className="w-full flex h-screen bg-base-300">
          <div className="flex-row text-center bg-base-200 shadow-xl p-7 m-auto">
            <h1 className="text-5xl mt-2">Welcome to ClipBuddy!</h1>
            <h2 className="mt-4 text-xl">
              Check out the short (promise) tutorial if it's your first time
              here!
            </h2>

            <label
              htmlFor="my-modal"
              className="btn btn-primary mx-2 mt-3 animate-pulse"
            >
              First time tutorial!
            </label>
            <button className="btn btn-secondary mx-2" onClick={hideHandler}>
              Close prompt
            </button>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Congratulations random Internet user!
                </h3>
                <p className="py-4">
                  You've been selected for a chance to get one year of
                  subscription to use Wikipedia for free!
                </p>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Yay!
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayHeader === false && (
        <div className="navbar bg-neutral text-neutral-content flex-row justify-between align-middle">
          <a className="btn btn-ghost normal-case text-3xl ml-20">
            📎ClipBuddy
          </a>
          <div>
            <button className="btn btn-primary" onClick={props.displayForm}>
              Add a new clip!
            </button>
            <label
              htmlFor="my-modal"
              className="btn btn-accent mx-2 align-right mr-4  p-3  mt-0"
            >
              See tutorial again
            </label>
          </div>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-black">
                Congratulations random Internet user!
              </h3>
              <p className="py-4 text-black">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

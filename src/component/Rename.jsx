import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Rename() {
  const [files, setFiles] = useState("");
  const url = window.location.href.split("/")[3];
  console.log(url);

  const send = () => {
    fetch(`http://localhost:5002/${url}/rename`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({"name":files}),
    });
  };

  return (
    <div>
        <br />
        <h5>Note! The file extension must be added</h5>
        <br />
      <input 
        type="text"
        value={files}
        onChange={(e) => setFiles(e.target.value)}
      />
      {" "}
      <button 
      class="btn btn-primary"
        onClick ={() => {
          send();
          
        }}
      >
        send
      </button>
    </div>
  );
}

export default Rename;
import React from "react";
import { Outlet } from "react-router-dom";
import Delete from "./Delete";

const Index = () => {
  const url = window.location.href.split("/")[3];
  console.log(url);

  return (
    <div>
      <br />
      <a className="btn" href={`/${url}/info`}>
         info 
      </a>
      {" "}  
      <a className="btn" href={`/${url}/show`}>
        show code
      </a>
      {" "} 
      <a className="btn" href={`/${url}/rename`}>
        Rename
      </a>
      {" "} 
      <a className="btn" href={`/${url}/copy`}>
        Copy
      </a>
      {" "} 
      <a onClick={Delete} className="btn" href={`/${url}/delete`}>
        Delete
      </a>
      {" "} 
      <br /><hr /><br />
      <div>
      file name - {url}
    
      </div>
      <Outlet />
    </div>
  );
};

export default Index;

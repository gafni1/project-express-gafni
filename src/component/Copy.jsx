import React,{useState} from 'react'

function Copy() {
  const [files, setFiles] = useState('');
  const url = window.location.href.split('/')[3]
    console.log(files);
    const send = () => {
        fetch(`http://localhost:5002/${url}/copy`, {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({"name":files}),
        });
      };
    
      return (
        <div>
            <br />
            <h6>Choose a new name for your file</h6>
            <br />
          <input
            type="text"
            value={files}
            onChange={(e) => setFiles(e.target.value)}
          />
          
          {" "}
          <button
            onClick={() => {
              send();
            }}
          >
            send
          </button>
        </div>
      );
    }   

export default Copy;
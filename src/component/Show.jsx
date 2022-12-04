import React,{useEffect,useState} from 'react'

function Show() {
  const [files, setFiles] = useState();
  const url = window.location.href.split('/')[3]
    console.log(url);
  useEffect(() => {
    fetch(`http://localhost:5002/${url}/show`)
      .then((files) => files.text())
      .then((files) => {
        setFiles(files);
        console.log(files);
      });
  }, []);

  return (
    <div> 
      <br />

      {files && files} </div>
  )
}
export default Show
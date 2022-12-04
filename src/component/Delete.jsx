
function Delete() {
  const url = window.location.href.split("/")[3]
  fetch(`http://localhost:5002/${url}/delete`, {
    method: "DELETE",})
    console.log("The file was successfully deleted!");
    return (<div><br /> <h4>The file was successfully deleted!</h4>
      </div>)};

export default Delete;
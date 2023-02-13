import "./Toptab.css";
function Toptab() {
  function submit() {
    alert("Your Order has been Placed");
  }
  return (
    <div>
      <div>
        <div id="mySidenav" className="sidenav"></div>
      </div>
      <div className="icon">
        <iconify-icon icon="bi:emoji-smile-fill"></iconify-icon>{" "}
      </div>
      <button className="Submit" onClick={submit}>
        {" "}
        Submit{" "}
      </button>{" "}
      <a href="made by.html">
        <div className="icons">
          <iconify-icon icon="mdi:bell-notification-outline"></iconify-icon>{" "}
        </div>
      </a>{" "}
      <a href="made by.html">
        <div className="icons">
          <iconify-icon icon="material-symbols:settings"></iconify-icon>
        </div>
      </a>
    </div>
  );
}

export default Toptab;

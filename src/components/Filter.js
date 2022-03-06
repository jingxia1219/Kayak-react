import "./Filter.css";
import { useContext } from "react";
import AllianceContext from "./AllianceContext";

function Filter() {
  const allianceCtx = useContext(AllianceContext);

  function checkBoxClickHandler(event) {
    const alliance = allianceCtx.alliances;
    if (event.target.checked) {
      if (!allianceCtx.checkStatus) {
        //first time checking box
        allianceCtx.getAlliance([event.target.value]);
        allianceCtx.checkbox();
      } else if (!alliance.includes(event.target.value)) {
        //clicked and not in arr
        allianceCtx.getAlliance([...alliance, event.target.value]);
      }
    } else if (!event.target.checked) {
      //unselected
      if (alliance.includes(event.target.value)) {
        console.log("aliance,21", alliance); //'SA' not array
        let temp = alliance;
        // console.log('temp,',temp)
        temp = temp.filter((el) => el !== event.target.value);
        console.log("temp,", temp);
        allianceCtx.getAlliance(temp);
      }
    }
    // allianceCtx.getAlliance(alliance)
    console.log("filter,line32, alliance", alliance);
  }

  console.log("Filter, ctx.alliances", allianceCtx.alliances);
  return (
    <div className="filter-container">
      <span className="filter-title">
        <div className="Filter-by-Alliances">Filter by Alliances</div>
      </span>
      <div className="filter-checkboxs">
        <input value="OW" onClick={checkBoxClickHandler} type="checkbox" />
        <label>Oneworld</label>
        <input value="ST" onClick={checkBoxClickHandler} type="checkbox" />
        <label>Sky Team</label>
        <input value="SA" onClick={checkBoxClickHandler} type="checkbox" />
        <label>Star Alliance</label>
      </div>
    </div>
  );
}
export default Filter;

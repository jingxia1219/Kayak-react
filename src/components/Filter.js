import "./Filter.css";

function Filter() {
  return (
    <div className="filter-container">
      <span className="filter-title">
        <h5>Filter by Alliances</h5>
      </span>
      <div className="filter-checkboxs">
        <input type="checkbox" />
        <label>Oneworld</label>
        <input type="checkbox" />
        <label>Sky Team</label>
        <input type="checkbox" />
        <label>Star Alliance</label>
      </div>
    </div>
  );
}
export default Filter;

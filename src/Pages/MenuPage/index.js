import React from "react";
import "./MenuPage.css";
import { Card, Filtered } from "../../Component";
import { useFilter } from "../../Context/FilterContext";
import { useFetch } from "../../Context/FetchContext";
import Loading from "../../Asset/loading.gif";
import NoData from "../../Asset/noData.gif";

function MenuPage() {
  const { filteredList } = useFilter();
  const { isLoading } = useFetch();
  return (
    <div className="menu-page">
      <div className="menu-page-wrap">
        <Filtered />
        <div className="menu">
          <h3 className="menu-head">MENU</h3>
          {isLoading ? (
            <div className="loading">
              <img src={Loading} />
            </div>
          ) : filteredList.length > 0 ? (
            <ul className="menu-list">
              {filteredList.map((currentMenu) => {
                return <Card {...currentMenu} isMenu key={currentMenu.id} />;
              })}
            </ul>
          ) : (
            <div className="not-found">
              <img src={NoData} />
              <h3>Data Not Available</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;

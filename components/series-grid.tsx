import React from "react";
import Link from "next/link";
import { ICarSeries } from "../api-service/api-models";

const SeriesGrid = (props: { cars: ICarSeries[]; onClick: any }) => {
  const uniqueSeries = props.cars?.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.seriesName === value.seriesName
    ))
  )
  return (
    <div key={'carList' + uniqueSeries} className="choose-series">
      <h6 className="text-center"> Choose Series</h6>
      <ul className="list-unstyled d-flex flex-wrap">
        {uniqueSeries?.map((p, index) => {
          return (
            <li key={"car-grid-item" + index}>
              <a
                className="cursor-pointer text-white"
                onClick={() => {
                  props.onClick(p);
                }}
              >
                {p.seriesName.replace("Series", "")}
              </a>
              {/* <Link href="/details">{p.seriesName.replace("Series", "")}</Link> */}
            </li>
          );
        })}
        <li>
          <a
            className="text-white px-3 reset cursor-pointer"
            onClick={() => {
              props.onClick(null);
            }}>List All</a>
        </li>
      </ul>
    </div>
  );
};

export default SeriesGrid;

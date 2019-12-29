import React, { Component } from "react";
import {
  ReactiveBase,
  DataSearch,
  SingleRange,
  ResultCard
} from "@appbaseio/reactivesearch";
import src from "*.bmp";
class App extends Component {
  render() {
    return (
      <ReactiveBase
        app="CS419final"
        credentials="6q4HVxGDL:b7c3e659-e37f-4292-86fd-29233fc525be"
      >
        <DataSearch
          componentId="mainSearch"
          dataField={["original_title", "authors"]}
          queryFormat="and"
          iconPosition="left"
        />
        <SingleRange
          componentId="ratingsFilter"
          dataField="average_rating_rounded"
          title="Book Ratings"
          data={[
            { start: 4, end: 5, label: "★★★★ & up" },
            { start: 3, end: 5, label: "★★★ & up" },
            { start: 2, end: 5, label: "★★ & up" },
            { start: 1, end: 5, label: "★ & up" }
          ]}
          react={{
            and: "mainSearch"
          }}
        />
        <ResultCard
          componentId="results"
          dataField="original_title"
          react={{
            and: ["mainSearch"]
          }}
          onData={res => ({
            image: res.image_url,
            title: res.original_title,
            description: res.average_rating + " ★ "
          })}
        />
      </ReactiveBase>
    );
  }
}
export default App;

import React from "react";
import BrowseContainer from "../containers/browse";
import { UseContent } from "../hooks";
import { SelectionFilter } from "../utils";

export default function Browse() {
  const { series } = UseContent("series");
  const { films } = UseContent("films");
  const slides = SelectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}

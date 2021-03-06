import React from "react";
import { Provider } from "react-redux";

import initStore from "state/store";

import ImportExport from "../index";

export default {
  title: "Components/Settings/ImportExport",
};

export const Variants = () => {
  const { store } = initStore();
  return (
    <Provider store={store}>
      <ImportExport />
    </Provider>
  );
};

import React from "react";
import { Route } from "react-router-dom";
import MerchPage from "../components/pages/merch/merch-page/MerchPage";
import MerchAll from "../components/pages/merch/merch-all/MerchAll";
import MerchItem from "../components/pages/merch/merch-item/MerchItem";

const merchRoutes = [
  <Route key="/" index element={<MerchPage />} />,
  <Route key="/shop-all" path="shop-all" element={<MerchAll />} />,
  <Route key="/item/:id" path="item/:id" element={<MerchItem />} />,
];

export default merchRoutes;

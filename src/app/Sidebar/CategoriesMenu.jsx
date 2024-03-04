"use client";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/constant/utilities";

import CatagoryItem from "./CatagoryItem";
import { useCatagories } from "@/contexts/CatagoriesContext";

export default function CategoriesMenu() {
  const { catagories, isLoading } = useCatagories();

  return (
    <div className="sidebar-menu">
      <ul>
        {catagories.map((catagory) => (
          <CatagoryItem itemData={catagory} key={catagory.id} />
        ))}
      </ul>
    </div>
  );
}

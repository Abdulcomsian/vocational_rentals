"use client";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/constant/utilities";

import CatagoryItem from "./CatagoryItem";

export default function CategoriesMenu() {
  const [catagories, setCatagories] = useState([]);

  useEffect(function () {
    if (catagories.length > 0) return;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${BASE_URL}/api/show-category`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const parsedData = JSON.parse(result);
        console.log(parsedData);
        setCatagories(parsedData.data);
      })
      .catch((error) => console.error(error));
  }, []);

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

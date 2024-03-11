import Message from "@/app/components/Message";
import React from "react";
import { useState } from "react";

const DealItem = function ({ deal, onDeleteDeal, onEditDeal }) {
  const {
    id,
    deal_name,
    actual_price,
    discount_price,
    billing_interval,
    currency,
  } = deal;
  const offPercentage = ((actual_price - discount_price) / actual_price) * 100;
  const savedAmount = actual_price - discount_price;

  return (
    <div className="deal-body">
      <div className="deal-added">
        <div className="left">
          <h3>
            {offPercentage.toFixed(2)}% off {deal_name}
          </h3>
          <div className="price">
            ${discount_price}{" "}
            <span className="line-through">${actual_price}</span>{" "}
            <span>/ {billing_interval}</span>{" "}
          </div>
          <span className="total-save">Total Save ${savedAmount}</span>
        </div>
        <div className="right">
          <div className="actions">
            <a
              href="#"
              className="text-success"
              onClick={(e) => {
                e.preventDefault();
                onEditDeal(id);
              }}
            >
              <i className="las la-pencil-alt"></i>
            </a>
            <a
              href="#"
              className="text-danger mx-2"
              onClick={(e) => {
                e.preventDefault();
                onDeleteDeal(id);
              }}
            >
              <i className="lar la-trash-alt"></i>
            </a>
          </div>
          <a href="#" className="buy-button">
            Visit Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Deals({ deals, onDeleteDeal, onEditDeal }) {
  if (deals.length === 0)
    return (
      <Message>
        There is no deals selected yet, Click Add new deal to create new one.
      </Message>
    );

  return (
    <>
      {deals.map((deal) => (
        <DealItem
          deal={deal}
          onDeleteDeal={onDeleteDeal}
          onEditDeal={onEditDeal}
        />
      ))}
    </>
  );
}

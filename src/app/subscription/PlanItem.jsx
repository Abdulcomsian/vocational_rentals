import React from "react";

export default function PlanItem() {
  return (
    <div className="col-md-4">
      <div className="package-single">
        <span className="sale">$5.99</span>
        <h3>
          <b>$1</b>/Month
        </h3>
        <ul className="mt-4">
          <li>$1 first month, then $5.99/month.</li>
        </ul>
        <div className="action-btn mt-5">
          {!isAuthenticated && (
            <Link href="/signup" className="subscribe-btn">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

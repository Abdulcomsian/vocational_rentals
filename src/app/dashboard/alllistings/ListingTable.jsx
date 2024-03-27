import Link from "next/link";

function TableHead() {
  return (
    <thead>
      <tr>
        <th>Company Name</th>
        <th>Link</th>
        <th>Plan Type</th>
        <th>Has deal</th>
        <th>Action</th>
      </tr>
    </thead>
  );
}

function TableBody({
  columnData = [],
  onDeleteListing,
  onCancelPlan,
  onResumePlan,
}) {
  return (
    <tbody>
      {columnData.map((data) => (
        <tr key={data.id}>
          <td>
            {data.company_name} {/* <Link >Detail</Link> */}
          </td>
          <td>
            <Link
              href={`/[companyName]`}
              as={`/${data.slug}`}
              className="comapny-link"
            >
              Visit Link
            </Link>
          </td>
          <td>
            ${data.plan.recurring_price} / {data.plan.plan_type}
            {data.subscription_status === "active" ? (
              <button
                className="text-danger fs-10 d-block cancel-plan"
                onClick={() => onCancelPlan(data.subscription_id)}
              >
                Cancel Plan
              </button>
            ) : (
              <button
                className="text-danger fs-10 d-block cancel-plan"
                onClick={() => onResumePlan(data.subscription_id)}
              >
                Pause Plan
              </button>
            )}
          </td>
          <td>{data.has_deals ? "Yes" : "No"}</td>
          <td className="actions">
            <Link
              href={`updateTool?slug=${data.slug}&featured=${
                data.plan.plan_type === "Featured" ? true : false
              }&listingId=${data.id}`}
              className="text-success"
            >
              <i className="las la-pencil-alt"></i>
            </Link>
            <a
              href="#"
              className="text-danger mx-2"
              onClick={(e) => {
                e.preventDefault();
                onDeleteListing(data.id);
              }}
            >
              <i className="lar la-trash-alt"></i>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default function ListingTable({
  allListing = [],
  onDeleteListing,
  onCancelPlan,
  onResumePlan,
}) {
  return (
    <table className="table table-bordered justify-content-center">
      <TableHead />
      <TableBody
        columnData={allListing}
        onDeleteListing={onDeleteListing}
        onCancelPlan={onCancelPlan}
        onResumePlan={onResumePlan}
      />
    </table>
  );
}

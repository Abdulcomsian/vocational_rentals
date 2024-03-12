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

function TableBody({ columnData = [], onDeleteListing }) {
  console.log("COLUMN DATA", columnData);
  return (
    <tbody>
      {columnData.map((data) => (
        <tr key={data.id}>
          <td>{data.company_name}</td>
          <td>
            <Link href={`${data.company_link}`} className="comapny-link">
              Visit Link
            </Link>
          </td>
          <td>
            ${data.plan.recurring_price} / {data.plan.plan_type}
            <a
              href="#"
              className="text-danger fs-10 d-block cancel-plan"
              data-bs-toggle="modal"
              data-bs-target="#cancelModal"
            >
              Cancel Plan
            </a>
          </td>
          <td>{data.has_deals ? "Yes" : "No"}</td>
          <td className="actions">
            <a href={`addtool?${data.id}`} className="text-success">
              <i className="las la-pencil-alt"></i>
            </a>
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

export default function ListingTable({ allListing = [], onDeleteListing }) {
  return (
    <table className="table table-bordered justify-content-center">
      <TableHead />
      <TableBody columnData={allListing} onDeleteListing={onDeleteListing} />
    </table>
  );
}

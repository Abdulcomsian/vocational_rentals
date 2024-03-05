import { BASE_URL } from "@/constant/utilities";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CatagoryItem({ itemData }) {
  const pathname = usePathname();
  const { slug, category_name, category_image } = itemData;
  return (
    <li>
      <Link
        href={`/categories/${slug}`}
        className={`link ${
          pathname === `/categories/${slug}` ? "active-catagory" : ""
        }`}
      >
        <span
          className="categories"
          style={{
            maskImage: `url(https://admin.vacationrentals.tools/assets/category_images/default.svg)`,
          }}
        />
        {category_name}
      </Link>
    </li>
  );
}

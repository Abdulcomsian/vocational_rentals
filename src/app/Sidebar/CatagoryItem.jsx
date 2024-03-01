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
          style={{ maskImage: `url(${BASE_URL}/${category_image})` }}
        />
        {category_name}
      </Link>
    </li>
  );
}

import Link from "next/link";

type LinksArr = {
  label: string;
  link: string;
};

const Breadcrumbs = ({ linksArr }: { linksArr: LinksArr[] }) => {
  return (
    <nav className="flex gap-2 text-text-gray justify-center flex-wrap md:justify-start">
      {linksArr?.map((link, index) => (
        <div key={index} className="flex items-center">
          <Link
            href={link.link}
            className={index === linksArr.length - 1 ? "font-bold" : ""}
          >
            {link.label}
          </Link>
          {index !== linksArr.length - 1 && (
            <span className="relative top-[1px] ml-2"> {">"} </span>
          )}
        </div>
      ))}
    </nav>
  );
};
export default Breadcrumbs;

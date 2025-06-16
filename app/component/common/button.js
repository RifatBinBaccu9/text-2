import Link from "next/link";
export const Button = ({ text, href, icon, icons, click, className = "" }) => {
  const button = (
    <button
      type="submit"
      onClick={click}
      className={`flex items-center gap-2 w-fit md:text-base text-sm shadow-sm hover:shadow-md font-normal text-white hover:text-textHover bg-bgNormal hover:bg-bgHover rounded-md cursor-pointer  sm:px-[30px] px-[15px] sm:py-[10px] py-[5px] ${className}`}
    >
     {icons} {text} {icon}
    </button>
  );
  return href ? <Link href={href}>{button}</Link> : button;
};

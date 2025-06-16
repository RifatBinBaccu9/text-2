import Image from "next/image";
import Link from "next/link";

const ProductCateCard = ({ category }) => {
  const { id, image, title } = category;

  return (
    <div className="group relative bg-cardBg p-3 rounded-[10px] border border-cardBorder hover:border-bgNormal h-[180px] sm:h-[250px] transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden">

      {/* Category Image */}
      <Image
        src={image}
        alt={title || "Shop Category"}
        width={1100}
        height={1100}
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 z-10"
      />

      {/* Title Link Button */}
      <Link
        href="#"
        className="absolute inset-x-4 bottom-3 md:bottom-4 flex justify-center bg-white bg-opacity-70 py-1 rounded-md z-30 transition-colors duration-200 hover:bg-opacity-90"
      >
        <span className="text-base font-medium text-textNormal line-clamp-1">
          {title}
        </span>
      </Link>
    </div>
  );
};

export default ProductCateCard;

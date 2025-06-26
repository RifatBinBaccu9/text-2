import { CiSearch } from "react-icons/ci";

export const Search = ({className, classSearch, value, onChange, classInput, placeholder, name}) => {

    return (
        <div
      className={`w-full flex items-center gap-2 bg-[#F5F6FA] border border-[#D1D5DB] focus-within:border-[#6B7280] rounded-[20px] py-[10px] px-4 ${className}`}
    >
      <CiSearch className={`text-lg text-gray-600 ${classSearch}`} />
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          className={`outline-none bg-transparent w-full text-sm font-normal font-nunito text-textNormal ${classInput}`}
        />
      </div>

    )
}
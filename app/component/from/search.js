import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";

export const Search = ({className, classSearch, value, onChange, classInput, placeholder, name}) => {

    return (
        <div className={`w-full flex items-center gap-2 text-white bg-[#CFCFCF1D] border border-[#323D4E] hover:border-[#3E4C60] focus-within:border-[#4A5B72] rounded-[20px] py-[10px] px-4 ${className}`}>
        <CiSearch className={`text-lg ${classSearch}`} />
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          className={`outline-none bg-transparent w-full text-sm font-normal font-nunito text-white ${classInput}`}
        />
      </div>

    )
}
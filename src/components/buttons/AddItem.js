import { HiPlus } from "react-icons/hi";

const AddItem = ({link, children}) => {
    return ( 
        <a href={link} className="pr-3 pl-1 py-1 rounded-full bg-gray-100 flex items-center group hover:bg-gray-200 cursor-pointer"><span className="inline bg-gray-200 group-hover:bg-gray-300 text-gray-500 p-1 rounded-full"><HiPlus /></span><span className="text-xs text-gray-500 leading-none font-bold flex justify-center m-auto">{children}</span></a> 
     );
}
 
export default AddItem;

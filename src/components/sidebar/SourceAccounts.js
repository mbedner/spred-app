import AddItem from "../buttons/AddItem";

const SourceAccounts = () => {
    return ( 
        <div className="m-2">
            <form className="relative inline-block w-full">
                <select name="profile" id="" className="border rounded w-full px-2 py-2 text-sm font-semibold text-gray-800 tracking-wider overflow-hidden appearance-none" placeholder="Select a Company">
                    <option value="company">Company Name</option>
                    <option value="company">Company Name</option>
                    <option value="company">Company Name</option>
                    <option value="company">Company Name</option>
                    <option value="company">Company Name</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                </div>
            </form>
            <h6 className="font-semibold text-sm tracking-wider text-gray-800 mt-6"> <span>Your Channels</span></h6>
            <ul className="my-4">
                <li className="rounded group p-2 hover:bg-gray-100 text-sm tracking-wider flex items-center"><div className="w-6 h-6 rounded bg-gray-400 group-hover:bg-green-500 text-white text-2xs uppercase font-bold inline-flex items-center justify-center mr-1 cursor-pointer"><span>MB</span></div> <span>Source Platform</span></li>
                <li className="rounded group p-2 hover:bg-gray-100 text-sm tracking-wider flex items-center"><div className="w-6 h-6 rounded bg-gray-400 group-hover:bg-green-500 text-white text-2xs uppercase font-bold inline-flex items-center justify-center mr-1 cursor-pointer"><span>MB</span></div> <span>Source Platform</span></li>
                <li className="rounded group p-2 hover:bg-gray-100 text-sm tracking-wider flex items-center"><div className="w-6 h-6 rounded bg-gray-400 group-hover:bg-green-500 text-white text-2xs uppercase font-bold inline-flex items-center justify-center mr-1 cursor-pointer"><span>MB</span></div> <span>Source Platform</span></li>
                <li className="rounded group p-2 hover:bg-gray-100 text-sm tracking-wider flex items-center"><div className="w-6 h-6 rounded bg-gray-400 group-hover:bg-green-500 text-white text-2xs uppercase font-bold inline-flex items-center justify-center mr-1 cursor-pointer"><span>MB</span></div> <span>Source Platform</span></li>
            </ul>
            <AddItem
                link="www.google.com"
            >Add Source Platform</ AddItem>
        </div>
     );
}
 
export default SourceAccounts;
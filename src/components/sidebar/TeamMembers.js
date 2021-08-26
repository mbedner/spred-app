import AddItem from "../buttons/AddItem";

const TeamMembers = () => {
    return ( 
        <div className="border-t p-2 pb-4">
            <h6 className="font-semibold text-sm tracking-wider text-gray-800 mb-4"> <span>Your Team</span></h6>
            <div id="team-container" className="flex flex-auto flex-wrap mb-3">
                <div className="w-7 h-7 rounded-full bg-green-400 hover:bg-green-500 text-white text-xs uppercase font-bold flex items-center justify-center mr-1 cursor-pointer"><span>MB</span></div>
                <div className="w-7 h-7 rounded-full bg-red-400 hover:bg-red-500 text-white text-xs uppercase font-bold flex items-center justify-center mr-1 cursor-pointer"><span>MB</span></div>
                <div className="w-7 h-7 rounded-full bg-blue-400 hover:bg-blue-500 text-white text-xs uppercase font-bold flex items-center justify-center mr-1 cursor-pointer"><span>MB</span></div>
                <div className="w-7 h-7 rounded-full bg-yellow-400 hover:bg-yellow-500 text-white text-xs uppercase font-bold flex items-center justify-center mr-1 cursor-pointer"><span>MB</span></div>
                <div className="w-7 h-7 rounded-full bg-indigo-400 hover:bg-indigo-500 text-white text-xs uppercase font-bold flex items-center justify-center mr-1 cursor-pointer"><span>MB</span></div>

            </div>
            <AddItem 
                link="www.google.com"
            >Add Team Member</ AddItem>
        </div>
     );
}
 
export default TeamMembers;
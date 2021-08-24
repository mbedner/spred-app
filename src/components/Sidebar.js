import MainNav from "./sidebar/MainNav";
import MenuItems from "./sidebar/MenuItems";

const Sidebar = () => {
    return ( 
        <section id="sidebar" className="border-r h-full bg-white flex flex-row w-72">
            <MainNav />
            <MenuItems />
        </section>
     );
}
 
export default Sidebar;
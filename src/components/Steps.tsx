import DesktopSideBg from '../assets/images/bg-sidebar-desktop.svg'
import MobileSideBg from '../assets/images/bg-sidebar-mobile.svg';


const Sidebar = () => {
    return (
        <aside className='w-full md:w-md h-40 left-0 top-0 fixed md:h-full md:relative pl-10 pr-4 md:rounded-2xl overflow-hidden' >
            <div className='absolute inset-0 w-full'>
            <img src={DesktopSideBg} alt="Desktop Background" className='hidden md:block w-full h-full object-cover' />
            <img src={MobileSideBg} alt="Mobile Background" className='md:hidden w-full h-full object-cover' />
            </div>

            <div className='relative mt-10'>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, consectetur?</p>
            </div>
        </aside>
    );
};
export default Sidebar;

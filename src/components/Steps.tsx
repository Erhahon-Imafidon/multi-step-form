import DesktopSideBg from '../assets/images/bg-sidebar-desktop.svg';
import MobileSideBg from '../assets/images/bg-sidebar-mobile.svg';

const Sidebar = () => {
    const isActive = false;

    return (
        <aside className="w-full md:w-md h-40 left-0 top-0 fixed md:h-full md:relative pl-10 pr-4 md:rounded-2xl overflow-hidden">
            <div className="absolute inset-0 w-full">
                <img
                    src={DesktopSideBg}
                    alt="Desktop Background"
                    className="hidden md:block w-full h-full object-cover"
                />
                <img
                    src={MobileSideBg}
                    alt="Mobile Background"
                    className="md:hidden w-full h-full object-cover"
                />
            </div>

            <div className="relative mt-15 flex flex-row md:flex-col gap-8">
                <div className="flex items-center gap-x-5">
                    <div
                        className={`border-2 border-Blueish-200 rounded-full size-10 md:size-12 flex items-center justify-center  font-bold ${isActive ? 'bg-Blueish-200 text-black' : 'bg-transparent text-white'}`}
                    >
                        <span>1</span>
                    </div>

                    <div className="hidden md:flex flex-col uppercase">
                        <h3 className="text-Greyish-500">step 1</h3>
                        <h4 className="text-white text-lg font-bold">
                            your info
                        </h4>
                    </div>
                </div>

                <div className="flex items-center gap-x-5">
                    <div
                        className={`border-2 border-Blueish-200 rounded-full size-10 md:size-12 flex items-center justify-center  font-bold ${isActive ? 'bg-Blueish-200 text-black' : 'bg-transparent text-white'}`}
                    >
                        <span>2</span>
                    </div>

                    <div className="hidden md:flex flex-col uppercase">
                        <h3 className="text-Greyish-500">step 2</h3>
                        <h4 className="text-white text-lg font-bold">
                            select plan
                        </h4>
                    </div>
                </div>

                {/*step 3*/}
                <div className="flex items-center gap-x-5">
                    <div
                        className={`border-2 border-Blueish-200 rounded-full size-10 md:size-12 flex items-center justify-center  font-bold ${isActive ? 'bg-Blueish-200 text-black' : 'bg-transparent text-white'}`}
                    >
                        <span>3</span>
                    </div>

                    <div className="hidden md:flex flex-col uppercase">
                        <h3 className="text-Greyish-500">step 3</h3>
                        <h4 className="text-white text-lg font-bold">
                            add-ons
                        </h4>
                    </div>
                </div>

                {/*step 4*/}
                <div className="flex items-center gap-x-5">
                    <div
                        className={`border-2 border-Blueish-200 rounded-full size-10 md:size-12 flex items-center justify-center  font-bold ${isActive ? 'bg-Blueish-200 text-black' : 'bg-transparent text-white'}`}
                    >
                        <span>4</span>
                    </div>

                    <div className="hidden md:flex flex-col uppercase">
                        <h3 className="text-Greyish-500">step 4</h3>
                        <h4 className="text-white text-lg font-bold">
                            summary
                        </h4>
                    </div>
                </div>
            </div>
        </aside>
    );
};
export default Sidebar;

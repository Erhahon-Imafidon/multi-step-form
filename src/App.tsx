import Sidebar from './components/Steps.tsx';

const App = () => {
    return (
        <main className="bg-Blueish-100 font-ubuntu md:py-20 h-screen">
            <div className="bg-white p-5 w-full h-full container rounded-2xl">
                <Sidebar />
            </div>
        </main>
    );
};
export default App;

import Image from '../../assets/297770919_750611052893716_6450455485331645324_n.jpg'
const Header = () => {
    return (
        <div className='px-4 bg-slate-600'>
            <div className='max-w-[1400px] mx-auto '>
                <div className='flex justify-between items-center text-white py-3'>
            <h1 className="text-4xl font-bold">React Project</h1>
            <img className='rounded-full w-16 h-16' src={Image} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Header;
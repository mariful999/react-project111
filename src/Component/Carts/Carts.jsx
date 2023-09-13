import PropTypes from 'prop-types'
import Cart from '../Cart/Cart';
const Carts = ({readTime , blogTitle}) => {
    return (
        <div className="md:w-1/3">
            <div className="bg-gray-400 text-white text-xl md:text-3xl p-6 border-2 border-black rounded-2xl font-bold">
                <h2>Select all mark read: {readTime} min</h2>
            </div>
            <div className="bg--400 text-xl md:text-3xl mt-4 p-6 border-2 border-black rounded-2xl font-bold">
                <h2 className='mb-2'>Your Balance : </h2>
                <h2>Selected: </h2>
            </div>
            <div className='bg-gray-400 my-4 text-white md:text-3xl text-xl p-6 border-2 border-black rounded-2xl font-bold'>
            <h2>Add select title : </h2>
            {
                blogTitle.map((title) => <Cart key={title.id} title={title}></Cart>)
            }
            </div>
        </div>
    );
};
Carts.propTypes = {
    values: PropTypes.array,
    readTime: PropTypes.number,
    blogTitle: PropTypes.array
}
export default Carts;
import PropTypes from 'prop-types'

const Cart = ({title}) => {
    const {blog_title} = title;
    return (
        <div>
            <ul className='list-disc px-4'>
                <li>{blog_title}</li>
            </ul>
        </div>
    );
};
Cart.propTypes = {
    title: PropTypes.object
}

export default Cart;
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({values ,handleMarkRead ,handleSelect}) => {
    return (
        <div className=" md:w-2/3 grid md:grid-cols-2 grid-cols-1 gap-3 mb-4">
            {
                values.map(value=> <Blog
                    handleMarkRead={handleMarkRead} handleSelect={handleSelect} value={value} key={value.id}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    values: PropTypes.array,
    handleMarkRead: PropTypes.func,
    handleSelect: PropTypes.func
}
export default Blogs;
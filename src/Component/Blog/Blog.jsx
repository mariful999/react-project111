import PropTypes from 'prop-types'

const Blog = ({value , handleMarkRead ,handleSelect}) => {
    const {cover_img , author_img , author , blog_title ,read_time , salery} = value;
    return (
        <div className='border-black border-2 p-3 space-y-1 bg-gray-300'>
            <img className='w-full h-[300px]' src={cover_img} alt="" />
            <h1 className='text-3xl font-bold'>{blog_title}</h1>
            <div className='flex justify-between items-center gap-3 px-2'>
                <div className='flex gap-3 items-center'>
                <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                
                <div>
                    <h2 className='text-2xl font-bold'>{author}</h2>
                </div>
            </div>
            <div>
                <h2 className='text-xl font-medium'>{read_time} min read</h2>
            </div>
            </div>
            <p className="text-2xl font-semibold px-2">Salery: ${salery}</p>
            <div className='flex justify-around'>
                <button onClick={()=>handleMarkRead(read_time)}  className='text-purple-600 text-xl font-semibold focus:text-red-500 underline'>Mark Read</button>
                <button onClick={()=>handleSelect(value)} className='btn bg-purple-400 px-4 py-2 text-xl font-medium rounded-lg focus:bg-slate-600 focus:text-white'>Select</button>
            </div>
        </div>
    );
};
Blog.propTypes = {
    value: PropTypes.object,
    handleMarkRead: PropTypes.func,
    handleSelect: PropTypes.func
}
export default Blog;
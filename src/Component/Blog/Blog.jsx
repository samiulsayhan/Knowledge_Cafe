import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags}=blog;
    return (
        <div className="mb-20 space-y-4">
            <img  src={cover} alt={`cover picture of the title ${title}`} />
            <div className="flex justify-between items-center  mt-8">
                <div className="flex">
                    <img className="w-14 h-14 rounded-full" src={author_img} alt="" />
                    <div className="ml-6">
                        <h2 className="text-2xl">{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(blog)} className="ml-2 text-2xl text-red-500"><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mt-4">{title}</h2>
            <p className="mt-5">
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href="">{hash}</a> </span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className="text-purple-700 underline font-bold">Mark as read</button>
        </div>
    );
};

export default Blog;
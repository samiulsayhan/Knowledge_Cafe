import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks,readingTime}) => {

    
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h2 className="text-4xl ">Reading Time: {readingTime}</h2>
            </div>
            <h1 className="text-3xl text-center">Bookmarks: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx)=> <Bookmark 
                    key={idx} 
                    bookmark={bookmark}
                ></Bookmark>)
            }

        </div>
    );
};
Bookmarks.propTypes={
    readingTime: PropTypes.number,
    bookmarks: PropTypes.array

}

export default Bookmarks;


const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className="bg-slate-600 p-4 m-4 rounded-xl">
            <h1 className="text-2xl">{title}</h1>
        </div>
    );
};

export default Bookmark;
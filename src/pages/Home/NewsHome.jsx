import { Link } from "react-router-dom";

const NewsHome = ({news}) => {
    const {title,image_url, details,rating,_id} = news;
    return (
        <div className="mb-7 p-5">
            <h2 className="font-bold mb-5">{title}</h2>
            <img src={image_url} alt="" />
            {
                details.length > 200 ? <p className="mt-5">{details.slice(0,200)}
                <Link to={`/news/${_id}`} className="text-blue-700"> Read more...</Link></p> 
                :  <p>{details}</p>
            }
            {/* <p>{rating}</p> */}
        </div>
    );
};

export default NewsHome;
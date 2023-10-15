import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-slate-100 py-3 px-2">
            <button className="bg-[#D72050] py-1 px-3 text-white">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-20" to='/'>I can be a React component, multiple React components.....</Link>
                <Link className="mr-20" to='/'>I can be a React component, multiple React components.....</Link>
                <Link className="mr-20" to='/'>I can be a React component, multiple React components.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;
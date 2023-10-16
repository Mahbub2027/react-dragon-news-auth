import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsHome from "./NewsHome";

const Home = () => {
    const news = useLoaderData([]);
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            {/* <div className="text-3xl font-poppins font-bold">This is Home page.</div> */}
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-2xl">Dragon News Home</h2>
                    {
                        news.map(aNews => <NewsHome
                             key={aNews._id} a
                             news={aNews}
                             ></NewsHome>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
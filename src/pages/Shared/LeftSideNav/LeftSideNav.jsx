import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">All Caterogy {category.length}</h2>
            {
                category.map(category => <Link 
                    className="block mb-6 text-[#9F9F9F] text-lg" 
                    key={category.id}
                    to={`/category/${category.id}`}
                    >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;
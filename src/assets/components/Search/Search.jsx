import './Search.scss';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";


function Search() {
    const [search, setSearch] = useState('');
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const handleButtonClick = (e) => {
        e.preventDefault();
        setActive(!active);
        if (search.trim() !== '') {
            navigate(`/search?query=${encodeURIComponent(search)}`);
        }
    };

    return (
        <div className={"example"}>
            <input
                type="text"
                placeholder=""
                value={search}
                name="search"
                onChange={(e) => setSearch(e.target.value)}
                className={active ? "active" : ""} // додаємо клас
            />
            <Link className="button-search" to="#" onClick={handleButtonClick}>
                <img src='https://i.ibb.co/KyY2zC2/search.png' alt="SearchPage" />
            </Link>
        </div>
    );
}

export default Search;
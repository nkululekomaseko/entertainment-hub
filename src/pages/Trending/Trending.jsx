import React, {useState, useEffect} from 'react';
import './trending.css'
import axios from "axios";
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';


const themovie_trending_all_week = (p) => {
    return `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${p}`;
} 

const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const {data} = await axios.get(themovie_trending_all_week(page));
        setContent(data.results);
    }

    useEffect(() => {
        fetchTrending();
    }, [page])

    return (
        <div>
            <span className="pageTitle">Trending</span>
            <div className="trending">
                {
                    content && content.map((item) => (
                        <SingleContent 
                            key={item.id} 
                            id={item.id} 
                            poster={item.poster_path} 
                            title={item.title || item.name} 
                            date={item.first_air_date || item.release_date} 
                            media_type={item.media_type}
                            vote_average={item.vote_average}
                        />
                    ))
                }
            </div>
            <CustomPagination setPage={setPage} />
            
        </div>
    )
}

export default Trending


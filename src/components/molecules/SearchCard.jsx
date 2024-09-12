import Star from "../atoms/Star";
import NoPhoto from "../../assets/no_photo.jpg"
import { Link } from "react-router-dom";

export default function SearchCard({ item }) {
    return (
        <><Link to={`/movie/detail/${item.id}`}> <div className="card card-search">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <img className="search-card-img"
                        src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : NoPhoto} alt={`Poster for ${item.title}`} />
                    <div className="ms-3">
                        <div className="d-flex">
                            <h5 style={{ fontSize: 'large' }} className="text-break mb-0">{item.title}</h5>
                            {item.vote_average ? <>
                                <div className="ms-2">
                                    <Star rate={item.vote_average} />
                                </div></> : <></>}
                        </div>
                        <small>{item.release_date ? new Date(item.release_date).getFullYear() : '-'}</small>
                    </div>
                </div>
            </div>
        </div>
        </ Link></>
    )
}
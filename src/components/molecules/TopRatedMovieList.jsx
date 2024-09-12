import { Link } from "react-router-dom";
import NoPhoto from "../../assets/no_photo.jpg"
import Star from "../atoms/Star";

export default function TopRatedMovieList({ item, rank }) {
    return (
        <>
            <Link to={`movie/detail/${item.id}`}>
                <div className="row py-2 px-4 align-items-center item-list">
                    <div className="col-2 col-lg-2 text-center">
                        <h5 className="mb-0">#{rank}</h5>
                    </div>
                    <div className="col-lg-2 d-none d-lg-block">
                        <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : NoPhoto} style={{ borderRadius: '4px' }}
                            className="w-100  " alt={`Poster for ${item.title}`} />
                    </div>
                    <div className="col-10 col-lg-8">
                        <div className="d-flex">
                            <span className="fw-medium">{item.title}</span>
                            <div className="ms-2">
                                <Star rate={item.vote_average} />
                            </div>
                        </div>
                        <hr className="my-1" />
                        <small>{item.release_date ? new Date(item.release_date).getFullYear() : '-'}</small>
                    </div>
                </div>
            </Link>
        </>
    )
}
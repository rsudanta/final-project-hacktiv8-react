import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './style.css'
import { getSearchAutoComplete } from '../../redux/action'
import AutocompleteList from './AutocompleteList'

export default function Navbar() {
    const search = useSelector((state) => state.searchReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('')
    const [debounceTimeout, setDebounceTimeout] = useState(null);

    const handleOnSearch = (e) => {
        const query = e.target.value;
        if (query.length < 3) {
            dispatch({ type: 'SET_SEARCH_AUTOCOMPLETE', payload: [] });
        }
        setSearchTerm(query);

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        const newTimeout = setTimeout(() => {
            if (query) {
                dispatch(getSearchAutoComplete(query));
            }
        }, 500);

        setDebounceTimeout(newTimeout);
    }

    const handleSelectMovie = () => {
        setSearchTerm('')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search/${searchTerm}`)
        setSearchTerm('')
        console.log('Search term submitted:', searchTerm);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark sticky-top">
                <div className="container">
                    <Link className='navbar-brand fw-bold' to='/'>Movie</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/'>Movie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/tv-series'>TV Series</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input
                                className="form-control mr-sm-2 autocomplete"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={handleOnSearch}
                            />
                            {searchTerm.length > 2 && search.autocomplete.length > 0 &&
                                <ul className="suggestions-list">
                                    {
                                        search.autocomplete.map((item) => (
                                            <li key={item.id}>
                                                <Link className='row align-items-center' to={`${item.media_type}/detail/${item.id}`} onClick={handleSelectMovie}>
                                                    <AutocompleteList item={item} />
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            }
                        </form>

                    </div>
                </div>
            </nav >
        </>
    )
}
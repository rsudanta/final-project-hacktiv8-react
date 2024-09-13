import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { getSearchAutoComplete } from '../../redux/action'
import AutocompleteList from './AutocompleteList'
import './style.css'

export default function Navbar() {
    const search = useSelector((state) => state.searchReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('')
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const collapseRef = useRef(null);
    const autocompleteRef = useRef(null)
    const [isMouseOverSuggestions, setIsMouseOverSuggestions] = useState(false);

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
        if (collapseRef.current) {
            collapseRef.current.classList.remove('show');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (collapseRef.current) {
            collapseRef.current.classList.remove('show');
        }
        navigate(`/search/${searchTerm}`)
        setSearchTerm('')
    }

    const handleBlur = () => {
        if (!isMouseOverSuggestions) {
            setTimeout(() => {
                if (!isMouseOverSuggestions) {
                    if (autocompleteRef.current) {
                        autocompleteRef.current.classList.add('d-none');
                    }
                }
            }, 100);
        }
    };

    const handleFocus = () => {
        if (autocompleteRef.current) {
            autocompleteRef.current.classList.remove('d-none');
        }
    };

    const handleMouseEnter = () => {
        setIsMouseOverSuggestions(true);
    };

    const handleMouseLeave = () => {
        setIsMouseOverSuggestions(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark sticky-top">
                <div className="container">
                    <Link className='navbar-brand fw-bold' to='/'>Movie</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={collapseRef}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/'>Movie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/watchlist'>Watchlist</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input
                                className="form-control mr-sm-2 autocomplete"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchTerm}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                                onChange={handleOnSearch}
                            />
                            {searchTerm.length > 2 && search.autocomplete.length > 0 &&
                                <ul className="suggestions-list" ref={autocompleteRef}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}>
                                    {
                                        search.autocomplete.map((item) => (
                                            item.media_type === 'movie' &&
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
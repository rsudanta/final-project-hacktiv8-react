import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import './style.css'
export default function Navbar() {
    const [searchItems, setSearchItems] = useState([])

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log('Enter key pressed with query:', event.target.value);
        }
    };

    const handleOnSearch = (query) => {
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDE4Y2Y1NWM2YzY2MmIwMGZiY2IzOGQ4OGNjMjc3NCIsIm5iZiI6MTcyNTk2NzE5My4zOTYyNzIsInN1YiI6IjVmMjNlNTg5ZDc1YmQ2MDAzN2Y3NWYwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bgI4Jm8nZyVGJ8Xtk3KY0xdd-82PLRx_K2gnOg01ags'
            }
        };

        axios.request(options)
            .then(function (response) {
                setSearchItems(response.data.results);
            })
            .catch(function (error) {
                console.error(error);
                setSearchItems([]);
            });
    }

    const formatResult = (item) => {
        return (
            <>
                <Link className='row' to={`/detail/${item.id}`}>
                    <div className="col-2">
                        <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                    </div>
                    <div className="col-10">
                        <span className='text-wrap' style={{ display: 'block', textAlign: 'left' }}>{item.title}</span>
                        <span style={{ display: 'block', textAlign: 'left' }}>{item.release_date ? new Date(item.release_date).getFullYear() : '-'}</span>
                    </div>
                </Link>
            </>
        )
    }

    const handleOnSelect = (item) => {
        console.log('Selected item:', item);
        // For example, redirect to a movie detail page:
        // window.location.href = `/movie/${item.id}`;
    };

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
                                <a className="nav-link active" aria-current="page" href="#">Movie</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TV Series</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div style={{ width: '100%', minWidth: '300px' }}>
                                <div onKeyDown={handleEnterKeyPress}>
                                    <ReactSearchAutocomplete
                                        items={searchItems}
                                        resultStringKeyName='id'
                                        fuseOptions={{ keys: ["title", "release_date"] }}
                                        inputDebounce={100}
                                        onSearch={handleOnSearch}
                                        onSelect={handleOnSelect}
                                        showIcon={false}
                                        autoFocus
                                        maxResults={5}
                                        showNoResults={false}
                                        styling={{ borderRadius: '4px', backgroundColor: 'var(--bs-body-bg)', border: 'var(--bs-border-width) solid var(--bs-border-color)', color: 'var(--bs-body-color)', fontFamily: '  font-family: "Poppins", sans-serif;', hoverBackgroundColor: 'black' }}
                                        formatResult={formatResult}
                                        placeholder='Search'
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
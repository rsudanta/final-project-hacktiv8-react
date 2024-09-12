import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center"
                style={{ height: '80vh' }}>
                <div className="text-center">
                    <h1>404</h1>
                    <h4>Page not found</h4>
                    <Link className="btn btn-outline-danger btn-sm mt-3" to={'/'}>Home</Link>
                </div>
            </div>
        </>)
}
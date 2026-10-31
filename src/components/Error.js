import { Link, useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
    const error = useRouteError();
    console.error(error);
    const status = error?.status || 404;
    const statusText = error.error?.message || "Page not found";

    return (
        <div className="error-page">
            <div className="error-card">
                <div className="error-code">{status}</div>
                <h1 className="error-title">
                    {status === 404 ? "Oops! Page not found" : "Something went wrong"}
                </h1>
                <p className="error-message">
                    {status === 404
                        ? "The page you are looking for doesn't exist or has been moved."
                        : `${status}: ${statusText}`}
                </p>
                <Link to="/" className="error-btn">
                    Go back home
                </Link>
            </div>
        </div>
    );
};

export default Error;
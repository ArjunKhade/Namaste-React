import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oops Something went wrong!!!</h2>
            {error.status}: {error.statusText}
        </div>
    )
}

export default Error;
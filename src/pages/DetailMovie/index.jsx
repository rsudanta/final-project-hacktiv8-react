import { useParams } from "react-router-dom"

export default function DetailMoviePage() {
    const params = useParams();
    return (
        <>
            this is detail movie {params.id}
        </>
    )
}
import { useParams } from "react-router-dom"

export default function TVDetailPage() {
    const params = useParams();
    return (
        <>
            this is detail TV {params.id}
        </>
    )
}
import { useParams } from "react-router-dom"

export default function PersonDetailPage() {
    const params = useParams();
    return (
        <>
            this is detail person {params.id}
        </>
    )
}
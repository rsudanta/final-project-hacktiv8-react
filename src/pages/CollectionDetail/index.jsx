import { useParams } from "react-router-dom"

export default function CollectionDetailPage() {
    const params = useParams();
    return (
        <>
            this is detail collcetion {params.id}
        </>
    )
}
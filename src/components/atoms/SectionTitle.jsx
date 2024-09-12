export default function SectionTitle({title}) {
    return (<>
        <div className="d-flex">
            <div className="v-line"></div>
            <h3 className="mb-0 ms-2">{title}</h3>
        </div>
    </>)
}
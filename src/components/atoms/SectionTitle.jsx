export default function SectionTitle({title}) {
    return (<>
        <div className="d-flex">
            <div className="v-line" style={{ borderLeft: '6px solid red', borderRadius: '4px' }}></div>
            <h3 className="mb-0 ms-2">{title}</h3>
        </div>
    </>)
}
export default function Tag({ tag, color }) {
    return (<>
        <span className="ms-2 px-1"
            style={{ color: 'white', backgroundColor: color, fontSize: 'x-small', borderRadius: '4px' }}>
            {tag}</span>
    </>)
}
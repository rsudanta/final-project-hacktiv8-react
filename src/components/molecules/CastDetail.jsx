import NoPhoto from "../../assets/no_photo.jpg"

export default function CastDetail({ item }) {
    return (<>
        <div className="d-flex align-items-center">
            <div>
                <img className='img-cast' src={item.profile_path ? `https://image.tmdb.org/t/p/w500/${item.profile_path}` : NoPhoto} alt={`${item.name}`} />
            </div>
            <div className='ms-3'>
                <div>{item.name}</div>
                <small style={{ color: 'gray', fontSize: 'small' }}>{item.character}</small>
            </div>
        </div>

    </>)
}
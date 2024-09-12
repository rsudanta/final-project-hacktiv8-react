import Tag from "../atoms/Tag";

export default function AutocompleteList({ item }) {
    const tagColor = (tag) => {
        switch (tag) {
            case 'movie':
                return 'darkred'
            case 'tv':
                return 'darkgreen'
            default:
                return 'black';
        }
    }

    return (
        <>
            {
                item.media_type === 'movie' && (
                    <>
                        {item.poster_path && (
                            <div className="col-2">
                                <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                            </div>
                        )}
                        <div className={item.poster_path ? 'col-10' : 'col-12'}>
                            <span className='text-wrap fw-medium' style={{ display: 'block', textAlign: 'left' }}>
                                {item.title}
                                <Tag tag={item.media_type.toUpperCase()} color={tagColor(item.media_type)} />
                            </span>
                            <small style={{ display: 'block', textAlign: 'left', color: 'grey' }}>{item.release_date ? new Date(item.release_date).getFullYear() : '-'}</small>
                        </div>
                    </>
                )
            }
            {
                item.media_type === 'tv' && (
                    <>
                        {item.poster_path && (
                            <div className="col-2">
                                <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                            </div>
                        )}
                        <div className={item.poster_path ? 'col-10' : 'col-12'}>
                            <div className='text-wrap fw-medium' style={{ display: 'block', textAlign: 'left' }}>
                                {item.name}
                                <Tag tag={item.media_type.toUpperCase()} color={tagColor(item.media_type)} />
                            </div>
                            <small style={{ display: 'block', textAlign: 'left', color: 'grey' }}>{item.first_air_date ? new Date(item.first_air_date).getFullYear() : '-'}</small>
                        </div>
                    </>
                )
            }
        </>
    )
}

import star from "../../assets/Star.png"
import NoPhoto from "../../assets/user_photo.jpg"

export default function Review({ item }) {
    function formatDate(dateString) {
        // Parse the input date string into a Date object
        const date = new Date(dateString);

        // Options for formatting the date and time
        const dateOptions = { day: '2-digit', month: 'long', year: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit' };

        // Format date and time separately
        const formattedDate = date.toLocaleDateString('en-GB', dateOptions); // 'en-GB' for the date format you want
        const formattedTime = date.toLocaleTimeString('en-GB', timeOptions); // 'en-GB' for the time format you want
        // Combine formatted date and time
        return `${formattedDate} &#183; ${formattedTime}`;
    }


    return (<>
        <div className="d-flex justify-content-between">
            <div className="d-flex mt-4 align-items-center">
                <div>
                    <img className='img-reviewer' src={item.avatar_path ? `https://image.tmdb.org/t/p/w500/${item.avatar_path}` : NoPhoto} alt="Profile" />
                </div>
                <div className="ms-3">
                    <p className="mb-0 fw-semibold">{item.author}</p>
                    <small style={{ color: '#CCCCCC' }} dangerouslySetInnerHTML={{ __html: formatDate(item.created_at) }}></small>
                </div>
            </div>
            <div className="mt-3 d-flex align-items-center">
                <div><img style={{ height: '18px' }} src={star} alt="" /></div>
                <div className='ms-1'><span className="fw-semibold">{item.author_details.rating ? (item.author_details.rating) : '-'}</span><span style={{ color: 'grey' }}>/10</span></div>
            </div>
        </div>
        <div className="mt-2" >{item.content}</div>
        <hr /></>)
}
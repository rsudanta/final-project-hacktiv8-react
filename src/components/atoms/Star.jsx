import star from "../../assets/Star.png"

export default function Star({ rate }) {
    return (
        <>
            <div className="d-flex px-2 justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
                <img style={{ height: '18px' }} src={star} alt="" />
                <div className='ms-1 fw-medium'>{rate}</div>
            </div>
        </>
    )
}
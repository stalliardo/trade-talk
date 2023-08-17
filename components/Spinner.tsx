const Spinner = ({classes}: {classes?: string}) => {
    return (
        <div className={`w-1/2 flex justify-center mx-auto ${classes}`}>
            <span className='loader'></span>
        </div>
    )
}

export default Spinner
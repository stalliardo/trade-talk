const Spinner = ({classes, button}: {classes?: string, button?: boolean}) => {
    return (
        <div className={`w-1/2 flex justify-center mx-auto ${classes}`}>
            <span className={`loader ${button && 'button'}`}></span>
        </div>
    )
}

export default Spinner
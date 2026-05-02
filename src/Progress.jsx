function Progress({total,index}) {
    return (
        <div className="progress">
            <progress max={total} value={index + 1} />
            <label> {index + 1} / {total}</label>
        </div>
    )
}

export default Progress

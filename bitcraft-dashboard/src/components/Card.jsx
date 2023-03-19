const Card = (props) => {
    return (
        <div className="card-single">
            <div className="card-body">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
                        <path
                            d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z" />
                    </svg>
                </span>
                <div>
                    <h5>{props.title}</h5>
                    <h4>{props.visits}</h4>
                </div>
            </div>
            <div className="card-footer">
                <a href="#">View all</a>
            </div>
        </div>
    )
}

export default Card
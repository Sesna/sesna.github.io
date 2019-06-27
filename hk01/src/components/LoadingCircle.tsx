import React from 'react'
export default class LoadingCircle extends React.Component {
    render() {
        return (<div className="loading-circle">
            <div className="rond">
                <div className="test"></div>
            </div>
            <div className="load">loading</div>
        </div>
        )

    }
}
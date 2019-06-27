import React from 'react'
export default class loadingBar extends React.Component {
    render() {
        return (
            <div className="loading-bar">
                <div className="load">loading</div>
                <div className="bar-list">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                    <div className="bar bar4"></div>
                    <div className="bar bar5"></div>
                    <div className="bar bar6"></div>
                </div>
            </div>
        )

    }
}
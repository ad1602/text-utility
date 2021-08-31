import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-dark ${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><b>{props.title}</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                        </ul>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                            <label class="form-check-label text-light" for="flexSwitchCheckDefault">Enable {props.mode==='dark'?'light':'dark'} mode</label>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
Navbar.propTypes = { title: PropTypes.string.isRequired }
Navbar.defaultProps = { title: 'set title here' }
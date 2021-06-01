import React from 'react';
// import styled, { css } from 'styled-components/macro';
// import { FaRockrms } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import styles from 'Navbar.css';
// import { menuData } from '../../data/MenuData';
// import { Button } from './Button';
// import { ImParagraphRight } from 'react-icons/im';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <input type="checkbox" name="" id="check" />

        <div className="logo-container">
          <h3 className="logo">
            SAW-IT<span>Movie App</span>
          </h3>
        </div>

        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              <Link className="nav-link" style={{ '--i': '.6s' }} to="/">
                Home
              </Link>
              <Link className="nav-link" style={{ '--i': '.85s' }}>
                <a href="/#">
                  Movie
                  {/* <i className="fas fa-caret-down"></i> */}
                </a>
                <div className="dropdown">
                  <ul>
                    <Link className="dropdown-link" to="/">
                      <a href="/#">Link 1</a>
                    </Link>
                    <li className="dropdown-link">
                      <a href="/#">Link 2</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/#">
                        Link 3<i className="fas fa-caret-down"></i>
                      </a>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <a href="/#">Link 1</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="/#">Link 2</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="/#">Link 3</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="/#">
                              More
                              {/* <i className="fas fa-caret-down"></i> */}
                            </a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="/#">Link 1</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="/#">Link 2</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="/#">Link 3</a>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-link">
                      <a href="/#">Link 4</a>
                    </li>

                    <div className="arrow"></div>
                  </ul>
                </div>
              </Link>
              <Link className="nav-link" style={{ '--i': '1.1s' }}>
                <a href="/#">
                  Services
                  {/* <i className="fas fa-caret-down"></i> */}
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="/#">Link 1</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/#">Link 2</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="/#">
                        Link 3<i className="fas fa-caret-down"></i>
                      </a>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <a href="/#">Link 1</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="/#">Link 2</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="/#">Link 3</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="/#">
                              More
                              {/* <i className="fas fa-caret-down"></i> */}
                            </a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="/#">Link 1</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="/#">Link 2</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="/#">Link 3</a>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-link">
                      <a href="/#">Link 4</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </Link>
              <li className="nav-link" style={{ '--i': '1.35s' }}>
                <a href="/#">About</a>
              </li>
            </ul>
          </div>

          <div className="log-sign" style={{ '--i': '1.8s' }}>
            <a href="/#" className="btn transparent">
              Log in
            </a>
            <a href="/#" className="btn solid">
              Sign up
            </a>
          </div>
        </div>

        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

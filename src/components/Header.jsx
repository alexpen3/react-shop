import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import { Repo } from "./Repo";
const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="pur">
          <div className="nav-wrapper">
            <Bounce className="bounce">
              <a href="!#" className="brand-logo">
                React Shop
              </a>
            </Bounce>
          </div>
          <Repo />
        </nav>
      </>
    );
  }
}

export { Header };

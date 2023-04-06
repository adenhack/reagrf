import React, { Component } from "react";
import { Nav, NavItem, NavLink, Input } from "reactstrap";
import { SiAlwaysdata } from "react-icons/si";

export default class Navi extends Component {
  render() {
    return (
      <div className="mt-4 mb-4">
        <Nav className="d-flex justify-content-between">
          <NavItem>
            <NavLink>
              <h3 style={{color:"blue"}}>
                <SiAlwaysdata className="mr-2"/>
                Hatay Veri İstatistiği
              </h3>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <Input
                style={{ width: "350px" }}
                placeholder="Aramak İstediğiniz Tarihi Yazınız"
                onChange={this.props.getSearch}
              />
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

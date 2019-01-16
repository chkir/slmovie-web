/*
 * @Author: BaojunCZ
 * @Date: 2019-01-06 21:41:03
 * @LastEditors: your name
 * @LastEditTime: 2019-01-15 20:30:46
 * @Description: Header
 */
import React from "react";
import { Input } from "antd";
import Color from "../../utils/color";

const Search = Input.Search;

const Styles = {
  Content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "10vw",
    paddingRight: "10vw",
    background: Color.PrimaryColor,
    height: "80px",
    flexWrap: "wrap",
  },
};

const Header = (props) => (
  <div style={Styles.Content}>
    <div style={{ textAlign: "center" }}><text style={{ color: "#fff", fontSize: "2em" }}>双龙影视</text></div>
    {SearchDiv(props)}
  </div>
);

const SearchDiv = (props) => {
  if (props.history !== undefined) {
    return <div style={{ textAlign: "center" }}>
      <Search placeholder="片名/导演/演员"
        style={{ width: "35vw" }}
        onSearch={value => {
          if (value.length > 0) {
            props.history.push("/search/" + value);
          }
        }} />
    </div>
  } else {
    return null;
  }
};

export default Header;
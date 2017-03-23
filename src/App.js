import React from "react";
import detectPrint from "react-detect-print";
import Child from "./Child";

const margin = 20;

const mapPropsToStyle = props => ({
  margin,
  borderWidth: 5,
  borderStyle: "solid",
  borderColor: "black",
  textAlign: "center",
  boxSizing: "border-box",
  mozBoxSizing: "border-box",
  webkitBoxSizing: "border-box",
  width: props.printing ? 816 - margin * 2 : null
});

const childrenStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexFlow: "row wrap"
};

class App extends React.Component {
  render = () => (
    <div style={mapPropsToStyle(this.props)}>
      <h2>Printing? {JSON.stringify(this.props.printing)}</h2>
      <div style={childrenStyle}>
        <Child printing={this.props.printing} />
        <Child printing={this.props.printing} />
      </div>
    </div>
  );
}

export default detectPrint(App);

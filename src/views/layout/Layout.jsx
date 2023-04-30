import React from 'react'
import { Header, Icon, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import Function from "../function-component/Function";

function Layout() {
  return (
    <div className="ui container">
      <Header as="h2" icon textAlign="center">
        <Icon name="code" circular />
        <Header.Content>Function Tester</Header.Content>
      </Header>
      <Function textAlign="center"></Function>
      {/* {props.children} */}
    </div>
  );
}

export default Layout;

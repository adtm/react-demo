import React, { Component } from 'react';
import { Card, TabElement } from '../../components/compound/styles';
import { Time, Location, SecretMessage } from '../../components/compound/Styled';

class Tabs extends React.Component {
  state = {
    activeIndex: 1
  };

  selectActiveIndex = index => this.setState({ activeIndex: index });

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onTabSelect: this.selectActiveIndex,
        activeIndex: this.state.activeIndex
      });
    });
    return children;
  }
}

class TabList extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onSelect: () => this.props.onTabSelect(index)
      });
    });
    return children;
  }
}

class Tab extends React.Component {
  render() {
    return (
      <TabElement onClick={this.props.onSelect}>
        {this.props.children}
      </TabElement>
    );
  }
}

class TabContent extends React.Component {
  render() {
    return this.props.children;
  }
}

class TabContents extends React.Component {
  render() {
    const { children } = this.props;
    const { activeIndex } = this.props;
    return children[activeIndex];
  }
}

class NewTabs extends React.Component {
  render() {
    return (
      <Card>
        <Tabs>
          <TabList>
            <Tab>Location</Tab>
            <Tab>Time</Tab>
            <Tab>Secret Message</Tab>
          </TabList>
          <TabContents>
            <TabContent><Location /></TabContent>
            <TabContent><Time /></TabContent>
            <TabContent><SecretMessage /></TabContent>
          </TabContents>
        </Tabs>
      </Card>
    );
  }
}

/**
 * You can pass mapped data if you want
 * @extends Component
 */
class CompoundComponents extends Component {
  render() {
    return <NewTabs />;
  }
}

export default CompoundComponents;

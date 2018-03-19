import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Container,
  TabElement
} from '../pages/compoundComponents/styles.js';
import { Time, Location, SecretMessage } from './compound/components';

class Tabs extends React.Component {
  state = {
    activeIndex: 1
  };

  static childContextTypes = {
    activeIndex: PropTypes.number.isRequired,
    onTabSelect: PropTypes.func.isRequired
  };

  getChildContext() {
    return {
      activeIndex: this.state.activeIndex,
      onTabSelect: this.selectActiveIndex
    };
  }

  selectActiveIndex = index => this.setState({ activeIndex: index });

  render() {
    return this.props.children;
  }
}

class TabList extends React.Component {
  static contextTypes = {
    onTabSelect: PropTypes.func.isRequired
  };

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onSelect: () => this.context.onTabSelect(index)
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
  static contextTypes = {
    activeIndex: PropTypes.number.isRequired
  };

  render() {
    const { children } = this.props;
    const { activeIndex } = this.context;
    return children[activeIndex];
  }
}

class NewTabs extends React.Component {
  render() {
    return (
      <Card>
        <Tabs>
          <div>
            <TabList>
              <Tab>Location</Tab>
              <Tab>Time</Tab>
              <Tab>Secret Message</Tab>
            </TabList>
          </div>
          <TabContents>
            <TabContent>
              <Location />
            </TabContent>
            <TabContent>
              <Time />
            </TabContent>
            <TabContent>
              <SecretMessage />
            </TabContent>
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

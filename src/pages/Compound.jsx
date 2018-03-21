import React, { Component } from 'react';
import {
  Card,
  TabElement
} from './compoundComponents/styles';
import { Time, Location, SecretMessage } from './compound/components';


class Tabs extends React.Component {
  state = {
    activeIndex: 0
  };

  selectActiveIndex = index => this.setState({ activeIndex: index });

  renderTabs = () => {
    const { data } = this.props;
    return data.map((d, i) => {
      return (
        <TabElement key={i} onClick={() => this.selectActiveIndex(i)}>
          {d.title}
        </TabElement>
      );
    });
  };

  renderContent = () => {
    const { data } = this.props;
    const { activeIndex } = this.state;
    return data[activeIndex].component;
  };

  render() {
    const tabs = this.renderTabs();
    const content = this.renderContent();

    return (
      <Card>
        {tabs}
        {content}
      </Card>
    );
  }
}

class CompoundComponents extends Component {
  render() {
    const tabData = [
      {
        title: 'Location',
        component: <Location />
      },
      {
        title: 'Time',
        component: <Time />
      },
      {
        title: 'Secret Message',
        component: <SecretMessage />
      }
    ];

    return <Tabs data={tabData} />;
  }
}

export default CompoundComponents;

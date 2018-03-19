import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Container,
  Card,
  TextContainer,
  Image,
  LocationContainer,
  Address,
  TimeContainer,
  TabElement,
  SecretMessageText
} from '../pages/compoundComponents/styles.js';

const Time = () => (
  <TimeContainer>
    <p>Thursday, March 22, 2018 </p>
    <p>6:00 PM to 9:00 PM </p>
    <a href="#!">Add to Calendar</a>
  </TimeContainer>
);

const Location = () => (
  <LocationContainer>
    <p>Zenitech</p>
    <Address>Žalgirio g.90, Vilnius</Address>
  </LocationContainer>
);

const SecretMessage = () => <SecretMessageText>You won! 🤩</SecretMessageText>;
// ^^ Components we will be using

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

    console.log(tabs);
    console.log(content);
    return (
      <Container>
        <Card>
          {tabs}
          {content}
        </Card>
      </Container>
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

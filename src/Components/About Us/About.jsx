import React from "react";
import { CardContainer, CardWrapper, Card, Icon, CardTitle, CardDescription } from "./AboutStyle";

const About = () => {
  return (
    <CardContainer>
      <CardWrapper>
        <Card>
          <Icon>👨‍⚕️</Icon>
          <CardTitle>Ermin Muslic</CardTitle>
          <CardDescription>
            Uradio je...Jeste
          </CardDescription>
        </Card>
        <Card>
          <Icon>👩‍🔬</Icon>
          <CardTitle>Ilhan</CardTitle>
          <CardDescription>
            Team member 2
          </CardDescription>
        </Card>
        <Card>
          <Icon>👨‍🔬</Icon>
          <CardTitle>Alem</CardTitle>
          <CardDescription>
            Team member 3
          </CardDescription>
        </Card>
        <Card>
          <Icon>👩‍🏫</Icon>
          <CardTitle>Ne znam coveku ime</CardTitle>
          <CardDescription>
            Team member 4
          </CardDescription>
        </Card>
      </CardWrapper>
    </CardContainer>
  );
};

export default About;

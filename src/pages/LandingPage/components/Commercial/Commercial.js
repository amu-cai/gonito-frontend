import React from 'react';
import {
  FlexColumn,
  FlexRow,
  ImageBackground,
} from '../../../../utils/containers';
import { Body, H2, Medium } from '../../../../utils/fonts';
import CircleNumber from '../../../../components/generic/CircleNumber';
import Media from 'react-media';
import theme from '../../../../utils/theme';
import commercialImage from '../../../../assets/commercial-image.svg';

const Commercial = () => {
  const listItemsContent = [
    'A company comes to CSI with a business need',
    'CSI determines the need with an appropriate challenge on AMU-Eval',
    'The challenge is solved by willing users',
    'The company appropriately rewards users who have contributed to the required outcome',
  ];

  const mobileRender = () => {
    return (
      <FlexColumn as="section" alignmentX="flex-start">
        <H2 as="h2" margin="0 0 24px 0">
          Commercial challenges
        </H2>
        <FlexColumn gap="20px">
          <Body as="p">
            The artificial intelligence center works with companies by accepting
            machine learning challenges from them that are available to solve on
            AMU-Eval. Each commercial challenge is properly scored which
            translates into an award for solving it according to the client's
            requirements.
          </Body>
          <FlexColumn as="ul" gap="16px" alignmentX="flex-start">
            {listItemsContent.map((item, index) => {
              return (
                <FlexRow
                  key={`commercial-item-${index}`}
                  width="100%"
                  gap="8px"
                >
                  <CircleNumber number={String(index + 1)} />
                  <Medium width="80%" as="li">
                    {item}
                  </Medium>
                </FlexRow>
              );
            })}
          </FlexColumn>
          <Body as="p">
            Open challenges can allow you to find the right people to work with.
            Find a challenge for your team and take it on!
          </Body>
        </FlexColumn>
      </FlexColumn>
    );
  };

  const desktopRender = () => {
    return (
      <FlexRow gap="46px">
        <FlexColumn as="section" alignmentX="flex-start" maxWidth="490px">
          <H2 as="h2" margin="0 0 48px 0">
            Commercial challenges
          </H2>
          <FlexColumn gap="32px">
            <Body as="p">
              The artificial intelligence center works with companies by
              accepting machine learning challenges from them that are available
              to solve on AMU-Eval. Each commercial challenge is properly scored
              which translates into an award for solving it according to the
              client's requirements.
            </Body>
            <FlexColumn as="ul" gap="24px" alignmentX="flex-start">
              {listItemsContent.map((item, index) => {
                return (
                  <FlexRow
                    key={`commercial-item-${index}`}
                    width="100%"
                    gap="16px"
                  >
                    <CircleNumber number={String(index + 1)} />
                    <Medium width="80%" as="li">
                      {item}
                    </Medium>
                  </FlexRow>
                );
              })}
            </FlexColumn>
            <Body as="p">
              Open challenges can allow you to find the right people to work
              with. Find a challenge for your team and take it on!
            </Body>
          </FlexColumn>
        </FlexColumn>
        <ImageBackground
          image={commercialImage}
          width="180px"
          height="274px"
          size="contain"
        />
      </FlexRow>
    );
  };

  return (
    <>
      <Media query={theme.mobile}>{mobileRender()}</Media>
      <Media query={theme.desktop}>{desktopRender()}</Media>
    </>
  );
};

export default Commercial;

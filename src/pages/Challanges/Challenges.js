import React from 'react';
import { Body, H1 } from '../../utils/fonts';
import { FlexColumn, FlexRow, Svg } from '../../utils/containers';
import Search from '../../components/generic/Search';
import Pager from '../../components/generic/Pager';
import FiltersMenu from '../../components/challenges_list/FiltersMenu';
import challengeSearchQueryHandler from './challengeSearchQueryHandler';
import renderChallenges from './renderChallenges';
import Media from 'react-media';
import theme from '../../utils/theme';
import cupIco from '../../assets/cup_ico.svg';
import getChallenges from '../../api/getChallenges';
import { CALC_PAGES, CHALLENGES_STATUS_FILTER } from '../../utils/globals';
import Loading from '../../components/generic/Loading';
import ChallengesStyle from './ChallengesStyle';

const Challenges = () => {
  const [pageNr, setPageNr] = React.useState(1);
  const [challengesFromAPI, setChallengesFromAPI] = React.useState([]);
  const [challenges, setChallenges] = React.useState([]);
  const [filtersMenu, setFiltersMenu] = React.useState(false);
  const [sortBy, setSortBy] = React.useState(0);
  const [status, setStatus] = React.useState(CHALLENGES_STATUS_FILTER.BOTH);
  const [challengeType, setChallengeType] = React.useState(0);
  const [commercial, setCommercial] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    challengesRequest();
  }, []);

  const challengesRequest = () => {
    getChallenges(setChallengesFromAPI);
    getChallenges(setChallenges, setLoading);
  };

  const searchQueryHandler = (event) => {
    challengeSearchQueryHandler(
      event,
      challengesFromAPI,
      setPageNr,
      setChallenges
    );
  };

  const nextPage = () => {
    if (pageNr !== CALC_PAGES(challenges)) {
      let newPage = pageNr + 1;
      setPageNr(newPage);
    }
  };

  const previousPage = () => {
    if (pageNr !== 1) {
      let newPage = pageNr - 1;
      setPageNr(newPage);
    }
  };

  const toggleFiltersMenu = () => {
    let newFiltersMenu = !filtersMenu;
    setFiltersMenu(newFiltersMenu);
  };

  const mobileRender = () => {
    return (
      <>
        <FiltersMenu
          translateX={filtersMenu ? '0' : '100vw'}
          opacity={filtersMenu ? '1' : '0'}
          toggleFiltersMenu={toggleFiltersMenu}
          sortByHandler={setSortBy}
          statusHandler={setStatus}
          challengeTypeHandler={setChallengeType}
          commercialHandler={setCommercial}
          sortBy={sortBy}
          status={status}
          challengeType={challengeType}
          commercial={commercial}
        />
        <ChallengesStyle as="main" id="start">
          <FlexColumn className="ChallengesStyle__page-container">
            <H1 as="h1">Challenges</H1>
            <Search
              searchQueryHandler={searchQueryHandler}
              filterButton
              toggleFiltersMenu={toggleFiltersMenu}
            />
            <FlexColumn width="100%">
              <Loading visible={loading} />
              {renderChallenges(pageNr, challenges)}
            </FlexColumn>
          </FlexColumn>
          {!loading && (
            <Pager
              pageNr={pageNr}
              pages={CALC_PAGES(challenges)}
              width="48px"
              borderRadius="64px"
              nextPage={nextPage}
              previousPage={previousPage}
              number={`${pageNr} / ${CALC_PAGES(challenges)}`}
            />
          )}
        </ChallengesStyle>
      </>
    );
  };

  const desktopRender = () => {
    return (
      <>
        <FiltersMenu
          toggleFiltersMenu={toggleFiltersMenu}
          transBackDisplay="none"
          sortByHandler={setSortBy}
          statusHandler={setStatus}
          challengeTypeHandler={setChallengeType}
          commercialHandler={setCommercial}
          sortBy={sortBy}
          status={status}
          challengeType={challengeType}
          commercial={commercial}
        />
        <ChallengesStyle as="main" id="start">
          <FlexColumn className="ChallengesStyle__page-container">
            <FlexRow className="ChallengesStyle__page-header-container">
              <FlexColumn className="ChallengesStyle__page-header">
                <H1 as="h1">Challenges</H1>
                <Body className="ChallengesStyle__header-content">
                  Increase your machine learning skills by competing in our
                  exciting challenges.
                </Body>
                <Search searchQueryHandler={searchQueryHandler} />
              </FlexColumn>
              <Svg src={cupIco} className="ChallengesStyle__main-image" />
            </FlexRow>
            <FlexColumn width="100%">
              <Loading visible={loading} />
              {renderChallenges(pageNr, challenges)}
            </FlexColumn>
          </FlexColumn>
          {!loading && (
            <Pager
              pageNr={pageNr}
              pages={CALC_PAGES(challenges)}
              width="72px"
              borderRadius="64px"
              nextPage={nextPage}
              previousPage={previousPage}
              number={`${pageNr} / ${CALC_PAGES(challenges)}`}
            />
          )}
        </ChallengesStyle>
      </>
    );
  };

  return (
    <>
      <Media query={theme.mobile}>{mobileRender()}</Media>
      <Media query={theme.desktop}>{desktopRender()}</Media>
    </>
  );
};

export default Challenges;

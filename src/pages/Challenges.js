import React from "react";
import {H1} from "../utils/fonts";
import {FlexColumn, Grid} from "../utils/containers";
import Search from "../components/elements/Search";
import MiniChallenge from "../components/elements/MiniChallenge";
import Pager from "../components/elements/Pager";
import {ELEMENTS_PER_PAGE, API} from "../utils/globals";
import FiltersMenu from "../components/elements/FiltersMenu";
import _searchQueryHandler from "./_searchQueryHandler";

const Challenges = () => {
    const [pageNr, setPageNr] = React.useState(1);
    const [challengesFromAPI, setChallengesFromAPI] = React.useState([]);
    const [challenges, setChallenges] = React.useState([]);
    const [filtersMenu, setFiltersMenu] = React.useState(false);
    const [sortBy, setSortBy] = React.useState(0);
    const [status, setStatus] = React.useState(0);
    const [challengeType, setChallengeType] = React.useState(0);
    const [commercial, setCommercial] = React.useState(0);

    React.useEffect(() => {
        challengesRequest();
    }, []);

    const challengesRequest = () => {
        fetch(`${API}/list-challenges`)
            .then(response => response.json())
            .then(data => {
                setChallengesFromAPI(data);
                setChallenges(data);
            });
    }

    const sortByHandler = (value) => {
        setSortBy(value);
    }

    const statusHandler = (value) => {
        setStatus(value)
    }

    const challengeTypeHandler = (value) => {
        setChallengeType(value);
    }

    const commercialHandler = (value) => {
        setCommercial(value);
    }

    const calcPages = () => {
        return Math.ceil(challenges.length / ELEMENTS_PER_PAGE);
    }

    const searchQueryHandler = (event) => {
        _searchQueryHandler(event, challengesFromAPI, setPageNr, setChallenges);
    }

    const nextPage = () => {
        if (pageNr !== calcPages(challenges)) {
            let newPage = pageNr + 1;
            setPageNr(newPage);
        }
    }

    const previousPage = () => {
        if (pageNr !== 1) {
            let newPage = pageNr - 1;
            setPageNr(newPage);
        }
    }

    const renderChallenges = () => {
        const n = (pageNr - 1) * ELEMENTS_PER_PAGE;
        return (
            challenges.slice(n, n + ELEMENTS_PER_PAGE).map((challenge, index) => {
                return (
                    <MiniChallenge key={`challenge-${index}`} title={challenge.title} type={challenge.type}
                                   description={challenge.description} metric={challenge.mainMetric}
                                   bestScore={challenge.bestScore} baseline={challenge.baseline}
                                   prize={challenge.prize} deadline={challenge.deadline}/>
                );
            })
        )
    }

    const toggleFiltersMenu = () => {
        let newFiltersMenu = !filtersMenu;
        setFiltersMenu(newFiltersMenu);
    }

    return (
        <>
            <FiltersMenu translateX={filtersMenu ? '0' : '100vw'} opacity={filtersMenu ? '1' : '0'}
                         toggleFiltersMenu={toggleFiltersMenu}
                         sortByHandler={sortByHandler} statusHandler={statusHandler}
                         challengeTypeHandler={challengeTypeHandler} commercialHandler={commercialHandler}
                         sortBy={sortBy} status={status} challengeType={challengeType} commercial={commercial}/>
            <FlexColumn as='main' alignmentY='flex-start' width='100%'
                        minHeight='100vh' padding='90px 0 32px 0'>
                <FlexColumn alignmentX='flex-start' width='80%'>
                    <H1 as='h1' margin='0 0 20px 0'>
                        Challenges
                    </H1>
                    <Search searchQueryHandler={searchQueryHandler} toggleFiltersMenu={toggleFiltersMenu}/>
                    <FlexColumn width='100%'>
                        <Grid margin='32px 0' gridGap='32px 0'>
                            {renderChallenges()}
                        </Grid>
                    </FlexColumn>
                </FlexColumn>
                <Pager pageNr={pageNr} pages={calcPages()}
                       nextPage={nextPage} previousPage={previousPage}/>
            </FlexColumn>
        </>
    );
}

export default Challenges;
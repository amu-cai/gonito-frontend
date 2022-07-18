import React from "react";
import {FlexColumn, FlexRow, Grid} from "../../utils/containers";
import getChallengeSubmissions from "../../api/getChallengeSubmissions";
import {Body, Medium} from "../../utils/fonts";

const Table = (props) => {
    const headerElements = ['#', 'submitter', 'when', 'result', 'entries'];
    const [challengeData, setChallengeData] = React.useState({});

    React.useEffect(() => {
        challengeDataRequest();
    });

    const challengeDataRequest = () => {
        getChallengeSubmissions(setChallengeData, props.challengeName);
    }

    const renderSubmissions = () => {
        const submissions = challengeData.submissions;
        if (submissions) {
            return (
                <FlexColumn as='tbody'>
                    {submissions.map((submission, index) => {
                        return (
                            <Grid as='tr' gridTemplateColumns='1fr 3fr 3fr 1fr 1fr' gridGap='10px'
                                  key={`leaderboard-row-${index}`}>
                                <Body as='td'>
                                    {index}
                                </Body>
                                <Body as='td'>
                                    {submission.submitter}
                                </Body>
                                <Body as='td'>
                                    {submission.when.slice(11, 16)} {submission.when.slice(0, 10)}
                                </Body>
                                <Body as='td'>
                                    {submission.evaluations[0].score.slice(0, 7)}
                                </Body>
                                <Body as='td' textAlign='right' padding='0 2px 0 0'>
                                    {submission.version.length}
                                </Body>
                            </Grid>
                        );
                    })}
                </FlexColumn>
            );
        }
    }

    return (
        <>
            <FlexColumn as='table'>
                <Grid as='thead' gridTemplateColumns='1fr 3fr 3fr 1fr 1fr' gridGap='10px' width='100%'>
                    {headerElements.map((elem, index) => {
                        return (
                            <FlexRow as='tr' key={`leaderboard-header-${index}`}
                                     alignmentX={elem === 'entries' ? 'flex-end' : 'flex-start'}>
                                <Medium as='th'>{elem}</Medium>
                            </FlexRow>
                        )
                    })}
                </Grid>
                {renderSubmissions()}
            </FlexColumn>
        </>
    );
}

export default Table;
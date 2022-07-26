import {ELEMENTS_PER_PAGE} from "../../../utils/globals";
import {FlexColumn, FlexRow, Grid} from "../../../utils/containers";
import {Body} from "../../../utils/fonts";
import styled from "styled-components";

const Line = styled(FlexRow)`
  position: absolute;
  top: -6px;
  left: 0;
  width: 100%;
  background-color: ${({theme}) => theme.colors.dark04};
  height: 1px;
`;

const _renderSubmissions = (pageNr, submissions) => {
    const n = (pageNr - 1) * ELEMENTS_PER_PAGE;
    if (submissions) {
        return (
            <FlexColumn as='tbody'>
                {submissions.slice(n, n + ELEMENTS_PER_PAGE).map((submission, index) => {
                    return (
                        <Grid as='tr' key={`leaderboard-row-${index}`} gridTemplateColumns='1fr 3fr 3fr 1fr 1fr'
                              gridGap='10px' margin='10px 0 0 0' position='relative'>
                            <Line as='td'/>
                            <Body as='td'>
                                {index + n + 1}
                            </Body>
                            <Body as='td'>
                                {submission.submitter}
                            </Body>
                            <Body as='td'>
                                {submission.when.slice(11, 16)} {submission.when.slice(0, 10)}
                            </Body>
                            <Body as='td'>
                                {submission.evaluations[0].score}
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

export default _renderSubmissions;
import React from 'react';
import {FlexRow} from '../../utils/containers';
import styled from 'styled-components';
import {H3} from '../../utils/fonts';
import {Link} from 'react-router-dom';
import PropsTypes from 'prop-types';

const AuthHeaderStyle = styled(FlexRow)`
  border-width: 1px 1px 0 1px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.dark03};
  width: 260px;
  height: 48px;
  justify-content: flex-start;
  gap: 24px;
  padding: 0 20px;
  box-shadow: ${({theme}) => theme.authHeaderShadow};

  @media (min-width: ${({theme}) => theme.overMobile}) {
    justify-content: space-around;
  }

  h1 {
    color: ${({theme}) => theme.colors.green};
  }

  a {
    font-family: 'Kanit', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${({theme}) => theme.colors.dark};
    text-decoration: none;

    @media (min-width: ${({theme}) => theme.overMobile}) {
      font-size: 24px;
      line-height: 26px;
    }
  }
`;

const AuthHeader = (props) => {
    if (props.register) {
        return (
            <AuthHeaderStyle>
                <H3 as='h1' order='2'>
                    Register
                </H3>
                <Link to='/login'>
                    Sign in
                </Link>
            </AuthHeaderStyle>
        );
    } else {
        return (
            <AuthHeaderStyle>
                <H3 as='h1'>
                    Sign in
                </H3>
                <Link to='/register'>
                    Register
                </Link>
            </AuthHeaderStyle>
        );
    }
};

AuthHeader.propTypes = {
    register: PropsTypes.bool.isRequired,
};

export default AuthHeader;
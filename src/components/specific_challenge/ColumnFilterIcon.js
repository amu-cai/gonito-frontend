import React from 'react';
import {Svg} from '../../utils/containers';
import arrow from '../../assets/arrow.svg';
import filterIco from '../../assets/filter_direction.svg';
import theme from '../../utils/theme';

const ColumnFilterIcon = (props) => {
    const renderSecondIcon = () => {
        if (props.index === props.active) {
            return (
                <Svg width='8px' src={filterIco} backgroundColor={theme.colors.dark}
                     margin='0 0 0 2px' rotate={props.rotateIcon ? '0' : '180deg'}/>
            );
        } else {
            return (
                <Svg width='8px' src={arrow} backgroundColor={theme.colors.dark}
                     margin='0 0 2px 0'/>
            );
        }
    };

    return (
        <>
            <Svg width='8px' rotate='180deg' src={arrow}
                 backgroundColor={theme.colors.dark} margin='2px 0 0 0'/>
            {renderSecondIcon()}
        </>
    );
};

export default ColumnFilterIcon;
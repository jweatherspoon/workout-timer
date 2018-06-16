import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexContainer = styled.div`
    display: ${props => props.hidden ? 'none' : 'flex'};
    height: 100%;
    width: 100%;

    flex-direction: ${props => props.direction};

    align-items: ${props => props.center ? 'center' : props.align}
    justify-content: ${props => props.center ? 'center': props.justify}

    min-height: ${props => props.minHeight ? `${props.minHeight}px` : '100%'};
    padding-right: ${props => props.paddingRight}px;
`;

FlexContainer.propTypes = {
    direction: PropTypes.oneOf([
        'row',
        'column',
        'row-reverse',
        'column-reverse'
    ]),
    align: PropTypes.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'baseline',
        'stretch',
    ]),
    justify: PropTypes.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around'
    ]),
}

export default FlexContainer;
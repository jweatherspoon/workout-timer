import styled from 'styled-components';

function GetFontSize(spanType) {
    let fontSize = 1;
    switch(spanType) {
        case 'SM':
            fontSize = 1;
            break;
        case 'MD': 
            fontSize = 1.5;
            break;
        case 'LG':
            fontSize = 2;
            break;
        case 'XL':
            fontSize = 2.5;
            break;
        default: break;
    }
    return fontSize;
}

const DefaultSpan = styled.span`
    font-weight: ${props => props.weight};
    letter-spacing: ${props => props.spaced}px;

    color: ${props => props.color ? props.color : 'inherit'};

    ${props => props.center ? 'text-align: center' : ''};
    
    font-style: ${props => props.fontStyle};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
`;

const SmallText = styled(DefaultSpan)`
    font-size: ${GetFontSize('SM')}em;
`;


const MedText = styled(DefaultSpan)`
    font-size: ${GetFontSize('MD')}em;
`;

const LargeText = styled(DefaultSpan)`
    font-size: ${GetFontSize('LG')}em;
`;

const XLText = styled(DefaultSpan)`
    font-size: ${GetFontSize('XL')}em;
`;

export { 
    SmallText,
    MedText,
    LargeText,
    XLText
};
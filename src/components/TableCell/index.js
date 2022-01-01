import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import styles from '../../styles';
import Utils from '../../utils';

const TableCell = (props) => {
    const { text, align, vertical, __totalElements, __elementsWidthArray, width } = props;

    const totalWidth = Utils.sumOfArray(__elementsWidthArray);
    const totalElementsThatHaveWidth = __elementsWidthArray.filter(width => width > 0).length;

    let style = { width: width + "%" };

    if(width){
        style.width = width + "%";
    } else{
        style.width = Utils.calculateWidth(totalWidth, __totalElements-totalElementsThatHaveWidth);
    }
    if (horizontal === 'center' || horizontal === 'right' || horizontal === 'left') {
        style.justifyContent = horizontal;
    }
    if(vertical === 'center' || vertical === 'start' || vertical === 'end'){
        style.alignItems = vertical;
    }
    return (
        <>
            <View style={Utils.combineStyles(styles.headerCol, style)}>
                <Text style={styles.headerCell}>{text}</Text>
            </View>
        </>
    )
}

TableCell.propTypes = {
    /**
     * The width for this table cell.
     * If not set, the width will be calculated based on the total width of the row.
     * @default 0
     */
    width: PropTypes.number,

    /**
     * The text to display in the header cell
     */
    text: PropTypes.string.isRequired,

    /**
     * The style to apply to the header cell. It can be one of the following:
     * - 'left'
     * - 'center'
     * - 'right'
     * @default 'left'
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
     */
    horizontal: PropTypes.oneOf(['left', 'right', 'center']),

    /**
     * The vertical alignment for the header cell. It can be one of the following:
     * - 'start'
     * - 'center'
     * - 'end'
     * @default 'start'
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
     */
    vertical: PropTypes.oneOf(['start', 'center', 'end']),
}

TableCell.defaultProps = {
    width: 0,
    align: 'left',
}

export default TableCell;
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import styles from '../../styles';
import Utils from '../../utils';

const TableCell = (props) => {
    const { text, align, totalElements, width, totalWidth, totalElementsThatHaveWidth } = props;
    let style = { width: width + "%" };

    if(width){
        style.width = width + "%";
    } else{
        style.width = Utils.calculateWidth(totalWidth, totalElements-totalElementsThatHaveWidth);
    }
    if (align === 'center' || align === 'right' || align === 'left') {
        style.textAlign = align;
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
     * The text to display in the header cell
     */
    text: PropTypes.string.isRequired,

    /**
     * The style to apply to the header cell
     */
    align: PropTypes.oneOf(['left', 'right', 'center']),
}

export default TableCell;
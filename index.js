import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import Utils from './utils';

const TableRow = (props) => {
    const { width, disableMargin } = props;
    let style = { width: width + "%" };

    if(disableMargin){
        style.margin = 0;
    }

    let totalWidth = React.Children.map(props.children, child => child.props.width || 0);
    let totalElementsThatHaveWidth = totalWidth.filter(width => width > 0).length;
    totalWidth = totalWidth.reduce((a, b) => a + b, 0);

    const renderChildren = React.Children.map(props.children, (child) => {
        if (child.type === TableCell) {
            return React.cloneElement(child, { totalElements: React.Children.count(props.children), totalWidth: totalWidth, totalElementsThatHaveWidth });
        }
        if(child.type === TableRow) {
            return React.cloneElement(child);
        }
    })
    return (
        <>
            <View style={Utils.combineStyles(styles.tableRow, style)}>
                {renderChildren}
            </View>
        </>
    )
}

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


export default {
    TableRow,
    TableCell,
}
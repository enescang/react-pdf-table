import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import styles from '../../styles';
import Utils from '../../utils';
import PropTypes from 'prop-types';
import TableCell from '../TableCell';

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

export default TableRow;
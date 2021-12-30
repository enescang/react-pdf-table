import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import styles from '../../styles';
import Utils from '../../utils';
import PropTypes from 'prop-types';
import TableCell from '../TableCell';

const TableRow = (props) => {
    const { width, disableMargin } = props;
    let style = { width: width + "%" };

    if(width){
        style.width = width + "%";
    }else{
        style.width = "auto";
    }

    if(disableMargin){
        style.margin = 0;
    }

    let totalWidth = React.Children.map(props.children, child => child.props.width || 0);

    const renderChildren = React.Children.map(props.children, (child) => {
        if (child.type === TableCell) {
            return React.cloneElement(child, { __totalElements: React.Children.count(props.children), __elementsWidthArray: totalWidth,  });
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

TableRow.propTypes = {
    /**
     * The with of the table row
     * @default 0
     */
    width: PropTypes.number,
    /**
     * Disable margin for the row
     * @default false
     */
    disableMargin: PropTypes.bool,
}

TableRow.defaultProps = {
    width: 0,
    disableMargin: false,
}


export default TableRow;
import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    tableRow: { 
        display:'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        // borderRadius: 5,
        borderStyle: "solid",
        borderColor: '#bfbfbf',
        marginLeft:10,
        marginRight:10,
    },
    headerCol: {
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 1,
        borderStyle: "solid",
        borderColor: '#bfbfbf',
    },
    headerCell: {
        margin: "auto",
        marginHorizontal: 5,
        fontSize: 16,
    },
});

export default styles;
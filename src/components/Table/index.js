import React from 'react';
import PropTypes from 'prop-types';

const generateHeader = (headers) => {
    const headerHTML = [];
    headerHTML.push(<tr className='table-header-row'>
        {headers.map((data, idx) => <th key={`table-header-${idx}`} className='table-header-row-cell'>{data}</th>)}
    </tr>);
    return headerHTML;
};

const generateBody = (rows) => {
    const bodyHTML = [];
    rows.forEach((rowData, index) => {
        bodyHTML.push(<tr className='table-body-row'>
            {Object.keys(rowData).map((key, idx) => <td key={`${index}-${idx}`} className='table-body-row-cell'>{rowData[key]}</td>)}
        </tr>);
    });
    return bodyHTML;
};

const generateFooter = (footer) => {
    const footerHTML = [];
    footerHTML.push(<tr className='table-footer-row'>
        {footer.map((data, idx) => <td key={`table-footer-${idx}`} className='table-footer-row-cell'>{data}</td>)}
    </tr>);
    return footerHTML;
};

const Table = ({
    id = '',
    headerData = [],
    bodyData = [],
    footerData = [],
}) => (<div className='table-container'>
    <table className='table' id={id}>
        <thead className='table-header'>{generateHeader(headerData)}</thead>
        <tbody className='table-body'>{generateBody(bodyData)}</tbody>
        {footerData.length > 0 && <tfoot className='table-footer'>{generateFooter(footerData)}</tfoot>}
    </table>
</div>);

Table.propTypes = {
    id: PropTypes.string,
    headerData: PropTypes.array,
    bodyData: PropTypes.array,
    footerData: PropTypes.array,
};

export default Table;

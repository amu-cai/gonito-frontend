import React from 'react';
import TableRowItems from '../TableRowItems/TableRowItems';
import TableRowFooter from '../TableRowFooter/TableRowFooter';
import MobileTableStyle from './MobileTableStyle';

const MobileTable = (props) => {
  return (
    <MobileTableStyle as="table">
      {props.elements.map((item, i) => {
        return (
          <tr key={`table-row-${i}`} className="TableStyle__tr">
            <TableRowItems orderedKeys={props.orderedKeys} item={item} i={i} />
            <TableRowFooter
              deleteItem={() => {
                props.setItemToHandle(item);
                props.setDeletePopUp(true);
              }}
              editItem={() => {
                props.setItemToHandle(item);
                props.setEditPopUp(true);
              }}
              rowFooter={props.rowFooter}
              item={item}
              i={i}
            />
          </tr>
        );
      })}
    </MobileTableStyle>
  );
};

export default MobileTable;

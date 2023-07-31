import React from 'react';
import TableStyle from './styles/TableStyle';
import TableHeader from './components/TableHeader';
import TableRowItems from './components/TableRowItems';
import RowsBackgroundStyle from './styles/RowsBackgroundStyle';
import TableRowFooter from './components/TableRowFooter';
import deleteSubmission from '../../../api/deleteSubmission';
import theme from '../../../utils/theme';
import DeletePopUp from './components/DeletePopUp';
import MobileTable from './components/MobileTable';
import Media from 'react-media';
import EditPopUp from './components/EditPopUp';

const Table = ({
  items,
  orderedKeys,
  popUpMessageHandler,
  sortByUpdate,
  rowFooter = true,
}) => {
  const [, updateState] = React.useState();
  const tableUpdate = React.useCallback(() => updateState({}), []);
  const [deletedItems, setDeletedItems] = React.useState([]);
  const [deletePopUp, setDeletePopUp] = React.useState(false);
  const [editPopUp, setEditPopUp] = React.useState(false);
  const [itemToHandle, setItemToHandle] = React.useState(null);

  const itemsToRender = items.filter((item) => !deletedItems.includes(item));

  const deleteItem = async (item) => {
    await deleteSubmission(
      item,
      deletedItems,
      setDeletedItems,
      popUpMessageHandler,
      theme
    );
  };

  const desktopRender = () => {
    return (
      <>
        <DeletePopUp
          item={itemToHandle}
          setDeletePopUp={setDeletePopUp}
          deletePopUp={deletePopUp}
          deleteItem={deleteItem}
        />
        <EditPopUp
          item={itemToHandle}
          setEditPopUp={setEditPopUp}
          editPopUp={editPopUp}
        />
        <TableStyle rowFooter={rowFooter}>
          <TableHeader
            orderedKeys={orderedKeys}
            sortByUpdate={sortByUpdate}
            tableUpdate={tableUpdate}
          />
          {itemsToRender.map((item, i) => {
            return (
              <tr key={`table-row-${i}`} className="TableStyle__tr">
                <TableRowItems orderedKeys={orderedKeys} item={item} i={i} />
                <TableRowFooter
                  deleteItem={() => {
                    setItemToHandle(item);
                    setDeletePopUp(true);
                  }}
                  editItem={() => {
                    setItemToHandle(item);
                    setEditPopUp(true);
                  }}
                  rowFooter={rowFooter}
                  item={item}
                  i={i}
                />
                <RowsBackgroundStyle i={i} />
              </tr>
            );
          })}
        </TableStyle>
      </>
    );
  };

  return (
    <>
      <Media query={theme.mobile}>
        <MobileTable
          elements={itemsToRender}
          setDeletePopUp={setDeletePopUp}
          deletePopUp={deletePopUp}
          deleteItem={deleteItem}
          orderedKeys={orderedKeys}
          rowFooter={rowFooter}
        />
      </Media>
      <Media query={theme.desktop}>{desktopRender()}</Media>
    </>
  );
};

export default Table;

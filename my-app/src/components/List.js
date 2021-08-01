import React from 'react'
import Item from './Item'

function List(props) {
    const { itemList } = props;

    return (
        itemList.map((item) => (
            <Item item={item} />
        ))
    );
}

export default List;

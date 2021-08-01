import React from 'react';

function Item(props) {
    const { item } = props;
    const [bg, setBg] = React.useState('');
    const [isChecked, setIsChecked] = React.useState('false');

    const handleMouseOver = () => {
        setBg('red');
    }
    const handleMouseOut = () => {
        setBg('');
    }

    const handleChecking = () => {
        if (isChecked) {
            setIsChecked(false);
        }
        else {
            setIsChecked(true);
        }
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleChecking(true)}
            />
            <label
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{backgroundColor: bg}}
            >{item}</label>
        </div>
    );
}

export default Item;

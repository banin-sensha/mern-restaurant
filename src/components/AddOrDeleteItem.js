import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import Beef from '../images/beef.jpg';

const AddOrDeleteItem = () => {
    const [count, setCount] = useState(0);

    const addItem = (e) => {
        e.preventDefault();
        setCount(count + 1);
    }

    const deleteItem = (e) => {
        e.preventDefault();
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <div>
                <img src={Beef} alt="Please click on Button to add or delete" height="60px" />
            </div>
            <div className="add-or-delete">
                {
                    count === 0 &&
                    <div className="add-btn flex flex-center curP font-bold" onClick={addItem}>Add</div>
                }
                {
                    count > 0 &&
                    <span className="flex flex-between">
                        <FontAwesomeIcon className="pl-3x curP" icon={faMinus} onClick={deleteItem} />
                        {count}
                        <FontAwesomeIcon className="pr-3x curP" icon={faPlus} onClick={addItem} />
                    </span>
                }
            </div>
        </div>
    );
}

export default AddOrDeleteItem;
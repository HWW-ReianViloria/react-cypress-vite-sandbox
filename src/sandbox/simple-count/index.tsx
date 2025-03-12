import { useState } from "react";

function addItemHandler<ItemType, FormType>(
    item: ItemType,
    addItemSetState: React.Dispatch<React.SetStateAction<ItemType[]>>,
    setFormSetState?: React.Dispatch<React.SetStateAction<FormType>>
){
    if (!item) return;
    addItemSetState(cur => [...cur, item]);

    if (setFormSetState) {
        setFormSetState("" as FormType);
    }
}

export default function(){
    const [items, setItems] = useState<string[]>([]);
    const [formData, setFormData] = useState('');
    
    return (
        <div>
            <input test-id='add item' type="text" onChange={(e) => setFormData(e.target.value)} placeholder="Add a new item" value={formData}/>
            <button onClick={() => addItemHandler<typeof items[0], typeof formData>(formData, setItems, setFormData)}>Add a new item</button>
            <ul>
                {items.map((item, index) => <li key={'items-'+index}>{item}</li>)}
            </ul>
        </div>
    )
}
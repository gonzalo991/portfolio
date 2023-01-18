import React, { useState } from "react";

function FormInput(props) {

    const { labelText, id, name } = props;
    const type = props.type || "text";
    const [value, setValue] = useState("");
    let contador = 0;

    const handleChange = ev => {
        setValue(ev.target.value);
    }

    return (
        <div className="campo" key={contador++}>
            <label htmlFor={name}>{labelText}</label>
            <input type={type} id={id} name={name}
                onChange={handleChange} value={value} />
        </div>
    )
}


export default FormInput;
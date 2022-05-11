import { useState } from "react";

//CUSTOM HOOK FOR NAME, DESCRIPTION and IMAGE
export function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange (e) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange,
    }
}
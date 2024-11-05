function SearchInput({ inputValue, setInputValue, addItem }) {
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };


    // const handleKeyDown = (event) => {
    //     if (event.key === 'Enter') {
    //         setInputValue('');
    //         addItem();
    //     }
    // };
    return (
        <>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Todo here"
                value={inputValue}
                onChange={handleChange}
                // onKeyDown={handleKeyDown}
            />
        </>
    );
}
export default SearchInput;

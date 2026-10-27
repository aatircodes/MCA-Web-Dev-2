// let name = "Click ME";

// const namech = () => {
//     name = "Aatir";
//     console.log(name);
// }

// const NameChange = () => {
    
//     return (
//         <>
//         <button onClick={namech}>{name}</button>
//         </>
//     )
// }

// export default NameChange

let name = "Click ME";

const namech = () => {
    name = "Aatir";
    console.log(name);
};

const NameChange = () => {
    return (
        <>
            <button onClick={namech}>{name}</button>
        </>
    );
};

export default NameChange;

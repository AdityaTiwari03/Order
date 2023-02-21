import React, { useState, useEffect } from 'react';
import './horiblock.css'
function Horiblock(props) {
    {/*const [txt1, settxt1] = React.useState('Name1')
    const [txt2, settxt2] = React.useState('Name2')
    const [txt3, settxt3] = React.useState('Name3')
    const [txt4, settxt4] = React.useState('Name4')
    const inputRef = React.useRef()
    const input = (event) => {
        console.log(inputRef.id)
        switch (inputRef.current.id){
            case "placeholder1":settxt1(inputRef.current.value);
                break;
            case "placeholder2":settxt2(inputRef.current.value);
            break;
            case "placeholder3":settxt3(inputRef.current.value);
            break;
            case "placeholder4":settxt4(inputRef.current.value);
            break;
        }  
        };*/}
    const [name1, setname1] = useState("Name1");
    const [name2, setname2] = useState("Name2");
    const [name3, setname3] = useState("Name3");
    const [name4, setname4] = useState("Name4");
    useEffect(() => {
        setname1(name1);
        setname2(name2);
        setname3(name3);
        setname4(name4);
    }, [name1]);
    console.log(props.name1)
    return (
        <div>
            <div className="horiblock"><h1 className='oi'> People </h1>
                <div className="horiblocks">
                    <h1 id="name1"> {name1} </h1>
                    <div className="iconneeche"><iconify-icon icon="mdi:message-group"></iconify-icon></div>
                    <div className="iconneeche"><iconify-icon icon="material-symbols:phone-enabled-sharp"></iconify-icon></div>
                    <input className="change" id="placeholder1" value={name1} onChange={(e) => setname1(e.target.value)} /> </div>
                <div className="horiblocks">
                    <h1 id="name2"> {name2} </h1>
                    <div className="iconneeche"><iconify-icon icon="mdi:message-group"></iconify-icon></div>
                    <div className="iconneeche"><iconify-icon icon="material-symbols:phone-enabled-sharp"></iconify-icon></div>
                    <input className="change" id="placeholder2" value={name2} onChange={(e) => setname2(e.target.value)} /> </div>
                <div className="horiblocks">
                    <h1 id="name3"> {name3} </h1>
                    <div className="iconneeche"><iconify-icon icon="mdi:message-group"></iconify-icon></div>
                    <div className="iconneeche"><iconify-icon icon="material-symbols:phone-enabled-sharp"></iconify-icon></div>
                    <input className="change" id="placeholder3" value={name3} onChange={(e) => setname3(e.target.value)} /> </div>
                <div className="horiblocks">
                    <h1 id="name4"> {name4} </h1>
                    <div className="iconneeche"><iconify-icon icon="mdi:message-group"></iconify-icon></div>
                    <div className="iconneeche"><iconify-icon icon="material-symbols:phone-enabled-sharp"></iconify-icon></div>
                    <input className="change" id="placeholder4" value={name4} onChange={(e) => setname4(e.target.value)} /> </div>
            </div>
        </div>
    );
}

export default Horiblock;
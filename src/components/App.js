import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(x){
    return(
        <div>
            <Entry
                key={x.id}
                name={x.name}
                emoji={x.emoji}
                description={x.meaning}
            />
        </div>
    );
}

function App(){
return(
    <div>
        <h1>EMOJIPEDIA</h1>
        <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
);
}

export default App;

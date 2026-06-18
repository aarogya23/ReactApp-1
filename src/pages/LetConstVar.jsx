import React from 'react'

const LetConstVar = () => {

    let a = 6

    let b = 7

    return (
        <>
        <div className="text-4xl text-center underline text-stone-800 bg-stone-50 py-5 font-bold hover:text-5xl">LetConstVar</div>
        
        
        <div className="lg:grid lg:grid-cols-3">
            <div>
                <h2>LET</h2>
                <ul>
                    <li>Block scope</li>
                </ul>
            </div>
            <div>
                <h2>CONST</h2>
            </div>
            <div>
                <h2>VAR</h2>
            </div>


        </div>
        </>
    )

}

export default LetConstVar;

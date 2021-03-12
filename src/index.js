import React from "react";
import ReactDOM from "react-dom";

const Header = function () {
    return <h2>Hello world!</h2>;
};

const Field = () => {
    const holder = "Enter here";
    const styledField = {
        width: "300px"
    };

    return (
        <input
            type="text"
            placeholder={holder}
            style={styledField}
        />
    );
};

const Button = () => {
    const text = "Log in";
    let logged = true;
    return (
        <button>
            {logged ? "Enter" : text}
        </button>
    );
};

const App = () =>
    <>
        <Header/>
        <Field/>
        <Button/>
    </>
;
ReactDOM.render(<App/>, document.getElementById("root"));
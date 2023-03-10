import logo from "./logo.svg";
import "./App.css";

import React, {useRef} from "react";
import {Text, TextWithRef} from "./components";

const Em = ({children}: { children: React.ReactNode }) => (
    <em style={{background: "yellow", color: "black"}}>{children}</em>
);

const Emphasis = ({children}: { children: React.ReactText }) => {
    return <em style={{background: 'yellow', color: "black", fontSize: '40px'}}>{children}</em>
}

function App() {

    // const ref =
    // useRef<HTMLAnchorElement | null>(null)

    const ref2 = useRef<HTMLHeadingElement | null>(null)

    return (
        <div className="App">
            <header className="App-header">
                <img style={{height: 150}} src={logo} className="App-logo" alt="logo"/>

                {/*========= EXAMPLE TESTS ============*/}
                <TextWithRef as="h2" ref={ref2}>This is ref element</TextWithRef>
                <Text as="h1">Hello Text world</Text>
                <Text as="h2">Hello Text world</Text>
                <Text as="h3">Hello Text world</Text>
                <Text as="div">Hello Text world</Text>
                <Text as="a" href="https://www.google.com">Hello Text world</Text>
                {/*<Text as="notHTMLTAG">Hello Text world</Text>*/}
                {/*<Text href="https://www.google.com">Hello Text world</Text>*/}
                <Text as="div" color="green" style={{background: "black"}}>Hello Text world</Text>

                <br/>
                <br/>

                <Text as={Emphasis}>This is important, you are aqwesome! </Text>

                {/*========= EXAMPLE TESTS ============*/}

            </header>
        </div>
    );
}

export default App;

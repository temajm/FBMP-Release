import React, {useState} from "react"
import {theme, ConfigProvider, Button, Typography } from "antd"

import "./ui.scss"
import "./fonts/Fonts.scss"
import Router from "./components/Router.js";
import Auth from "./panels/Auth";
import Static from "./Static";
import Appeal from "./components/Appeal/Appeal";

const App = () => {
    console.log(theme)
    const { token } = theme.useToken();
    Static.tokenTheme = token;
    const {activePanel, setActivePanel} = useState("auth");
    token.colorPrimary = "#FF1935";
    return (
      <div className="App">
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    colorBgBase: "#FFFFFF",
                    colorError: "#FF6340",
                    colorPrimary: "#FF1935",
                    colorSuccess: "#67C91F",
                    colorTextBase: "#2F3342",
                    colorWarning: "#FA8C16",
                    fontFamily: "TT Firs Neue",
                    fontFamilyCode: "TT Firs Neue",
                    fontSize: "16px",
                    sizeStep: "2px",
                    lineHeight: "130%",
                    controlHeightLG: 50,

                    fontSizeHeading1: "var(--text-size-heading-1)",
                    fontSizeHeading2: "var(--text-size-heading-2)",
                    fontSizeHeading3: "var(--text-size-heading-3)",
                    fontSizeHeading4: "var(--text-size-heading-4)",
                }
            }}>
            <Router activePanel={activePanel}>
                {/* <Auth title={"auth"} /> */}
				{/* <Admin /> */}
				<Appeal />
            </Router>
        </ConfigProvider>
      </div>
    );
}

export default App;
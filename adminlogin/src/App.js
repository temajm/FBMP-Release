import React, {useState} from "react"
import {theme, ConfigProvider, Button, Typography, Layout, notification } from "antd"

import "./ui.scss"
import "./fonts/Fonts.scss"
import Router from "./components/Router.js";
import Auth from "./panels/Auth";
import Static from "./Static";

const App = () => {
    console.log(theme)
    const { token } = theme.useToken();
    const [notificationAPI, contextHolder] = notification.useNotification({
        maxCount: 3
    });
    Static.tokenTheme = token;
    const {activePanel, setActivePanel} = useState("auth");
    token.colorBgBase = "#FFFFFF"
    token.colorBgLayout = "#FFFFFF"
    token.colorError = "#FF6340"
    token.colorPrimary = "var(--color-primary)"
    token.colorSuccess = "#67C91F"
    token.colorTextBase = "#2F3342"
    token.colorWarning = "#FA8C16"
    token.colorTextDisabled = "rgba(37, 42, 49, 0.5)"
    token.colorBgContainerDisabled = "#E2E7EE"
    token.fontFamily = "TT Firs Neue"
    token.fontFamilyCode = "TT Firs Neue"
    token.lineHeight = 1;
    token.fontSizeHeading1 = "var(--text-size-heading-1)"
    token.fontSizeHeading2 = "var(--text-size-heading-2)"
    token.fontSizeHeading3 = "var(--text-size-heading-3)"
    token.fontSizeHeading4 = "var(--text-size-heading-4)"
    return (
      <div style={{
          background: token.colorBgBase
      }} className="App">
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
            }}
        >
            {contextHolder}
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
            <Router activePanel={activePanel}>
                <Auth title={"auth"} notificationAPI={notificationAPI} />
            </Router>
            </Layout>
        </ConfigProvider>
      </div>
    );
}

export default App;
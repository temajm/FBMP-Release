import {Layout, ConfigProvider, theme} from "antd";
import Header from "./components/Header/Header.js";
import Content from "./components/Content/Content.js";

import "./Ui.scss"
import HeaderItem from "./components/Header/HeaderItem";
import {DashboardOutlined} from "@ant-design/icons";
import React, {useEffect, useRef} from "react";
import DashboardPanel from "./panels/Dashboard/Dashboard";
import Web from "./helpers/Web";

const App = () => {
    const {token} = theme.useToken();
    const [activePanel, setActivePanel] = React.useState("dashboard");
    const [userInfo, setUserInfo] = React.useState({});

    useEffect(() => {
        Web.getInfo().then((data) => {
            console.log(data.data)
        }).catch((err) => {});
    })

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
    //token.lineWidth = 0
    //token.fontFamily = "TT Firs Neue"
    //token.fontFamilyCode = "TT Firs Neue"
    //token.fontSize = "16px"
    //token.sizeStep = "2px"
    //token.lineHeight = "130%"
    //token.controlHeightLG = 50
    //token.fontSizeHeading1 = "var(--text-size-heading-1)"
    //token.fontSizeHeading2 = "var(--text-size-heading-2)"
    //token.fontSizeHeading3 = "var(--text-size-heading-3)"
    //token.fontSizeHeading4 = "var(--text-size-heading-4)"
    console.log(token)
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
                //token: {...token}
                /*token: {
                    colorBgBase: "#FFFFFF",
                    colorBgLayout: "#FFFFFF",
                    colorError: "#FF6340",
                    colorPrimary: "#FF1935",
                    colorSuccess: "#67C91F",
                    colorTextBase: "#2F3342",
                    colorWarning: "#FA8C16",
                    colorTextDisabled: "rgba(37, 42, 49, 0.5)",
                    colorBgContainerDisabled: "#E2E7EE",
                    lineWidth: 0,
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
                }*/
            }}>
          <Layout>
              <Header activePanel={activePanel} setActivePanel={setActivePanel} menu={[
                  <HeaderItem key={"dashboard"} text={"Статистика"} icon={<DashboardOutlined />} />,
                  <HeaderItem key={"dashboard1"} text={"Статистика"} icon={<DashboardOutlined />} />,
                  <HeaderItem key={"dashboard3"} text={"Статистика"} icon={<DashboardOutlined />} />
              ]}/>
              <Content>
                <DashboardPanel key={"dashboard"} />
              </Content>
          </Layout>
        </ConfigProvider>
    );
}

export default App;

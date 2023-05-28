import React from "react"
import "./Header.scss";
import {Menu, Layout, Badge, Space, Avatar, Tabs, Typography} from "antd";
import { MailOutlined } from '@ant-design/icons';
import logoImage from "../../images/logo.svg"
import {ExportOutlined, BellOutlined, UserOutlined, MenuOutlined} from "@ant-design/icons"
import HeaderItem from "./HeaderItem";

const ITEMS = [
    <HeaderItem icon={<MailOutlined />} text={"Статистика"}/>
]

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuMobileOpened: false
        }
    }

    render() {
        const items = []
        const itemsMobile = []

        let title = "";
        for (let i = 0; i < this.props?.menu?.length; i++) {
            items.push({
                label: this.props.menu[i],
                key: this.props.menu[i].key
            });
            console.log(this.props)
            if(this.props.menu[i].key === this.props?.activePanel){
                title = this.props.menu[i]?.props?.text
            }
        }

        for (let i = 0; i < items.length; i++) {
            itemsMobile.push(<Tabs size={"large"} activeKey={this.props.activePanel} items={[items[i]]} />);
        }

        return(
            <Layout.Header>
                <div className={"left"}>
                    <img src={logoImage} width={45} />
                </div>
                <div className={`center-mobile`}>
                    <Typography.Title level={4}>{title}</Typography.Title>
                </div>
                <div className={`right-mobile`}>
                    <MenuOutlined onClick={() => {
                        this.setState({isMenuMobileOpened: true});
                    }} />
                </div>
                <div className={`menu-mobile-shadow${this.state.isMenuMobileOpened ? " active" : ""}`} onClick={() => {
                    this.setState({isMenuMobileOpened: false});
                }}/>
                <div className={`menu-mobile${this.state.isMenuMobileOpened ? " active" : ""}`}>
                    <div className={"info"}>
                        <Avatar shape="square" />
                        <Typography.Title className={"name"} style={{marginTop: 15, marginBottom: 0}} level={5}>Кручинин Артем</Typography.Title>
                        <Typography.Text className={"nickname"} style={{marginTop: 3}}>temajm</Typography.Text>
                    </div>
                    <div className={"menu-buttons"}>
                        {itemsMobile}
                    </div>
                    <div className={"menu-button-quit"}>
                        <Tabs size={"large"} activeKey={""} items={[{label: <span><ExportOutlined />Выйти</span>, key: "quit"}]} />
                    </div>
                </div>
                <div className={"center"}>
                    <Tabs items={items}/>
                </div>
                <div className={"right"}>
                    <div className={"notification"}>
                        <BellOutlined />
                    </div>
                    <div className={"avatar"}>
                        <Avatar icon={<UserOutlined />} />
                        <div className={"name"}>Кручинин А.</div>
                    </div>
                </div>
            </Layout.Header>
        )
    }
}
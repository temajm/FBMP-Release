import React from "react";
import Panel from "../components/Panel.js";
import previewImage from "../img/preview.png"
import logoImage from "../img/logo.svg"
import "./Auth.scss"
import {Typography, Input, Button} from "antd";
import InputLine from "./../ui/InputLine.js"
import Split from "../ui/Split";
import P2 from "../ui/P2"
import P3 from "../ui/P3"
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export default class Auth extends Panel {
    constructor(props) {
        super(props);
    }

    renderPanel = () => {
        return (
            <div className={"grid"}>
                <div className={"content"}>
                    <img className={"logo"} src={logoImage} />
                    <div className={"form"}>
                        <Typography.Title level={3} className={"title"}>Авторизация</Typography.Title>
                        <P2>Введите данные для входа в систему</P2>
                        <Split orientation={"v"} size={40} />
                        <InputLine placeholder={"Логин"} />
                        <Split orientation={"v"} size={35} />
                        <InputLine className={"inputPassword"} iconRender={(visible) => (visible ? <EyeTwoTone className={"eyeIcon"} width={24} height={24} /> : <EyeInvisibleOutlined style={{transform: "rotateX(180deg)"}} className={"eyeIcon"} width={24} height={24} />)} type={"password"} placeholder={"Пароль"} />
                        <Split orientation={"v"} size={50} />
                        <Button block type={"primary"} size={"large"} style={{
                            fontWeight: 600
                        }}>Войти</Button>
                        <Split orientation={"v"} size={25} />
                        <P3 underline className={"reset-password"}>Я забыл(-а) пароль</P3>
                    </div>
                </div>
                <div className={"prev"}>
                    <div className={"img"} />
                </div>
            </div>
        );
    }
}
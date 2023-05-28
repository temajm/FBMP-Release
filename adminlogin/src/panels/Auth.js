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
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import axios from "axios";
import Web from "../helpers/Web";
import CookieHelper from "../helpers/Cookie";

const MODES = {
    INPUT: 0x0,
    LOADING: 0x1,
}

export default class Auth extends Panel {

    refInputLogin = React.createRef();
    refInputPassword = React.createRef();

    lastClickButtonResetPassword = 0;

    constructor(props) {
        super(props);

        this.state = {
            inputs: {
                login: {
                    focus: false,
                    value: ""
                },
                password: {
                    focus: false,
                    value: ""
                },
            },
            mode: MODES.INPUT
        }
    }

    onLogin = () => {
        if(this.state.inputs.password.value?.length == 0 || this.state.inputs.login.value?.value == 0){
            return false;
        }

        this.setState({
            mode: MODES.LOADING
        })

        Web.sendAuth(this.state.inputs.login.value, this.state.inputs.password.value).then((data) => {
            console.log(data.data.status);
            if(data.data?.response?.status === "error"){
                this.props.notificationAPI.error({
                    message: `Ошибка`,
                    description: data.data?.response?.text,
                    placement: "bottomRight"
                })
            }
            if(data.data?.response?.status === "ok"){
                this.props.notificationAPI.success({
                    message: `Успешно`,
                    description: "Вы успешно авторизовались! Пожалуйста, дождите загрузки страницы.",
                    placement: "bottomRight"
                })
                CookieHelper.setCookie("admin_payload", data.data?.response?.admin_payload);
                CookieHelper.setCookie("admin_protect", data.data?.response?.admin_protect);
                document.location.reload()
            }

            this.setState({
                mode: MODES.INPUT
            })
        }).catch((err) => {
            this.props.notificationAPI.error({
                message: `Error`,
                description: err.toString(),
                placement: "bottomRight"
            })
            this.setState({
                mode: MODES.INPUT
            })
        })

        return true;
    }

    componentDidMount() {
        this.refInputLogin.current.focus()
    }

    renderPanel = () => {
        return (
            <div className={"grid"}>
                <div className={"content"}>
                    <img className={"logo"} src={logoImage}/>
                    <div className={"form"}>
                        <Typography.Title level={3} className={"title"}>Авторизация</Typography.Title>
                        <P2>Введите данные для входа в систему</P2>
                        <div className={"margin4050"} />
                        <InputLine disabled={this.state.mode === MODES.LOADING} refInput={this.refInputLogin} onKeyDown={(e) => {
                            if (e.key.toLowerCase().indexOf("enter") !== -1) {
                                this.refInputPassword.current.focus();
                            }
                        }} onFocus={(val) => {
                            this.state.inputs.login.focus = true;
                            this.setState({inputs: this.state.inputs})
                        }} onBlur={(val) => {
                            this.state.inputs.login.focus = false;
                            this.setState({inputs: this.state.inputs})
                        }} onChange={(val) => {
                            this.state.inputs.login.value = val.target.value
                            this.setState({inputs: this.state.inputs})
                        }} value={this.state.inputs.login.value} placeholder={"Логин"}/>
                        <Split orientation={"v"} size={35}/>
                        <InputLine disabled={this.state.mode === MODES.LOADING} refInput={this.refInputPassword} onFocus={(val) => {
                            this.state.inputs.password.focus = true;
                            this.setState({inputs: this.state.inputs})
                        }} onBlur={(val) => {
                            this.state.inputs.password.focus = false;
                            this.setState({inputs: this.state.inputs})
                        }} onChange={(val) => {
                            this.state.inputs.password.value = val.target.value
                            this.setState({inputs: this.state.inputs})
                        }} onKeyDown={(e) => {
                            if (e.key.toLowerCase().indexOf("enter") !== -1) {
                                this.onLogin();
                            }
                        }} value={this.state.inputs.password.value} className={"inputPassword"} iconRender={(visible) => (visible ?
                            <EyeTwoTone className={"eyeIcon"} width={24} height={24}/> :
                            <EyeInvisibleOutlined style={{transform: "rotateX(180deg)"}} className={"eyeIcon"}
                                                  width={24} height={24}/>)} type={"password"} placeholder={"Пароль"}/>
                        <Split orientation={"v"} size={50}/>
                        <Button loading={this.state.mode === MODES.LOADING} onClick={this.onLogin} disabled={this.state.inputs.password.value?.length == 0 || this.state.inputs.login.value?.value == 0} block type={"primary"} size={"large"} style={{
                            fontWeight: 600,
                            height: 50
                        }}>Войти</Button>
                        <Split orientation={"v"} size={25}/>
                        <P3 underline className={"reset-password"} onClick={() => {
                            const time = new Date().getTime()
                            if(time > this.lastClickButtonResetPassword) {
                                this.lastClickButtonResetPassword = time + 1500;

                                this.props.notificationAPI.info({
                                    message: `Информация`,
                                    description: "Пожалуйста, обратитесь к старшей администрации чтобы получить новый пароль!",
                                    placement: "bottomRight"
                                })
                            }
                        }}><span style={{cursor: "pointer"}}>Я забыл(-а) пароль</span></P3>
                    </div>
                </div>
                <div className={"prev"}>
                    <div className={"img"}/>
                </div>
            </div>
        );
    }
}
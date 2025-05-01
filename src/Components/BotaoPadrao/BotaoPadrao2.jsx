import { StyleBotaoPadrao2 } from "./Styles"

function BotaoPadrao2(props) {
    return (
        <div>
        <StyleBotaoPadrao2 onClick={props.onClick}>
            ENTRAR
        </StyleBotaoPadrao2>
        </div>
    )
}

export default BotaoPadrao2;
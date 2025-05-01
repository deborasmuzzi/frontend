import { StyleBotaoPadrao } from "./Styles"

function BotaoPadrao(props) {
    return (
        <div>
        <StyleBotaoPadrao onClick={props.onClick}>
            CRIAR CONTA
        </StyleBotaoPadrao>
        </div>
    )
}

export default BotaoPadrao;
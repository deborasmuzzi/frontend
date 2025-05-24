import { StyleBotaoPadrao } from "./Styles"

function BotaoPadrao(props) {
    return (
        <div>
        <StyleBotaoPadrao onClick={props.onClick}>
            Fazer login 
        </StyleBotaoPadrao>
        </div>
    )
}

export default BotaoPadrao;
import { Button } from "@mui/material";
import * as s  from "./style";

export default function Header(){
    return(
        <s.HeaderTAG>
            <s.H1TAG>Adeir Moreira</s.H1TAG>
            <nav>
                <s.UlTAG>
                    <li>
                        <Button variant="contained" color="secondary" style={{fontWeight: '700'}}>Sobre</Button>
                    </li>
                    <li>
                        <Button variant="contained" color="secondary" style={{fontWeight: '700'}}>Skills</Button>
                    </li>
                    <li>
                        <Button variant="contained" color="secondary" style={{fontWeight: '700'}}>Projetos</Button>
                    </li>
                    <li>
                        <Button variant="contained" color="secondary" style={{fontWeight: '700'}}>Contato</Button>
                    </li>
                </s.UlTAG>
            </nav>
        </s.HeaderTAG>
    )
}
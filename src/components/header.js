import { StyledHeader, Nav, Logo, Image } from "./styles/header.styled" 
import { Container } from "./styles/container.styles" 
import { Flex } from "./styles/flex.styled"
import { Button } from "./styles/button.styled"

export default function Header() {
    return (
        <StyledHeader>
            <Container>
            <Nav>
               <Logo src='./images/logo.svg' alt=''/>
               <Button>Try It Free</Button>
            </Nav>
            <Flex>
                <div>
                    <h1>Build the Community Your Fans Will Love</h1>
                    <p>
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                    Create connections with your users as you engage in genuine discussion.
                    </p>

                    <Button bg='#ff0099' color='#fff'>
                    Get Started For Free
                    </Button>
                </div>

                <Image src='./images/illustration-mockups.svg' alt=''/>
                </Flex>
            </Container>
        </StyledHeader>
    )
} 
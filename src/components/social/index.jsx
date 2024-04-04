import { Container } from "./style"
import GitHubImage from "../../assets/github.svg"
import LinkedinImage from "../../assets/linkedin.svg"
import CodeImage from "../../assets/code.svg"


export const SocialLinks = () => {
    const GITHUB_LINK = "https://github.com/luisafalquetoz"
    const LINKEDIN_LINK = "https://www.linkedin.com/in/luisa-falqueto/" 

    return (
        <Container>
            <div>
                <a href={GITHUB_LINK} target="_blank">
                    <img src={GitHubImage} alt="GitHub" />
                </a>
                <a href={LINKEDIN_LINK} target="_blank">
                    <img src={LinkedinImage} alt="Linkedin" />
                </a>
            </div>
            <div>
                <img src={CodeImage} alt="Code" />
                Luisa Falqueto
            </div>
        </Container>
    )
}
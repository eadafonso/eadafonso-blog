import { Container, Logo, LinkContainer, Link, ButtonTheme } from "./styles";

import { FiSun } from "react-icons/fi";
import { MdOutlineModeNight } from "react-icons/md";

import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();

  const handleColorChange = () => {
    try {
      setTheme(theme === "light" ? "dark" : "light");
    } catch (error) {
      console.log("Erro", error);
    }
  };

  return (
    <>
      <Container>
        <Logo>Eadafonso | Blog</Logo>

        <LinkContainer>
          <div className="linkContent">
            <Link href="#">Home</Link>
            <Link href="#">Artigos</Link>
            <Link href="#">Forum</Link>
          </div>

          <ButtonTheme onClick={handleColorChange}>
            {theme === "dark" ? (
              <FiSun size={15} />
            ) : (
              <MdOutlineModeNight size={15} />
            )}
          </ButtonTheme>
        </LinkContainer>
      </Container>
    </>
  );
}

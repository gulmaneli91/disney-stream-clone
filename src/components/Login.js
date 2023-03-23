
import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="logo-one" />

                    <SignUp>GET IT ALL THERE</SignUp>

                    <Descrition>
                        Filmes, séries e originais exclusivos da Disney, Pixar, Marvel, Star Wars e National Geographic.
                    </Descrition>

                    <CTALogoTwo src="/images/cta-logo-two.png" alt="logo-two" />

                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
};


export default Login;

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    margin-bottom: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;



`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
`;

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
    align-items: center;

`;

const CTALogoOne = styled.img` 
    width:100%;
    height:100%;
    margin-bottom: 12px;
    max-width:600px;
    min-height: 1px;
    display: block;
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor:pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top:8px;
  margin-bottom:  12px;

  &:hover {
    background: #0483ee;

  }
`;

const Descrition = styled.p`
    color: #f9f9f9;
    font-size: 13px;
    margin: 0 0 24px;
    line-height: 1.5em;
    letter-spacing: 1.5px;

`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display:inline-block;
    vertical-align: bottom;
    width: 100%;

`;
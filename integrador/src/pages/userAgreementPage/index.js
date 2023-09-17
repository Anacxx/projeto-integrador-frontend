import { StyledTitle } from "../signupPage/styled";
import { Paragraph, Section, SectionHeader, UserAgreementContainer } from "./styled";

export const UserAgreementPage = () => {
  
    return (
      <UserAgreementContainer>
        <StyledTitle>Contrato de Usuário - Labeddit</StyledTitle>
  
        <Section>
          <SectionHeader>1. Aceitação dos Termos</SectionHeader>
          <Paragraph>
            1.1. Ao utilizar nossos serviços, você reconhece que leu, compreendeu
            e concorda em cumprir os termos e condições descritos neste Contrato.
          </Paragraph>
        </Section>
  
        <Section>
          <SectionHeader>2. Uso dos Serviços</SectionHeader>
          <Paragraph>
            2.1. Você concorda em utilizar os serviços do Labeddit exclusivamente
            para fins lícitos e em conformidade com todas as leis e regulamentos
            aplicáveis.
          </Paragraph>
          <Paragraph>
            2.2. Você não irá se envolver em atividades que interfiram ou
            prejudiquem a operação de nossos serviços.
          </Paragraph>
        </Section>
  
        <Section>
          <SectionHeader>3. Responsabilidades do Usuário</SectionHeader>
          <Paragraph>
            3.1. Você é responsável por manter a confidencialidade das informações
            de sua conta, incluindo seu nome de usuário e senha.
          </Paragraph>
          <Paragraph>
            3.2. Você é responsável por todas as atividades que ocorrem em sua conta.
          </Paragraph>
        </Section>
  
        <Section>
          <SectionHeader>4. Propriedade Intelectual</SectionHeader>
          <Paragraph>
            4.1. Todo o conteúdo, marcas comerciais, logotipos e propriedade
            intelectual exibidos no Labeddit são de propriedade do Labeddit e não
            podem ser usados sem permissão por escrito.
          </Paragraph>
        </Section>
  
        <Section>
          <SectionHeader>5. Rescisão</SectionHeader>
          <Paragraph>
            5.1. O Labeddit reserva o direito de rescindir ou suspender o seu
            acesso aos serviços a qualquer momento, sem aviso prévio, por qualquer
            motivo.
          </Paragraph>
        </Section>
  
        <Section>
          <SectionHeader>6. Privacidade</SectionHeader>
          <Paragraph>
            6.1. O seu uso dos serviços do Labeddit está sujeito à nossa política de
            privacidade, que você pode consultar para obter informações detalhadas
            sobre como tratamos seus dados pessoais.
          </Paragraph>
        </Section>
  
        <Section>
          <SectionHeader>7. Comunicações</SectionHeader>
          <Paragraph>
            7.1. Ao concordar com este Contrato, você também concorda em receber
            e-mails promocionais do Labeddit sobre coisas legais, novidades e
            atualizações relacionadas ao Labeddit.
          </Paragraph>
        </Section>
      </UserAgreementContainer>
    );
  };
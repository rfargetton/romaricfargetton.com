import React from "react" ;
import styled from "styled-components";
import { graphql } from "gatsby" ;
import { Formik, Form, Field, ErrorMessage } from "formik";
import { GitHub, Linkedin, Mail } from "react-feather" ;

import Seo from "../components/Seo"
import useSocialLinks from '../hooks/SocialLinks' ;
import Layout from "../components/Layout.js" ;
import Button from "../components/Button.js" ;
import { PageHeader, HeaderTitle, HeaderIntro } from "../components/PageHeader.js";
import Content from "../components/Content.js" ;
import Card from "../components/Card.js";

const urlEncode = (data) => {
  return Object.entries(data).map((entry) => {
    return `${encodeURIComponent(entry[0])}=${encodeURIComponent(entry[1])}` ;
  }).join("&");
}

const FlexWrapper = styled.div`  
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`
const ContactForm = styled.form`
`
const FormCard = styled(Card)`
  padding: 2rem;
  flex: 0 0 65%;
  box-sizing: border-box;
  @media (max-width: 768px){
    padding: 1rem;
    flex: 0 0 100%;
    margin-bottom: 2rem;
  }
`
const CustomField = styled(Field)`
  border: 1px solid ${props => props.error ? props.theme.error : props.theme.background};
  font-family: Inter, sans-serif;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1rem;
  background-color: ${props => props.theme.background} ;
  color: ${props => props.theme.link} ;
  display: block;
  width: calc(100% - 2rem);
`
const FieldGroup = styled.div`
  margin-bottom: 1rem;
  label {
    margin: 0.5rem 0;
    display: block;
  }
`
const StyledErrorMessage = styled.div`
  margin: 0.5rem 0;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.error} ;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  width: max-content;
  padding: 0.5rem;
  border-radius: 8px;
  &::before {
    content: "↑";
    margin-right: 0.5rem;
  }
`
const ContactList = styled.div`
  margin-left: 2rem;
  h2 {
    margin-top: 0;
  }
  @media (max-width: 768px){
     margin-left: 0;
  }
`
const Item = styled.div`
  margin: 1rem 0;
  a {
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`

const Contact = ({ data }) => {

  const page = data.page ;
  const { github, email, linkedin } =  useSocialLinks() ;

  return (
    <Layout>

      <Seo 
        title={page.frontmatter.title} 
        description={page.frontmatter.subheading}
      /> 

      <PageHeader>
        <HeaderTitle>
          {page.frontmatter.heading}
        </HeaderTitle>
        <HeaderIntro>
          {page.frontmatter.subheading}
        </HeaderIntro>
      </PageHeader>

      <Content>
        <FlexWrapper>
          <FormCard>
            <Formik
              initialValues={{ 
                email: "",
                message: ""
              }}
              onSubmit={(values, actions) => {
                fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: urlEncode({ "form-name": "contact-form", ...values }) 
                })
                .then(() => {
                  alert("Votre message a bien été transmis. Merci !");
                  actions.resetForm();
                })
                .catch(() => {
                  alert("Il y a eu une erreur lors de la transmission du message. Merci de réessayer.");
                })
                .finally(() => actions.setSubmitting(false));
              }}
              validate={(values) => {
                const emailRegex = /[A-Z0-9%+-_]+@[A-Z0-9.-]+\.[A-Z0-9]+/i ;
                const errors = {};
                if(!values.email){
                  errors.email = "Veuillez compléter ce champ";
                } else if ( !emailRegex.test(values.email) ) {
                  errors.email = "Veuillez entrer une adresse email correcte" ;
                }  
                if(!values.message){
                  errors.message = "Veuillez compléter ce champ";
                }
                return errors ;
              }}
            >
              {({errors, touched}) => (
                <Form name="contact-form" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact-form" />
                  <FieldGroup>
                    <label htmlFor="email">Email</label>
                    <CustomField error={errors.email && touched.email} name="email" placeholder="Votre email" />
                    {errors.email && touched.email ? <StyledErrorMessage>{errors.email}</StyledErrorMessage> :  null}
                  </FieldGroup>

                  <FieldGroup>
                    <label htmlFor="message">Message</label>
                    <CustomField error={errors.message && touched.message} name="message" component="textarea" placeholder="Votre message"/>
                    {errors.message && touched.message ? <StyledErrorMessage>{errors.message}</StyledErrorMessage> :  null}
                  </FieldGroup>

                  <Button type="submit"><span>Envoyer</span></Button>
                </Form>
              )}
            </Formik>
          </FormCard>

          <ContactList>
            <h2>Réseaux et mail</h2>
              <Item>
                <a
                  href={github.frontmatter.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub />
                  <span>Github</span>
                </a>
              </Item>
              <Item>
                <a 
                  href={linkedin.frontmatter.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                  <span>Linkedin</span>
                </a>
              </Item>
              <Item>
                <a 
                  href={email.frontmatter.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Mail />
                  <span>romaric.fargetton@gmail.com</span>
                </a>
              </Item>
          </ContactList>
        </FlexWrapper>
      </Content>

    </Layout>
  )
}

export const query = graphql`
  query {
    page: markdownRemark (
     frontmatter: {title: {eq: "Contact"}} 
    ){
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`
 
export default Contact ; 


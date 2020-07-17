import React from "react" ;
import styled from "styled-components";
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;
import { Formik, Form, Field, ErrorMessage } from "formik";
import { GitHub, Linkedin, Mail } from "react-feather" ;

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
  justify-content: space-between;
`
const ContactForm = styled.form`
`
const FormCard = styled(Card)`
  padding: 2rem;
  flex: 0 0 50%;
`
const FieldGroup = styled.div`
  margin-bottom: 1rem;
  input, textarea {
    font-family: Inter, sans-serif;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1rem;
    background-color: ${props => props.theme.background} ;
    color: ${props => props.theme.link} ;
    display: block;
    width: calc(100% - 2rem );
  }
  label {
    margin: 0.5rem 0;
    display: block;
  }
`
const Contact = ({ data }) => {

  const page = data.page ;
  const { github, email, linkedin } =  useSocialLinks() ;

  return (
    <Layout>

      <Helmet title={page.frontmatter.title} /> 

      <PageHeader>
        <HeaderTitle>
          {page.frontmatter.heading}
        </HeaderTitle>
        <HeaderIntro>
          {page.frontmatter.subheading}
        </HeaderIntro>
      </PageHeader>

      <Content>
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
              alert("Success");
              actions.resetForm();
            })
            .catch(() => {
              alert("Error");
            })
            .finally(() => actions.setSubmitting(false));
          }}
          validate={(values) => {
            const emailRegex = /[A-Z0-9%+-_]+@[A-Z0-9.-]+\.[A-Z0-9]+/i ;
            const errors = {};
            if(!values.email){
              errors.email = "Email is required";
            } else if ( !emailRegex.test(values.email) ) {
              errors.email = "Invalid email address" ;
            }  
            if(!values.message){
              errors.message = "Message is required";
            }
            return errors ;
          }}
        >
          {() => (
            <FormCard>
              <ContactForm name="contact-form" data-netlify={true}>
                <FieldGroup>
                  <label htmlFor="email">Email</label>
                  <Field name="email" placeholder="Votre email" />
                  <ErrorMessage name="email"/>
                </FieldGroup>

                <FieldGroup>
                  <label htmlFor="email">Message</label>
                  <Field name="message" component="textarea" placeholder="Votre message"/>
                  <ErrorMessage name="message"/>
                </FieldGroup>

                <Button type="submit"><span>Envoyer</span></Button>
              </ContactForm>
            </FormCard>
          )}
        </Formik>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <a
                href={github.frontmatter.link}
                target="_blank"
                rel="noreferrer"
              >
                <span>Github</span>
              </a>
            </li>
            <li>
              <a 
                href={linkedin.frontmatter.link}
                target="_blank"
                rel="noreferrer"
              >
                <span>Linkedin</span>
              </a>
            </li>
            <li>
              <a 
                href={email.frontmatter.link}
                target="_blank"
                rel="noreferrer"
              >
                <span>Email</span>
              </a>
            </li>
          </ul>
        </div>
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


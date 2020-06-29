import React from "react" ;
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;
import { Formik, Form, Field, ErrorMessage } from "formik";

import Layout from "../components/Layout.js" ;
import { PageHeader, HeaderTitle, HeaderIntro } from "../components/PageHeader.js";
import Content from "../components/Content.js" ;

const urlEncode = (data) => {
  return Object.entries(data).map((entry) => {
    return `${encodeURIComponent(entry[0])}=${encodeURIComponent(entry[1])}` ;
  }).join("&");
}
const Contact = ({ data }) => {

  const page = data.page ;

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

            console.log(urlEncode(values));
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
            <Form n name="contact-form" data-netlify={true}>
              <label htmlFor="email">Email</label>
              <Field name="email" placeholder="Votre email" />
              <ErrorMessage name="email"/>

              <label htmlFor="email">Message</label>
              <Field name="message" component="textarea" placeholder="Votre message"/>
              <ErrorMessage name="message"/>

              <button type="submit">Envoyer</button>
            </Form>
          )}
        </Formik>
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


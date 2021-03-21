import Head from "next/head";
import React, { useState } from "react";
import ContentItem from "../components/ContentItem";
import TextInput from "../components/TextInput";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { RoundButton } from "../components/buttons/RoundButton";
import { useRouter } from "next/router";
import { activeLocale } from "../data/translations";
import firebase from "../context/firebase";

export default function contact() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);
  const [mail, setMail] = useState({
    email: "",
    fullName: "",
    message: "",
  });

  const sendMail = () => {
    if (mail.email === "" || mail.fullName === "" || mail.message === "") {
      return;
    }

    firebase
      .firestore()
      .collection("mail")
      .add({
        to: "didier.beyens@bemotorsport.com",
        message: {
          subject: "Nieuw bericht via de website",
          html: `Van: ${mail.email} | (${mail.fullName}) </br> Message: ${mail.message} `,
        },
      });
    setMail({ email: "", fullName: "", message: "" });
  };

  return (
    <div>
      <Head>
        <title>BE Motorsport | Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="pt-32 pb-16">
        <div className="px-8 md:px-0 md:flex md:flex-row-reverse md:items-center lg:max-w-screen-xl lg:m-auto">
          <img className="md:w-1/2" src="/wie-zijn-wij.jpg" alt="groepsfoto" />
          <div className="inline-block text-left md:px-5 lg:pr-16">
            <h1 className="text-4xl sm:text-5xl font-medium md:text-right py-5 lg:text-5xl">
              {t.contactPage.title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg md:text-right max-w-screen-md m-auto">
              {t.contactPage.description}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-10">
        <ContentItem
          image="/didier.jpg"
          subTitle="Sales-Manager"
          title="Didier Beyens"
          body={t.contactPage.didierDescription}
          extension={
            <div className="flex flex-col space-y-2 mt-4">
              <RoundButton
                url="mailto:didier.beyens@bemotorsport.com"
                description="didier.beyens@bemotorsport.com"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </RoundButton>
              <RoundButton url="tel:+32478729287" description="+32 (0)478 72 92 87">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </RoundButton>
              <RoundButton url="https://www.linkedin.com/in/didibeyens/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.98292 7.1968c1.2084 0 2.188-.9796 2.188-2.188 0-1.2084-.9796-2.188-2.188-2.188-1.2084 0-2.188.9796-2.188 2.188 0 1.2084.9796 2.188 2.188 2.188zM9.23673 8.85518V20.9942h3.76897v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904h3.771v-6.657c0-3.27-.704-5.78302-4.526-5.78302-1.835 0-3.065 1.007-3.568 1.96002h-.051V8.85518H9.23673zm-6.142 0h3.775V20.9942h-3.775V8.85518z"
                    fill="#fff"
                  />
                </svg>
              </RoundButton>
            </div>
          }
        />
        <ContentItem
          image="/stephan.jpg"
          subTitle="Getting things done!"
          title="Stephan Beyens"
          body={t.contactPage.stephanDescription}
          extension={
            <div className="flex flex-col space-y-2 mt-4">
              <RoundButton
                url="mailto:stephan.beyens@bemotorsport.com"
                description="stephan.beyens@bemotorsport.com"
                reverse
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </RoundButton>
              <RoundButton url="tel:+32475920172" description="+ 32 (0)475 92 01 72" reverse>
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </RoundButton>
              <RoundButton url="https://www.linkedin.com/in/stephan-beyens-1b011586/" reverse>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.98292 7.1968c1.2084 0 2.188-.9796 2.188-2.188 0-1.2084-.9796-2.188-2.188-2.188-1.2084 0-2.188.9796-2.188 2.188 0 1.2084.9796 2.188 2.188 2.188zM9.23673 8.85518V20.9942h3.76897v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904h3.771v-6.657c0-3.27-.704-5.78302-4.526-5.78302-1.835 0-3.065 1.007-3.568 1.96002h-.051V8.85518H9.23673zm-6.142 0h3.775V20.9942h-3.775V8.85518z"
                    fill="#fff"
                  />
                </svg>
              </RoundButton>
            </div>
          }
          reverse
        />
        <ContentItem
          image="/julie.jpg"
          subTitle="Creative Mind"
          title="Julie Beyens"
          body={t.contactPage.julieDescription}
          extension={
            <div className="flex flex-col space-y-2 mt-4">
              <RoundButton
                url="mailto:julie.beyens@bemotorsport.com"
                description="julie.beyens@bemotorsport.com"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </RoundButton>
              <RoundButton url="tel:+32478710676" description="+ 32 (0)478 71 06 76">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </RoundButton>
              <RoundButton url="https://www.linkedin.com/in/juliebeyens/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.98292 7.1968c1.2084 0 2.188-.9796 2.188-2.188 0-1.2084-.9796-2.188-2.188-2.188-1.2084 0-2.188.9796-2.188 2.188 0 1.2084.9796 2.188 2.188 2.188zM9.23673 8.85518V20.9942h3.76897v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904h3.771v-6.657c0-3.27-.704-5.78302-4.526-5.78302-1.835 0-3.065 1.007-3.568 1.96002h-.051V8.85518H9.23673zm-6.142 0h3.775V20.9942h-3.775V8.85518z"
                    fill="#fff"
                  />
                </svg>
              </RoundButton>
            </div>
          }
        />
      </div>
      <div className="py-10 bg-gray-800 relative">
        <img
          className="absolute w-full h-full object-cover inset-0"
          src="/mapview.png"
          alt="europa"
        />
        <div className="max-w-screen-xl m-auto px-6 flex flex-col sm:flex-row xl:px-0 relative">
          <div className="pb-8 flex flex-col items-center sm:w-full sm:items-start sm:justify-end sm:pb-0">
            <h1 className="text-white text-center sm:text-left text-4xl font-medium lg:text-4xl">
              Contact us
            </h1>
          </div>
          <div className="bg-gray-50 rounded-md shadow-md p-6 space-y-3 sm:w-full lg:w-2/3">
            <TextInput
              placeholder="Email"
              value={mail.email}
              onChange={(value) => setMail({ ...mail, email: value })}
              requirement={mail.email === "" || !/\S+@\S+\.\S+/.test(mail.email)}
              required
            />
            <TextInput
              placeholder={t.contactPage.fullName}
              value={mail.fullName}
              onChange={(value) => setMail({ ...mail, fullName: value })}
              requirement={mail.fullName === ""}
              required
            />
            <div>
              <p className="text-sm sm:text-base font-bold py-1"></p>
              <textarea
                className="w-full p-4 resize-none focus:outline-none"
                cols="30"
                rows="10"
                placeholder={t.contactPage.message}
                onChange={(e) => setMail({ ...mail, message: e.target.value })}
              ></textarea>
            </div>
            <PrimaryButton
              label={t.contactPage.sendMessageButtonText}
              fullWidth
              onClick={() => {
                firebase
                  .firestore()
                  .collection("mail")
                  .add({
                    to: "eloyboone@hotmail.com",
                    message: {
                      subject: "Nieuw bericht via de website",
                      html: `Van: ${mail.email} | (${mail.fullName}) </br> Message: ${mail.message} `,
                    },
                  });
                setMail({ email: "", fullName: "", message: "" });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

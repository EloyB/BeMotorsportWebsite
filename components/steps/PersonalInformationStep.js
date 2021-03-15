import React, { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import PrimaryButton from "../buttons/PrimaryButton";
import TextInput from "../TextInput";
import firebase from "../../context/firebase";
import { useRouter } from "next/router";
import { activeLocale } from "../../data/translations";

export default function PersonalInformationStep() {
  const [{ personalInformation, selectedTrackdays, drivers, circuits }, dispatch] = useStateValue();
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  const getCircuitDocs = () => {
    var attachmentsList = selectedTrackdays.map((item) => {
      var circuitIndex = circuits.findIndex((x) => x.id === item.circuit.id);
      var files = circuits[circuitIndex].files;
      var fileIndex = files.findIndex(
        (x) => x.car === item.selectedCar && x.plan === item.selectedPlan && x.language === locale
      );

      return {
        path: files[fileIndex].downloadURL,
        contentType: "application/pdf",
      };
    });
    return attachmentsList;
  };

  const handleValidation = () => {
    if (
      personalInformation.firstName === "" ||
      personalInformation.lastName === "" ||
      personalInformation.email === "" ||
      personalInformation.phone === ""
    ) {
      console.log("nie goe");
    } else {
      dispatch({ type: "SET_ACTIVE_STEP", activeStep: 3 });
      dispatch({ type: "SET_BOOKING" });

      firebase
        .firestore()
        .collection("bookings")
        .add({
          ...personalInformation,
          selectedTrackdays: [...selectedTrackdays],
          drivers: [...drivers],
        });

      firebase
        .firestore()
        .collection("mail")
        .add({
          to: personalInformation.email,
          template: {
            name: locale,
            data: {
              firstName: personalInformation.firstName,
              lastName: personalInformation.lastName,
              circuitName: selectedTrackdays[0].circuit.name,
            },
          },
          message: {
            attachments: getCircuitDocs(),
          },
        });

      firebase
        .firestore()
        .collection("mail")
        .add({
          to: "didier.beyens@bemotorsport.be",
          message: {
            subject: "Offerte aanvraag",
            text: `Nieuwe aanvraag van ${personalInformation.firstName} ${personalInformation.lastName}! Check de backoffice voor meer info!`,
          },
        });

      dispatch({ type: "RESET_FORM" });
    }
  };

  return (
    <div className="w-full py-10 px-5 bg-gray-50">
      <div className="max-w-screen-lg m-auto">
        <p className="font-bold text-2xl pb-5 md:text-4xl">
          <span className="text-motorblue">Stap 3 - </span>
          {t.reservationPage.personalInformationStep.title}
        </p>
        <div className="flex flex-col">
          <div className="w-full py-4 space-y-4 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-5">
            <div className="space-y-4 sm:w-1/2">
              <TextInput
                label={t.reservationPage.general.firstName + "*"}
                value={personalInformation.firstName}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_PERSONAL_INFORMATION",
                    prop: "firstName",
                    value,
                  })
                }
                requirement={personalInformation.firstName === ""}
                required
                errorMessage={"First name is required!"}
              />
              <TextInput
                label={t.reservationPage.general.lastName + "*"}
                value={personalInformation.lastName}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_PERSONAL_INFORMATION",
                    prop: "lastName",
                    value,
                  })
                }
                requirement={personalInformation.lastName === ""}
                required
                errorMessage={"Last name is required!"}
              />
              <TextInput
                label="Email *"
                value={personalInformation.email}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_PERSONAL_INFORMATION",
                    prop: "email",
                    value,
                  })
                }
                requirement={
                  personalInformation.email === "" ||
                  !/\S+@\S+\.\S+/.test(personalInformation.email)
                }
                required
                errorMessage={"Email should be the right format!"}
              />
              <TextInput
                label={t.reservationPage.general.phoneNumber + "*"}
                value={personalInformation.phone}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_PERSONAL_INFORMATION",
                    prop: "phone",
                    value,
                  })
                }
                requirement={personalInformation.phone === ""}
                required
                errorMessage={"Phone number is required!"}
              />
            </div>
            <div className="space-y-4 w-full sm:w-1/2">
              <TextInput
                label={t.reservationPage.general.street}
                value={personalInformation.street}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_PERSONAL_INFORMATION",
                    prop: "street",
                    value,
                  })
                }
              />
              <div className="flex gap-4 w-full">
                <TextInput
                  label={t.reservationPage.general.number}
                  value={personalInformation.number}
                  onChange={(value) =>
                    dispatch({
                      type: "UPDATE_PERSONAL_INFORMATION",
                      prop: "number",
                      value,
                    })
                  }
                />
                <TextInput
                  label={t.reservationPage.general.appartment}
                  value={personalInformation.appartment}
                  onChange={(value) =>
                    dispatch({
                      type: "UPDATE_PERSONAL_INFORMATION",
                      prop: "appartment",
                      value,
                    })
                  }
                />
              </div>
              <TextInput
                label={t.reservationPage.general.city}
                value={personalInformation.city}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_PERSONAL_INFORMATION",
                    prop: "city",
                    value,
                  })
                }
              />
              <div className="flex gap-4 w-full">
                <TextInput
                  label={t.reservationPage.general.zip}
                  value={personalInformation.zip}
                  onChange={(value) =>
                    dispatch({
                      type: "UPDATE_PERSONAL_INFORMATION",
                      prop: "zip",
                      value,
                    })
                  }
                />
                <TextInput
                  label={t.reservationPage.general.country}
                  value={personalInformation.country}
                  onChange={(value) =>
                    dispatch({
                      type: "UPDATE_PERSONAL_INFORMATION",
                      prop: "country",
                      value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="ml-auto pt-8">
            <button
              className="px-6 py-3 bg-transparent focus:outline-none sm:px-16"
              onClick={() => dispatch({ type: "SET_ACTIVE_STEP", activeStep: 1 })}
            >
              {t.reservationPage.general.backButtonText}
            </button>
            <PrimaryButton
              label={t.reservationPage.personalInformationStep.submitButtonText}
              onClick={handleValidation}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

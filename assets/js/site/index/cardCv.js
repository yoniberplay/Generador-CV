const cardCv = (
  valueName,
  valuePhone,
  valueAddress,
  valueEmail,
  valueWebSite,
  valueSummary,
  valueLenguajes,
  valueJobs,
  valueEducation,
  valueSkill,
  valueCertification
) => {
  const mainContainer = document.getElementById("contact-container");

  const divCol4 = document.createElement("div");
  divCol4.setAttribute("class", "col-4 mt-2");

  const divCol8 = document.createElement("div");
  divCol8.setAttribute("class", "col-8 mt-2");

  const divCard = document.createElement("div");
  divCard.setAttribute("class", "card ");

  const divCardHeader = document.createElement("div");
  divCardHeader.setAttribute(
    "class",
    "card-header bg-dark text-light text-center"
  );

  const h5CardHeader = document.createElement("h5");
  h5CardHeader.setAttribute("class", "text-center fw-bold");
  h5CardHeader.innerText = valueName;

  //!------------CONTACT--------------------------------
  const divContact = document.createElement("div");
  divContact.setAttribute("class", "mt-1");

  const h5Contact = document.createElement("h5");
  h5Contact.setAttribute("class", " fw-bold m-0");
  h5Contact.innerText = `Contact`;

  const hr = document.createElement("hr");
  hr.setAttribute("class", " fw-bold mt-1 mb-0");

  divContact.appendChild(h5Contact);
  divContact.appendChild(hr);
  generateContent(divContact, "Address:", valueAddress);
  generateContent(divContact, "Phone:", valuePhone);
  generateContent(divContact, "Email:", valueEmail);

  const divWeb = document.createElement("div");
  divWeb.setAttribute("class", "mt-1");

  const h5Web = document.createElement("h5");
  h5Web.setAttribute("class", " fw-bold m-0");
  h5Web.innerText = `WebSite`;

  const hrweb = document.createElement("hr");
  hrweb.setAttribute("class", " fw-bold mt-1 mb-0");

  divWeb.appendChild(h5Web);
  divWeb.appendChild(hrweb);
  generateContent(divWeb, "", valueWebSite);

  //!------------Languages-----------------------------
  const divLanguages = document.createElement("div");
  divLanguages.setAttribute("class", "mt-2");

  const h5Languages = document.createElement("h5");
  h5Languages.setAttribute("class", " fw-bold m-0");
  h5Languages.innerText = `Languages`;

  const hrLanguages = document.createElement("hr");
  hrLanguages.setAttribute("class", " fw-bold mt-1 mb-0");

  const countLanguages = valueLenguajes.split(",");

  divLanguages.appendChild(h5Languages);
  divLanguages.appendChild(hrLanguages);
  for (const element of countLanguages) {
    generateContent(divLanguages, "", element);
  }

  const divCardBody = document.createElement("div");
  divCardBody.setAttribute("class", "card-body");

  divCardHeader.appendChild(h5CardHeader);
  divCardBody.appendChild(divContact);
  divCardBody.appendChild(divWeb);
  divCardBody.appendChild(divLanguages);
  divCard.appendChild(divCardHeader);
  divCard.appendChild(divCardBody);
  divCol4.appendChild(divCard);

  const divCard8 = (parent) => {
    //!SUMMARY
    const divSummary = document.createElement("div");
    divSummary.setAttribute("class", "");

    const h5Contact = document.createElement("h5");
    h5Contact.setAttribute("class", " fw-bold m-0");
    h5Contact.innerText = `Summary`;

    const hr = document.createElement("hr");
    hr.setAttribute("class", " fw-bold mt-1 mb-0");

    divSummary.appendChild(h5Contact);
    divSummary.appendChild(hr);
    generateContent(divSummary, "", valueSummary);

    //!SKILL
    const divSkill = document.createElement("div");
    divSkill.setAttribute("class", "mt-4");

    const h5Skill = document.createElement("h5");
    h5Skill.setAttribute("class", " fw-bold m-0");
    h5Skill.innerText = `SKILL`;

    const hrSkill = document.createElement("hr");
    hrSkill.setAttribute("class", " fw-bold mt-1 mb-2");

    const ulSKill = document.createElement("UL");
    ulSKill.setAttribute("class", "d-flex flex-wrap justify-content-start");

    const countLanguages = valueSkill.split(",");

    for (const element of countLanguages) {
      const liSKill = document.createElement("LI");
      liSKill.setAttribute("class", "me-3 ms-3");
      const t = document.createTextNode(element);
      liSKill.appendChild(t);
      ulSKill.appendChild(liSKill);
    }

    divSkill.appendChild(h5Skill);
    divSkill.appendChild(hrSkill);
    divSkill.appendChild(ulSKill);

    //!Experience
    const divExperience = document.createElement("div");
    divExperience.setAttribute("class", "mt-4");

    const h5Experience = document.createElement("h5");
    h5Experience.setAttribute("class", " fw-bold m-0");
    h5Experience.innerText = `Experience`;

    const hrExperience = document.createElement("hr");
    hrExperience.setAttribute("class", " fw-bold mt-1 mb-2");

    divExperience.appendChild(h5Experience);
    divExperience.appendChild(hrExperience);
    listText(divExperience, valueJobs);

    //!Education
    const divEducation = document.createElement("div");
    divEducation.setAttribute("class", "mt-4");

    const h5Education = document.createElement("h5");
    h5Education.setAttribute("class", " fw-bold m-0");
    h5Education.innerText = `Education`;

    const hrEducation = document.createElement("hr");
    hrEducation.setAttribute("class", " fw-bold mt-1 mb-0");

    divEducation.appendChild(h5Education);
    divEducation.appendChild(hrEducation);
    listText(divEducation, valueEducation);

    //!Certifications
    const divCertifications = document.createElement("div");
    divCertifications.setAttribute("class", "mt-4");

    const h5Certifications = document.createElement("h5");
    h5Certifications.setAttribute("class", " fw-bold m-0");
    h5Certifications.innerText = `Certifications`;

    const hrCertifications = document.createElement("hr");
    hrCertifications.setAttribute("class", " fw-bold mt-1 mb-0");

    divCertifications.appendChild(h5Certifications);
    divCertifications.appendChild(hrCertifications);
    listText(divCertifications, valueCertification);

    // parent.appendChild(br1);
    parent.appendChild(divSummary);
    parent.appendChild(divSkill);
    parent.appendChild(divExperience);
    parent.appendChild(divEducation);
    parent.appendChild(divCertifications);
  };

  divCard8(divCol8);

  mainContainer.appendChild(divCol4);
  mainContainer.appendChild(divCol8);
};

const generateContent = (divContact, subTitle = "", text) => {
  const divContent = document.createElement("div");
  divContent.setAttribute("class", "mt-1");

  const spanAddress = document.createElement("SPAN");
  spanAddress.setAttribute("class", "fw-bold");
  var t = document.createTextNode(subTitle);
  spanAddress.appendChild(t);

  const pAddress = document.createElement("p");
  pAddress.setAttribute("class", "m-0");
  pAddress.innerText = text;

  divContent.appendChild(spanAddress);
  divContent.appendChild(pAddress);

  divContact.appendChild(divContent);
};

const listText = (div, text) => {
  const ulExperience = document.createElement("UL");
  const arraylen = text.split(",");

  for (const element of arraylen) {
    const liSKill = document.createElement("LI");
    liSKill.setAttribute("class", "me-3 ms-3");
    const t = document.createTextNode(element);
    liSKill.appendChild(t);
    ulExperience.appendChild(liSKill);
  }

  div.appendChild(ulExperience);
};

export default cardCv;

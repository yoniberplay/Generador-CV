
const cardCv = (valueName,valuePhone,valueAddress,valueEmail,valueWebSite,valueSummary,valueLenguajes,valueJobs,valueEducation,valueSkill) => {

    const mainContainer = document.getElementById("contact-container");

    const divCol4 = document.createElement("div"); 
    divCol4.setAttribute("class", "col-4 mt-2");

    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card ");

    const divCardHeader = document.createElement("div");
    divCardHeader.setAttribute(
        "class",
        "card-header bg-dark text-light text-center"
    );

    const h5CardHeader = document.createElement("h5");
    h5CardHeader.setAttribute("class", "text-center fw-bold");
    h5CardHeader.innerText = `YONIBER ENCARACION NUNEZ`;


    //!------------CONTACT--------------------------------
    const divContact = document.createElement("div"); 
    divContact.setAttribute("class", "mt-2");

    const h5Contact  = document.createElement("h5");
    h5Contact.setAttribute("class", " fw-bold m-0");
    h5Contact.innerText = `Contact`;

    const hr  = document.createElement("hr");
    hr.setAttribute("class", " fw-bold mt-1 mb-0");
   

    divContact.appendChild(h5Contact);
    divContact.appendChild(hr);
    generateContent(divContact, "Address:", 'Calle el faro #19, la pscina');
    generateContent(divContact, "Phone:", '8299884791');
    generateContent(divContact, "Email:", 'yoniber@gmail.com');

     
    //! CONTINUE HERE....

    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    const ulCardBody = document.createElement("ul");
    ulCardBody.setAttribute("class", "list-group list-group-flush");

    const liName = document.createElement("li");
    liName.setAttribute("class", "list-group-item");
    liName.innerText = `Name - ${'NOMBRE'}`;

    const liPhone = document.createElement("li");
    liPhone.setAttribute("class", "list-group-item");
    liPhone.innerText = `Phone - ${'TELEFON'}`;

    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "btn btn-outline-danger mt-2 float-end");
    btnDelete.innerText = "Delete";
    btnDelete.type = "button";
    btnDelete.addEventListener("click", function () {
        if (confirm("Are you sure want to delete this contact?")) {
            mainContainer.removeChild(divCol4); //0x1
        }
    });

    divCardHeader.appendChild(h5CardHeader);

    divCardBody.appendChild(ulCardBody);
    divCardBody.appendChild(btnDelete);

    ulCardBody.appendChild(liName);
    ulCardBody.appendChild(liPhone);

    divCard.appendChild(divCardHeader);
    divCard.appendChild(divCardBody);

    divCol4.appendChild(divCard);
    divCol4.appendChild(divContact);
    mainContainer.appendChild(divCol4);
    
}




const generateContent = (  divContact,subTitle, text ) =>{

    const divContent = document.createElement("div"); 
    divContent.setAttribute("class", "mt-2 p-0 bg-primary");
    

    const spanAddress = document.createElement("SPAN");
    spanAddress.setAttribute("class", "text-center fw-bold mt-0");
    var t = document.createTextNode(subTitle);
    var be = document.createElement("br");
    spanAddress.appendChild(be);
    spanAddress.appendChild(t);

    const pAddress = document.createElement("p");
    pAddress.innerText =text;

    
    divContent.appendChild(spanAddress);
    divContent.appendChild(pAddress);

    divContact.appendChild(divContent);
    
}


export default cardCv;
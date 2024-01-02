
const rows = dataString.trim().split('\n');

// Extract information from each row
const customerData = rows.map(row => {
    const [id, name, owner, address, mobile, dueAmount] = row.split('\t');
    return { id, name, owner, address, mobile, dueAmount };
});




function search() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const searchResults = document.getElementById("searchResults");

    // Clear previous search results
    searchResults.innerHTML = "";

    // Split the search input into individual words
    const searchTerms = searchInput.split(' ').filter(term => term.trim() !== '');

    // Filter customers based on search input
    const filteredCustomers = customerData.filter(customer => {
        const customerDetails = Object.values(customer).join(' ').toLowerCase();
        return searchTerms.every(term => customerDetails.includes(term));
    });

    // Display search results
    filteredCustomers.forEach(customer => {
        const resultElement = document.createElement("div");
        resultElement.innerHTML = `
            <p> আইডি : <strong> ${customer.id} </strong></p>
            <p> নাম : <strong> ${customer.name} </strong> </p>
            <p> মালিকের নাম : <strong> ${customer.owner} </strong></p>
            <p> ঠিকানা : <strong> ${customer.address} </strong> </p>
            <p> মোবাইল : <span class="phone-link" onclick="makeCall('${customer.mobile}')">${customer.mobile}</span></p>
            <hr>
            <p> বাকী : <strong style="color:red; font-family: 'Anek Bangla', sans-serif;;" > ${formatNumberAndConvertToBangla(customer.dueAmount)} </strong> </p>
            <p> <strong>${getCustomerDataFromLocalStorage(customer.id).selectedDate}</strong> <input type="date" style="width:15px"></p>
            
        `;
        searchResults.appendChild(resultElement);
    });
}

// Function to make a direct call
//English To Bangla
function formatNumberAndConvertToBangla(number) {
    const banglaDigits = {
        '0': '০',
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
    };
    const formattedNumber = new Intl.NumberFormat('en-IN').format(number);
    const banglaNumber = formattedNumber.replace(/[0-9]/g, digit => banglaDigits[digit]);
    return banglaNumber;
}



function makeCall(phoneNumber) {
    if (phoneNumber.startsWith('+88')) {
        window.location.href = 'tel:+88' + phoneNumber.substring(3);
    } else if(phoneNumber.length === 11){
        window.location.href = 'tel:+88' + phoneNumber;
    }else {
        alert('The Number is Wrong')
    }
}




function handleContainerClick(event) {
    const clickedElement = event.target;

    // Check if the clicked element is an input element of type 'date'
    if (clickedElement.tagName === 'INPUT' && clickedElement.type === 'date') {
        // Attach onchange event listener to the date input
        clickedElement.addEventListener('change', function() {
            const siblings = Array.from(clickedElement.parentElement.parentElement.children);

            siblings[7].querySelector('strong').innerText=clickedElement.value
            setCustomerDataToLocalStorage(siblings[0].querySelector('strong').innerText, clickedElement.value);
           
        });
    }
}

// Attach click event listener to a common ancestor (e.g., document body)
document.body.addEventListener('click', handleContainerClick);



function setCustomerDataToLocalStorage(customerId, selectedDate) {
    const localStorageKey = `customer_${customerId}_data`;
    const dataToStore = {
        customerId: customerId,
        selectedDate: selectedDate
    };
    const jsonData = JSON.stringify(dataToStore);
    localStorage.setItem(localStorageKey, jsonData);
    console.log('Data set in local storage:', dataToStore);
}



function getCustomerDataFromLocalStorage(customerId) {
    const localStorageKey = `customer_${customerId}_data`;
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) {
        // Parse the JSON string to an object
        const parsedData = JSON.parse(storedData);

        console.log('Data retrieved from local storage:', parsedData);

        return parsedData;
    } else {
        console.log('No data found in local storage for customer ID:', customerId);
        return 'Date';
    }
}

// Reload the page (or simulate a page reload) and then get data from local storage

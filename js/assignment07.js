function MenuSelection() {
	if (document.getElementById("menu").value == "Please Select an Option") {
		document.getElementById("createCategory").style.display = 'none';
		document.getElementById("updateCategory").style.display = 'none';
		document.getElementById("deleteCategory").style.display = 'none';
		document.getElementById("listCategory").style.display = 'none';
		document.getElementById("aboutMe").style.display = 'none';
	} 
	else if (document.getElementById("menu").value == "Create Category") {
		document.getElementById("createCategory").style.display = 'inline';
		document.getElementById("updateCategory").style.display = 'none';
		document.getElementById("deleteCategory").style.display = 'none';
		document.getElementById("listCategory").style.display = 'none';
		document.getElementById("aboutMe").style.display = 'none';
	}
	else if(document.getElementById("menu").value == "Update Category") {
		document.getElementById("createCategory").style.display = 'none';
		document.getElementById("updateCategory").style.display = 'inline';
		document.getElementById("deleteCategory").style.display = 'none';
		document.getElementById("listCategory").style.display = 'none';
		document.getElementById("aboutMe").style.display = 'none';
	} 
	else if(document.getElementById("menu").value == "Delete Category") {
		document.getElementById("createCategory").style.display = 'none';
		document.getElementById("updateCategory").style.display = 'none';
		document.getElementById("deleteCategory").style.display = 'inline';
		document.getElementById("listCategory").style.display = 'none';
		document.getElementById("aboutMe").style.display = 'none';
	}
	else if(document.getElementById("menu").value == "List Category") {
		document.getElementById("createCategory").style.display = 'none';
		document.getElementById("updateCategory").style.display = 'none';
		document.getElementById("deleteCategory").style.display = 'none';
		document.getElementById("listCategory").style.display = 'inline';
		document.getElementById("aboutMe").style.display = 'none';
	}
	else if(document.getElementById("menu").value == "About Me") {
		document.getElementById("createCategory").style.display = 'none';
		document.getElementById("updateCategory").style.display = 'none';
		document.getElementById("deleteCategory").style.display = 'none';
		document.getElementById("listCategory").style.display = 'none';
		document.getElementById("aboutMe").style.display = 'inline';
	}
	else {
		document.getElementById("createCategory").style.display = 'none';
		document.getElementById("updateCategory").style.display = 'none';
		document.getElementById("deleteCategory").style.display = 'none';
		document.getElementById("listCategory").style.display = 'none';
		document.getElementById("aboutMe").style.display = 'none';
	}
}

function createCategory() {
	// Starts the variable required for AJAX
	var objRequest = new XMLHttpRequest();

	// Creates URL and query string
	var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCategory";

	// Gets the values from the input text and stores it in variables
	var CName = document.getElementById("CNameCreateCategory").value;
	var CDescription = document.getElementById("CDescriptionCreateCategory").value;

	// Creates a variable that will store the new customer data in JSON format
	var newCategory = '{"CName":"' + CName + '","CDescription":"' + CDescription + '"}';
	//var newcustomer = '{"CustomerID":"' + customerID + '","CompanyName":"' + customerName +'"}';

	// Checks if the object objRequest has new values
	objRequest.onreadystatechange = function() {
		if(objRequest.readyState == 4 && objRequest.status == 200) {
			var output = JSON.parse(objRequest.responseText);
			generateOutputForCreateCategory(output);
		}
	}

	// Initiates the server request
	objRequest.open("POST", url, true);
	//objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	objRequest.send(newCategory);
}

function generateOutputForCreateCategory(output) {
	if(output.WasSuccessful == 1) {
		document.getElementById("result").innerHTML = "The operation was successful!"
	} else if(output.WasSuccessful == 0) {
		document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
	} else {
		document.getElementById("result").innerHTML = "???"
	}
}

function updateCategory() {
	// Starts the variable required for AJAX
	var objRequest = new XMLHttpRequest();

	// Creates URL and query string
	var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateCatDescription";

	// Gets the values from the input text and stores it in variables
	var CID = document.getElementById("CIDUpdateCategory").value;
	var CDescription = document.getElementById("CDescriptionUpdateCategory").value;

	// Creates a variable that will store the new customer data in JSON format
	var updateCategory = '{"CID":"' + CID + '","CDescription":"' + CDescription + '"}';

	// Checks if the object objRequest has new values
	objRequest.onreadystatechange = function() {
		if(objRequest.readyState == 4 && objRequest.status == 200) {
			var output = JSON.parse(objRequest.responseText);
			generateOutputForUpdateCategory(output);
		}
	}

	// Initiates the server request
	objRequest.open("POST", url, true);
	objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	objRequest.send(updateCategory);
}

function generateOutputForUpdateCategory(output) {
	if(parseInt(output) == 1) {
		document.getElementById("result").innerHTML = "The operation was successful!";
	} else if(output == 0) {
		document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
	} else if(output == -2) {
		document.getElementById("result").innerHTML = "Operation failed because the data string supplied could not be deserialized into the service object";
	} else if(output == -3) {
		document.getElementById("result").innerHTML = "Operation failed because a record with the supplied Order ID could not be found";
	} else {
		document.getElementById("result").innerHTML = "???";
	}
}

function deleteCategory() {
	// Starts the variable required for AJAX
	var objRequest = new XMLHttpRequest();

	// Creates URL and query string
	var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCategory/";

	// Gets the values from the input text and stores it in variables
	url += document.getElementById("CIDDeleteCategory").value;

	// Creates a variable that will store the new customer data in JSON format
	//var newcustomer = '{"CustomerID":"' + customerID + '","CompanyName":"' + customerName + '","City":"' + customerCity +'"}';
	//var newcustomer = '{"CustomerID":"' + customerID + '","CompanyName":"' + customerName +'"}';

	// Checks if the object objRequest has new values
	objRequest.onreadystatechange = function() {
		if(objRequest.readyState == 4 && objRequest.status == 200) {
			var output = JSON.parse(objRequest.responseText);
			generateOutputForDeleteCategory(output);
		}
	}

	// Initiates the server request
	objRequest.open("GET", url, true);
	objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	objRequest.send();
}

function generateOutputForDeleteCategory(output) {
	if(output.DeleteCategoryResult.WasSuccessful == 1) {
		document.getElementById("result").innerHTML = "The operation was successful!";
	} else if(output.DeleteCategoryResult.WasSuccessful == 0) {
		document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.DeleteCategoryResult.Exception;
	} else {
		document.getElementById("result").innerHTML = "???";
	}
}

function listCategory() {
	// Starts the variable required for AJAX
	var objRequest = new XMLHttpRequest();

	// Creates URL and query string
	var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCategories";

	// Checks if the object objRequest has new values
	objRequest.onreadystatechange = function() {
		if(objRequest.readyState == 4 && objRequest.status == 200) {
			var output = JSON.parse(objRequest.responseText);
			generateOutputForGetAllCustomers(output);
		}
	}

	// Initiates the server request
	objRequest.open("GET", url, true);
	objRequest.send();
}

function generateOutputForGetAllCustomers(result) {
	var resultTable = "<h1>All Category Informations</h1><br><table border=1><tr><th>Category ID</th><th>Category Name</th><th>Category Description</th></tr>"
	var count = 0;
	// Loop for extracting data from response object
	for (count = 1; count < result.GetAllCategoriesResult.length; count++) {
		resultTable += "<tr><td>" + result.GetAllCategoriesResult[count].CID + "</td><td>" + result.GetAllCategoriesResult[count].CName + "</td><td>" + result.GetAllCategoriesResult[count].CDescription + "</td></tr>";
	}

	resultTable += "</table>";

	document.getElementById("result").innerHTML = resultTable;
}
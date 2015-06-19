var patient = {
  "resourceType": "Patient",
  "extension": [
    {
      "url": "http://hl7.org/fhir/Profile/us-core#race",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://hl7.org/fhir/v3/Race",
            "code": "1096-7"
          }
        ]
      }
    },
    {
      "url": "http://hl7.org/fhir/Profile/us-core#ethnicity",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://hl7.org/fhir/v3/Ethnicity",
            "code": "2162-6"
          }
        ]
      }
    }
  ],
  "text": {
    "status": "generated",
    "div": "<div>\n      <table>\n        <tbody>\n          <tr>\n            <td>Name</td>\n            <td>Peter James <b>Chalmers</b> (&quot;Jim&quot;)</td>\n          </tr>\n          <tr>\n            <td>Address</td>\n            <td>534 Erewhon, Pleasantville, Orange County, 3999</td>\n          </tr>\n          <tr>\n            <td>Contacts</td>\n            <td>Home: unknown. Work: (03) 5555 6473</td>\n          </tr>\n          <tr>\n            <td>Id</td>\n            <td>MRN: 12345 (Acme Healthcare)</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>"
  },
  "name": [
    {
      "use": "official",
      "family": [
        "Chalmers"
      ],
      "given": [
        "Peter"
        
      ]
    }
  ],
  "address": [
    {
      "extension": [
        {
          "url": "http://hl7.org/fhir/Profile/us-core#county",
          "valueString": "Orange County"
        }
      ],
      "use": "home",
      "line": [
        "534 Erewhon St",
        "Apt 123"
      ],
      "city": "PleasantVille",
      "state": "Vic",
      "zip": "3999"
    }
  ],
  "active": true
}

function nameToString(name) {
    if (name.given.length > 1) {
    	var gave = "";
    	for (var i=0; i < name.given.length; ++i) {
    		gave += name.given[i] + " ";	
    	}
    }
    else {
    		var gave = name.given[0];
    }

    var family = name.family ? name.family[0] : '';
    return family + ", " + gave;
}

var name = nameToString(patient.name[0]);

function getAddress(address, location) {
	if (address.use == location) {
		var addr_main = "";
		var city = address.city;
		var state = address.state;
		var zip = address.zip;
		if (address.line.length > 1) {
			for (var i=0; i < address.line.length; ++i) {
				addr_main += address.line[i] + '<br>';
			}
		}
		else {
			addr_main = address.line[0] + '<br>';
		}
	}
	else {
		alert("No address found");
	}
	addr_main += city + ", " + state + " " + zip;
	return addr_main;
}

var address = getAddress(patient.address[0], "home");
$(document).ready(function(){
	$("#Name").text("Patient's name is " + name);
	$("#Address").append('Address: <br>' + address);
});

/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
export var models = {
    "String": {
        "type": "string"
    },
    "Number": {
        "type": "number"
    },
    "Any": {
        "type": "any"
    },
    "Function": {
        "type": "Function"
    },
    "Promise": {
        "type": "Promise"
    },
    "Boolean": {
        "type": "boolean"
    },
    "Observable": {
        "type": "Observable"
    },
    "RESTlikeupdate": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/proxy/tunnel"
            },
            "method": {
                "type": "string",
                "default": "put"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "like": {
                                "type": "number",
                                "default": null
                            },
                            "reports": {
                                "type": "number",
                                "default": null
                            },
                            "hotcount": {
                                "type": "number",
                                "default": null
                            },
                            "disslike": {
                                "type": "number",
                                "default": null
                            },
                            "_id": {
                                "type": "number",
                                "default": null
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "appery-transformation": {
                                "type": "string",
                                "default": "checkTunnel"
                            },
                            "appery-rest": {
                                "type": "string",
                                "default": "d89488eb-5fec-4818-b796-8cc3d6451a53"
                            },
                            "appery-proxy-url": {
                                "type": "string",
                                "default": "http://rundealsmobile.herokuapp.com/urunlers/{_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "title": {
                                "type": "string",
                                "default": "HOUCHICS Solid Pine Step Stool Wooden Kids Potty Training Stool with 220lb Load Capacity Foot Stool for KitchenBedroomLiving RoomBathroom(No Paint)"
                            },
                            "discount": {
                                "type": "string",
                                "default": "50"
                            },
                            "code": {
                                "type": "string",
                                "default": "SQNN6XSB"
                            },
                            "category": {
                                "type": "string",
                                "default": "Baby Products"
                            },
                            "description": {
                                "type": "string",
                                "default": "FOOT PADS:Each wooden stool has separate foot pads that will not hurt your floor and prevent slipping.\n\nSATETY: Arc treatments are made around the small stool to prevent your children from bumping into it.This small stool features an oval slat at the top for easy carrying. Step stools for adults shouldnt be bulky or cumbersome. Easily carry this bed stool from room to room.\n\nMULTIPURPOSE:Use these as ottomans in the living room a desk stool or as a bathroom stool for kids. Like a step ladder this stool will boost you up 9 inches to reach shelves or storage.\n\nSIZE: 15 * 10.1 * 8.8 in suitable size provides convenience for your family this is unpainted you and your kids can DIY the color of the stool. Have a happy time with your family\n\nEASY ASSEMBLY:Detailed instructions are included in each package and you can complete the assembly in a short time.\n\n›\n\nSee more product details\n07/23/2020 03:18:42 PM (EST) • Product prices and availability are accurate as of the date/time indicated and are subject to change."
                            },
                            "price": {
                                "type": "string",
                                "default": "17.5"
                            },
                            "updatedAt": {
                                "type": "string",
                                "default": "2020-07-23T12:36:39.130Z"
                            },
                            "disslike": {
                                "type": "number",
                                "default": 0
                            },
                            "hotcount": {
                                "type": "number",
                                "default": 2
                            },
                            "like": {
                                "type": "number",
                                "default": 8
                            },
                            "imgurl": {
                                "type": "string",
                                "default": "https://images-na.ssl-images-amazon.com/images/I/81FeX-qMlFL.jpg"
                            },
                            "url": {
                                "type": "string",
                                "default": "https://www.amazon.com/dp/B0827L4VJM?tag=runrundeals09-20"
                            },
                            "_id": {
                                "type": "string",
                                "default": "5f19803d9c40ad0017f953ef"
                            },
                            "old_price": {
                                "type": "string",
                                "default": "35.00"
                            },
                            "expirationDate": {
                                "type": "string",
                                "default": "Sat Jul 25 2020 21:00:00 GMT+0000 (Coordinated Universal Time)"
                            },
                            "createdAt": {
                                "type": "string",
                                "default": "2020-07-23T12:19:09.645Z"
                            },
                            "__v": {
                                "type": "number",
                                "default": 0
                            },
                            "id": {
                                "type": "string",
                                "default": "5f19803d9c40ad0017f953ef"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "User_user_query_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/users"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "where": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Master-Key": {
                                "type": "string",
                                "default": "6dafe9a4-085e-438a-9323-2c3e69170780"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "5ecbc5672e22d7013f6c58d0"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "array",
                                "items": [{
                                    "type": "object",
                                    "properties": {
                                        "_updatedAt": {
                                            "type": "string"
                                        },
                                        "_createdAt": {
                                            "type": "string"
                                        },
                                        "uname": {
                                            "type": "string"
                                        },
                                        "auth": {
                                            "type": "object",
                                            "properties": {}
                                        },
                                        "firstName": {
                                            "type": "string"
                                        },
                                        "username": {
                                            "type": "string"
                                        },
                                        "acl": {
                                            "type": "object",
                                            "properties": {
                                                "*": {
                                                    "type": "object",
                                                    "properties": {
                                                        "read": {
                                                            "type": "boolean",
                                                            "default": true
                                                        },
                                                        "write": {
                                                            "type": "boolean",
                                                            "default": true
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "_id": {
                                            "type": "string"
                                        },
                                        "lastName": {
                                            "type": "string"
                                        }
                                    }
                                }]
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "RESTSearch": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/proxy/tunnel"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "title_contains": {
                                "type": "string"
                            },
                            "_limit": {
                                "type": "string"
                            },
                            "_sort": {
                                "type": "string"
                            },
                            "discount_gte": {
                                "type": "string"
                            },
                            "price_lte": {
                                "type": "string",
                                "default": "99"
                            },
                            "category_contains": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "appery-transformation": {
                                "type": "string",
                                "default": "checkTunnel"
                            },
                            "appery-rest": {
                                "type": "string",
                                "default": "d89488eb-5fec-4818-b796-8cc3d6451a53"
                            },
                            "appery-proxy-url": {
                                "type": "string",
                                "default": "http://rundealsmobile.herokuapp.com/urunlers"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "array",
                                "items": [{
                                    "type": "object",
                                    "properties": {
                                        "_id": {
                                            "type": "string",
                                            "default": "5e4fecbe5d011c0017e60e0e"
                                        },
                                        "title": {
                                            "type": "string",
                                            "default": "FITINDEX Smart Digital Body Weight Scale, Bluetooth BMI Bathroom Scale with Smartphone App, Step-on Technology, Sturdy Tempered Glass"
                                        },
                                        "id": {
                                            "type": "string",
                                            "default": "5e4fecbe5d011c0017e60e0e"
                                        },
                                        "updatedAt": {
                                            "type": "string",
                                            "default": "2020-02-21T14:44:14.593Z"
                                        },
                                        "url": {
                                            "type": "string",
                                            "default": "https://www.amazon.com/dp/B07TT61RWD?tag=runrundeals0b-20"
                                        },
                                        "__v": {
                                            "type": "number",
                                            "default": 0
                                        },
                                        "discount": {
                                            "type": "string",
                                            "default": "50"
                                        },
                                        "code": {
                                            "type": "string",
                                            "default": "NO62726E"
                                        },
                                        "expirationDate": {
                                            "type": "string",
                                            "default": "2020-02-26T21:00:00.000Z"
                                        },
                                        "price": {
                                            "type": "string",
                                            "default": "14.99"
                                        },
                                        "old_price": {
                                            "type": "string",
                                            "default": "29.99"
                                        },
                                        "category": {
                                            "type": "string",
                                            "default": "Health & Household"
                                        },
                                        "createdAt": {
                                            "type": "string",
                                            "default": "2020-02-21T14:44:14.593Z"
                                        },
                                        "imgurl": {
                                            "type": "string",
                                            "default": "https://images-na.ssl-images-amazon.com/images/I/61L2LSpQQBL.jpg"
                                        }
                                    }
                                }]
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "RESTbyCategory": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/proxy/tunnel"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "category_contains": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "appery-transformation": {
                                "type": "string",
                                "default": "checkTunnel"
                            },
                            "appery-rest": {
                                "type": "string",
                                "default": "d89488eb-5fec-4818-b796-8cc3d6451a53"
                            },
                            "appery-proxy-url": {
                                "type": "string",
                                "default": "http://rundealsmobile.herokuapp.com/urunlers"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "array",
                                "items": [{
                                    "type": "object",
                                    "properties": {
                                        "_id": {
                                            "type": "string",
                                            "default": "5e74b742cc7a8000175436f4"
                                        },
                                        "url": {
                                            "type": "string",
                                            "default": "https://www.amazon.com/dp/B0861PXVS7?tag=runrundeals0b-20"
                                        },
                                        "createdAt": {
                                            "type": "string",
                                            "default": "2020-03-20T12:29:54.457Z"
                                        },
                                        "code": {
                                            "type": "string",
                                            "default": "MR3VV4RN"
                                        },
                                        "__v": {
                                            "type": "number",
                                            "default": 0
                                        },
                                        "old_price": {
                                            "type": "string",
                                            "default": "27.16"
                                        },
                                        "category": {
                                            "type": "string",
                                            "default": "Baby Products"
                                        },
                                        "price": {
                                            "type": "string",
                                            "default": "13.58"
                                        },
                                        "expirationDate": {
                                            "type": "string",
                                            "default": "2020-03-22T21:00:00.000Z"
                                        },
                                        "discount": {
                                            "type": "string",
                                            "default": "50"
                                        },
                                        "title": {
                                            "type": "string",
                                            "default": "2 Pcs LED Thermometer Digital, Digital Thermometer for Adults, Professional and Oral Thermometer for Babies/Children/Adults/Doctors (Random Color/Style)"
                                        },
                                        "id": {
                                            "type": "string",
                                            "default": "5e74b742cc7a8000175436f4"
                                        },
                                        "imgurl": {
                                            "type": "string",
                                            "default": "https://images-na.ssl-images-amazon.com/images/I/51292klkwsL.jpg"
                                        },
                                        "updatedAt": {
                                            "type": "string",
                                            "default": "2020-03-20T12:29:54.457Z"
                                        }
                                    }
                                }]
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "restapi": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/proxy/tunnel"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "_start": {
                                "type": "string"
                            },
                            "title_contains": {
                                "type": "string"
                            },
                            "_sort": {
                                "type": "string"
                            },
                            "_limit": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "appery-transformation": {
                                "type": "string",
                                "default": "checkTunnel"
                            },
                            "appery-rest": {
                                "type": "string",
                                "default": "d89488eb-5fec-4818-b796-8cc3d6451a53"
                            },
                            "appery-proxy-url": {
                                "type": "string",
                                "default": "http://rundealsmobile.herokuapp.com/urunlers"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "array",
                                "items": [{
                                    "type": "object",
                                    "properties": {
                                        "like": {
                                            "type": "number",
                                            "default": 0
                                        },
                                        "reports": {
                                            "type": "number",
                                            "default": 0
                                        },
                                        "createdAt": {
                                            "type": "string",
                                            "default": "2020-09-11T11:57:34.933Z"
                                        },
                                        "old_price": {
                                            "type": "string",
                                            "default": "10.99"
                                        },
                                        "discount": {
                                            "type": "string",
                                            "default": "50"
                                        },
                                        "description": {
                                            "type": "string",
                                            "default": " Premium Quality: Made with high quality nylon hair non-deformation non-corroding.\n\n Advanced Appearance: The brushes come with metal stamping which locke the pen body and pen tip firmly and is durable and can’t shedding from the brush stick to your nails.\n\n More Choice: The brushes are with different size can fit for any different nails. It is easier to apply glitter powders with them drawing exquisite 3D patterns plaid and flowers used to UV gels and gradient French nails etc.\n\n For Nail Salons And Home Nails: The nail painting brush set is durable for daily use great for professional salons and home DIY nail art suitable for nails specialist and nail learner. Along with its lightweight it is also perfect for a mobile manicure.\n\n Easy To Clean: After using the brushes to apply glitter or gel you can use alcohol or acetone to clean up the bristles fabulously with little effort.\n09/11/2020 02:57:7 PM (EST) • Product prices and availability are accurate as of the date/time indicated and are subject to change."
                                        },
                                        "imgurl": {
                                            "type": "string",
                                            "default": "https://images-na.ssl-images-amazon.com/images/I/61pCNnpJx%2BL.jpg"
                                        },
                                        "rating": {
                                            "type": "number",
                                            "default": 0
                                        },
                                        "featured": {
                                            "type": "boolean",
                                            "default": false
                                        },
                                        "hotcount": {
                                            "type": "number",
                                            "default": 1
                                        },
                                        "star": {
                                            "type": "number",
                                            "default": 0
                                        },
                                        "url": {
                                            "type": "string",
                                            "default": "https://www.amazon.com/dp/B0875L75X5?tag=runrundeals09-20"
                                        },
                                        "code": {
                                            "type": "string",
                                            "default": "AQD6JDH8"
                                        },
                                        "expirationDate": {
                                            "type": "string",
                                            "default": "2020-09-13T21:00:00.000Z"
                                        },
                                        "price": {
                                            "type": "string",
                                            "default": "5.49"
                                        },
                                        "__v": {
                                            "type": "number",
                                            "default": 0
                                        },
                                        "id": {
                                            "type": "string",
                                            "default": "5f5b662e59e079001720b5d0"
                                        },
                                        "updatedAt": {
                                            "type": "string",
                                            "default": "2020-09-11T18:26:53.379Z"
                                        },
                                        "_id": {
                                            "type": "string",
                                            "default": "5f5b662e59e079001720b5d0"
                                        },
                                        "isPrime": {
                                            "type": "boolean",
                                            "default": true
                                        },
                                        "category": {
                                            "type": "string",
                                            "default": "Beauty  Personal Care"
                                        },
                                        "disslike": {
                                            "type": "number",
                                            "default": 0
                                        },
                                        "title": {
                                            "type": "string",
                                            "default": "9Pcs UV Gel Nail Brushes Larbois Poly Extension Gel Acrylic Brush Nail Art Tips Builder Design Dotting Painting Set for Home and Salon Use for Beginner"
                                        }
                                    }
                                }]
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "User_user_update_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/users/{_id}"
            },
            "method": {
                "type": "string",
                "default": "put"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "firstName": {
                                "type": "string"
                            },
                            "lastName": {
                                "type": "string"
                            },
                            "uname": {
                                "type": "string"
                            },
                            "username": {
                                "type": "string"
                            },
                            "acl": {
                                "type": "object",
                                "properties": {
                                    "*": {
                                        "type": "object",
                                        "properties": {
                                            "write": {
                                                "type": "boolean",
                                                "default": true
                                            },
                                            "read": {
                                                "type": "boolean",
                                                "default": true
                                            }
                                        }
                                    }
                                }
                            },
                            "password": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Master-Key": {
                                "type": "string",
                                "default": "6dafe9a4-085e-438a-9323-2c3e69170780"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "5ecbc5672e22d7013f6c58d0"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_updatedAt": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "MailgunEmail_Mailgun_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/d45709e0-745c-4d75-8676-ead84495424e/exec"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "data"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "subject": {
                                "type": "string"
                            },
                            "to": {
                                "type": "string",
                                "default": "sevkonline@gmail.com"
                            },
                            "text": {
                                "type": "string",
                                "default": "Code didn't work"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "text/plain"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestBody": {
                                        "type": "string"
                                    },
                                    "requestParams": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "RESTFeatured": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/proxy/tunnel"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "_sort": {
                                "type": "string",
                                "default": "createdAt:DESC"
                            },
                            "_limit": {
                                "type": "string"
                            },
                            "featured": {
                                "type": "string",
                                "default": "true"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "appery-transformation": {
                                "type": "string",
                                "default": "checkTunnel"
                            },
                            "appery-rest": {
                                "type": "string",
                                "default": "d89488eb-5fec-4818-b796-8cc3d6451a53"
                            },
                            "appery-proxy-url": {
                                "type": "string",
                                "default": "http://rundealsmobile.herokuapp.com/urunlers"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {}
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "SignupService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/users"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "password": {
                                "type": "string"
                            },
                            "username": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{SecuritySettings.database_id}"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_createdAt": {
                                "type": "string"
                            },
                            "username": {
                                "type": "string"
                            },
                            "sessionToken": {
                                "type": "string"
                            },
                            "_updatedAt": {
                                "type": "string"
                            },
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "todoDB_resetpassword_create_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/resetpassword"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "acl": {
                                "type": "object",
                                "properties": {
                                    "*": {
                                        "type": "object",
                                        "properties": {
                                            "read": {
                                                "type": "boolean",
                                                "default": true
                                            },
                                            "write": {
                                                "type": "boolean",
                                                "default": true
                                            }
                                        }
                                    }
                                }
                            },
                            "firstName": {
                                "type": "string"
                            },
                            "lastName": {
                                "type": "string"
                            },
                            "email": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{todoDB_settings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            },
                            "_createdAt": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "LogoutService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/logout"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{SecuritySettings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "primedeals": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/proxy/tunnel"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "appery-transformation": {
                                "type": "string",
                                "default": "checkTunnel"
                            },
                            "appery-rest": {
                                "type": "string",
                                "default": "d89488eb-5fec-4818-b796-8cc3d6451a53"
                            },
                            "appery-proxy-url": {
                                "type": "string",
                                "default": "http://rundealsmobile.herokuapp.com/primedeals"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {}
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "LoginService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/login"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "username": {
                                "type": "string"
                            },
                            "password": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{SecuritySettings.database_id}"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "sessionToken": {
                                "type": "string"
                            },
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "User_me_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/users/me"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{User_settings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string"
                                    },
                                    "_updatedAt": {
                                        "type": "string"
                                    },
                                    "uname": {
                                        "type": "string"
                                    },
                                    "_createdAt": {
                                        "type": "string"
                                    },
                                    "auth": {
                                        "type": "object",
                                        "properties": {}
                                    },
                                    "firstName": {
                                        "type": "string"
                                    },
                                    "lastName": {
                                        "type": "string"
                                    },
                                    "_id": {
                                        "type": "string"
                                    },
                                    "acl": {
                                        "type": "object",
                                        "properties": {
                                            "*": {
                                                "type": "object",
                                                "properties": {
                                                    "read": {
                                                        "type": "boolean",
                                                        "default": true
                                                    },
                                                    "write": {
                                                        "type": "boolean",
                                                        "default": true
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "todoDB_feedbacks_create_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/feedbacks"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "firstName": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "acl": {
                                "type": "object",
                                "properties": {
                                    "*": {
                                        "type": "object",
                                        "properties": {
                                            "read": {
                                                "type": "boolean",
                                                "default": true
                                            },
                                            "write": {
                                                "type": "boolean",
                                                "default": true
                                            }
                                        }
                                    }
                                }
                            },
                            "email": {
                                "type": "string"
                            },
                            "lastName": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{todoDB_settings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            },
                            "_createdAt": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "SocialSharingService": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "url": {
                                "type": "string"
                            },
                            "files": {
                                "type": "array",
                                "items": [{
                                    "type": "string"
                                }]
                            },
                            "subject": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "app": {
                                "type": "string"
                            }
                        }
                    }
                }
            }
        }
    }
};
/**
 * Data storage
 */